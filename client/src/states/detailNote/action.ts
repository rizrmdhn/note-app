import { TErrorResponse, TNote } from "@/types";
import { notes } from "@/utils/api";
import { AnyAction } from "@reduxjs/toolkit";
import { AppDispatch } from "..";
import { hideLoading, showLoading } from "react-redux-loading-bar";
import myToast from "@/components/MyToast";
import { AxiosError } from "axios";

export enum ActionType {
  RECEIVE_DETAIL_NOTE = "RECEIVE_DETAIL_NOTE",
  UPDATE_DETAIL_NOTE = "UPDATE_DETAIL_NOTE",
  UPDATE_DETAIL_NOTE_CONTENT = "UPDATE_DETAIL_NOTE_CONTENT",
  DELETE_DETAIL_NOTE = "DELETE_DETAIL_NOTE",
  RESTORE_DETAIL_NOTE = "RESTORE_DETAIL_NOTE",
}

export interface ReceiveDetailNoteAction {
  type: ActionType.RECEIVE_DETAIL_NOTE;
  payload: {
    detailNote: TNote;
  };
}

export interface UpdateDetailNoteAction {
  type: ActionType.UPDATE_DETAIL_NOTE;
  payload: {
    detailNote: TNote;
  };
}

export interface UpdateDetailNoteContentAction {
  type: ActionType.UPDATE_DETAIL_NOTE_CONTENT;
  payload: {
    content: string;
  };
}

export interface DeleteDetailNoteAction {
  type: ActionType.DELETE_DETAIL_NOTE;
  payload: null;
}

export interface RestoreDetailNoteAction {
  type: ActionType.RESTORE_DETAIL_NOTE;
  payload: null;
}

export type DetailNoteAction =
  | ReceiveDetailNoteAction
  | UpdateDetailNoteAction
  | UpdateDetailNoteContentAction
  | DeleteDetailNoteAction
  | RestoreDetailNoteAction
  | AnyAction;

function receiveDetailNoteActionCreator(
  detailNote: TNote,
): ReceiveDetailNoteAction {
  return {
    type: ActionType.RECEIVE_DETAIL_NOTE,
    payload: {
      detailNote,
    },
  };
}

function updateDetailNoteActionCreator(
  detailNote: TNote,
): UpdateDetailNoteAction {
  return {
    type: ActionType.UPDATE_DETAIL_NOTE,
    payload: {
      detailNote,
    },
  };
}

function updateDetailNoteContentActionCreator(
  content: string,
): UpdateDetailNoteContentAction {
  return {
    type: ActionType.UPDATE_DETAIL_NOTE_CONTENT,
    payload: {
      content,
    },
  };
}

function deleteDetailNoteActionCreator(): DeleteDetailNoteAction {
  return {
    type: ActionType.DELETE_DETAIL_NOTE,
    payload: null,
  };
}

function restoreDetailNoteActionCreator(): RestoreDetailNoteAction {
  return {
    type: ActionType.RESTORE_DETAIL_NOTE,
    payload: null,
  };
}

function asyncGetDetailNote({ noteId }: { noteId: number }): unknown {
  return async (dispatch: AppDispatch) => {
    dispatch(showLoading());
    try {
      const detailNote = await notes.getNoteById(noteId);
      dispatch(receiveDetailNoteActionCreator(detailNote));
    } catch (error) {
      const axiosError = error as AxiosError<TErrorResponse>;
      const customMessage = axiosError.message;

      if (customMessage) {
        myToast.fire({
          icon: "error",
          title: customMessage,
        });

        return;
      }

      myToast.fire({
        icon: "error",
        title: "Get detail note failed",
      });
    } finally {
      dispatch(hideLoading());
    }
  };
}

function asyncEmptyDetailNote(): unknown {
  return async (dispatch: AppDispatch) => {
    dispatch(deleteDetailNoteActionCreator());
  };
}

function asyncUpdateDetailContent({ content }: { content: string }): unknown {
  return async (dispatch: AppDispatch) => {
    dispatch(updateDetailNoteContentActionCreator(content));
  };
}

export {
  receiveDetailNoteActionCreator,
  updateDetailNoteActionCreator,
  deleteDetailNoteActionCreator,
  restoreDetailNoteActionCreator,
  asyncGetDetailNote,
  asyncEmptyDetailNote,
  asyncUpdateDetailContent,
};
