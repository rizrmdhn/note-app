import { TCreateNote, TNote } from "@/types";
import { AnyAction } from "@reduxjs/toolkit";
import { hideLoading, showLoading } from "react-redux-loading-bar";
import { AppDispatch } from "..";
import { notes } from "@/utils/api";
import myToast from "@/components/MyToast";
import {
  deleteDetailNoteActionCreator,
  updateDetailNoteActionCreator,
} from "../detailNote/action";

export enum ActionType {
  RECEIVE_NOTES = "RECEIVE_NOTES",
  CREATE_NOTE = "CREATE_NOTE",
  UPDATE_NOTE = "UPDATE_NOTE",
  DELETE_NOTE = "DELETE_NOTE",
}

export interface ReceiveNotesAction {
  type: ActionType.RECEIVE_NOTES;
  payload: {
    notes: TNote[];
  };
}

export interface CreateNoteAction {
  type: ActionType.CREATE_NOTE;
  payload: {
    note: TCreateNote;
  };
}

export interface UpdateNoteAction {
  type: ActionType.UPDATE_NOTE;
  payload: {
    note: TNote;
  };
}

export interface DeleteNoteAction {
  type: ActionType.DELETE_NOTE;
  payload: {
    noteId: number;
  };
}

export type NoteAction =
  | ReceiveNotesAction
  | CreateNoteAction
  | UpdateNoteAction
  | DeleteNoteAction
  | AnyAction;

function receiveNotesActionCreator(notes: TNote[]): ReceiveNotesAction {
  return {
    type: ActionType.RECEIVE_NOTES,
    payload: {
      notes,
    },
  };
}

function createNoteActionCreator(note: TCreateNote): CreateNoteAction {
  return {
    type: ActionType.CREATE_NOTE,
    payload: {
      note,
    },
  };
}

function updateNoteActionCreator(note: TNote): UpdateNoteAction {
  return {
    type: ActionType.UPDATE_NOTE,
    payload: {
      note,
    },
  };
}

function deleteNoteActionCreator(noteId: number): DeleteNoteAction {
  return {
    type: ActionType.DELETE_NOTE,
    payload: {
      noteId,
    },
  };
}

function asyncGetNotes(): unknown {
  return async (dispatch: AppDispatch) => {
    dispatch(showLoading());
    try {
      const notesData = await notes.getNotes();
      dispatch(receiveNotesActionCreator(notesData));
    } catch (error: unknown) {
      myToast.fire({
        icon: "error",
        title: "Get notes failed",
      });
    }
    dispatch(hideLoading());
  };
}

function asyncCreateNote({
  title,
  content,
  tags,
}: {
  title: string;
  content: string;
  tags: string[];
}): unknown {
  return async (dispatch: AppDispatch) => {
    dispatch(showLoading());
    try {
      const note = await notes.createNote({
        title,
        content,
        tags,
      });
      dispatch(createNoteActionCreator(note));
      myToast.fire({
        icon: "success",
        title: "Create note success",
      });
    } catch (error: unknown) {
      myToast.fire({
        icon: "error",
        title: "Create note failed",
      });
    }
    dispatch(hideLoading());
  };
}

function asyncUpdateNote({
  id,
  title,
  content,
  tags,
  isFriendOnly,
  isPrivate,
  isPublic,
}: {
  id: number;
  title: string;
  content: string;
  tags: string[];
  isFriendOnly: boolean;
  isPrivate: boolean;
  isPublic: boolean;
}): unknown {
  return async (dispatch: AppDispatch) => {
    dispatch(showLoading());
    try {
      const note = await notes.updateNote({
        id,
        title,
        content,
        tags,
        isFriendOnly,
        isPrivate,
        isPublic,
      });
      dispatch(updateNoteActionCreator(note));
      dispatch(updateDetailNoteActionCreator(note));
      myToast.fire({
        icon: "success",
        title: "Update note success",
      });
    } catch (error: unknown) {
      myToast.fire({
        icon: "error",
        title: "Update note failed",
      });
    }
    dispatch(hideLoading());
  };
}

function asyncDeleteNote({ id }: { id: number }): unknown {
  return async (dispatch: AppDispatch) => {
    dispatch(showLoading());
    try {
      await notes.deleteNote(id);
      dispatch(deleteNoteActionCreator(id));
      dispatch(deleteDetailNoteActionCreator());
      myToast.fire({
        icon: "success",
        title: "Delete note success",
      });
    } catch (error: unknown) {
      myToast.fire({
        icon: "error",
        title: "Delete note failed",
      });
    }
    dispatch(hideLoading());
  };
}

export { asyncGetNotes, asyncCreateNote, asyncUpdateNote, asyncDeleteNote };
