import { AnyAction } from "@reduxjs/toolkit";

export enum ActionType {
  SET_IS_EDITING_NOTE = "SET_IS_EDITING_NOTE",
}

export interface SetIsEditingNoteAction {
  type: ActionType.SET_IS_EDITING_NOTE;
  payload: {
    isEditingNote: boolean;
  };
}

export type IsEditingNoteAction = SetIsEditingNoteAction | AnyAction;

export function setIsEditingNoteActionCreator(
  isEditingNote: boolean,
): SetIsEditingNoteAction {
  return {
    type: ActionType.SET_IS_EDITING_NOTE,
    payload: {
      isEditingNote,
    },
  };
}
