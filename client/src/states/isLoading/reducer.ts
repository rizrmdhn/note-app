import { ActionType, IsLoadingAction } from "./action";

export type TIsLoadingState = boolean;

const initialState: TIsLoadingState = false;

function isLoadingReducer(
  state: TIsLoadingState = initialState,
  action: IsLoadingAction,
): TIsLoadingState {
  switch (action.type) {
    case ActionType.SET_IS_LOADING:
      return action.payload.isLoading;
    case ActionType.UNSET_IS_LOADING:
      return action.payload.isLoading;
    default:
      return state;
  }
}

export default isLoadingReducer;
