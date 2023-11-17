import { ActionType, IsPreloadAction } from "./action";

export type TIsPreloadState = null | boolean;

const initialState: TIsPreloadState = null;

function isPreloadReducer(
  state: TIsPreloadState = initialState,
  action: IsPreloadAction,
): TIsPreloadState {
  switch (action.type) {
    case ActionType.SET_IS_PRELOAD:
      return action.payload.isPreload;
    default:
      return state;
  }
}

export default isPreloadReducer;
