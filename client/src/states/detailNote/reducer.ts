import { TNote } from "@/types";
import { ActionType, DetailNoteAction } from "./action";

export type TDetailNoteState = TNote | null;

const initialState: TDetailNoteState = null;

function detailNoteReducer(
  state: TDetailNoteState = initialState,
  action: DetailNoteAction,
): TDetailNoteState {
  switch (action.type) {
    case ActionType.RECEIVE_DETAIL_NOTE:
      return action.payload.detailNote;
    case ActionType.UPDATE_DETAIL_NOTE:
      return action.payload.detailNote;
    case ActionType.UPDATE_DETAIL_NOTE_CONTENT:
      if (state) {
        return {
          ...state,
          content: action.payload.content,
        };
      }
      return null;
    case ActionType.DELETE_DETAIL_NOTE:
      return null;
    case ActionType.RESTORE_DETAIL_NOTE:
      return null;
    default:
      return state;
  }
}

export default detailNoteReducer;
