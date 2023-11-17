import { TNote } from "@/types";
import { ActionType, NoteAction } from "./action";

export type TNotesState = TNote[] | [];

const initialState: TNotesState = [];

function notesReducer(
  state: TNotesState = initialState,
  action: NoteAction,
): TNotesState {
  switch (action.type) {
    case ActionType.RECEIVE_NOTES:
      return action.payload.notes;
    case ActionType.CREATE_NOTE:
      return [...state, action.payload.note];
    case ActionType.UPDATE_NOTE:
      return state.map((note) =>
        note.id === action.payload.note.id ? action.payload.note : note,
      );
    case ActionType.DELETE_NOTE:
      return state.filter((note) => note.id !== action.payload.noteId);
    default:
      return state;
  }
}

export default notesReducer;
