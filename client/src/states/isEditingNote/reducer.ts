import { ActionType, IsEditingNoteAction } from "./action";

export type TIsEditingNoteState = boolean;

const initialState: TIsEditingNoteState = false;

function isEditingNoteReducer(
  state: TIsEditingNoteState = initialState,
  action: IsEditingNoteAction,
): TIsEditingNoteState {
  switch (action.type) {
    case ActionType.SET_IS_EDITING_NOTE:
      return action.payload.isEditingNote;
    default:
      return state;
  }
}

export default isEditingNoteReducer;
