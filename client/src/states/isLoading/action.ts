import { AnyAction } from "redux";

enum ActionType {
  SET_IS_LOADING = "SET_IS_LOADING",
  UNSET_IS_LOADING = "UNSET_IS_LOADING",
}

interface SetIsLoadingAction {
  type: ActionType.SET_IS_LOADING;
  payload: {
    isLoading: boolean;
  };
}

interface UnsetIsLoadingAction {
  type: ActionType.UNSET_IS_LOADING;
  payload: {
    isLoading: boolean;
  };
}

export type IsLoadingAction =
  | SetIsLoadingAction
  | UnsetIsLoadingAction
  | AnyAction;

function setIsLoadingActionCreator(): SetIsLoadingAction {
  return {
    type: ActionType.SET_IS_LOADING,
    payload: {
      isLoading: true,
    },
  };
}

function unsetIsLoadingActionCreator(): UnsetIsLoadingAction {
  return {
    type: ActionType.UNSET_IS_LOADING,
    payload: {
      isLoading: false,
    },
  };
}

export { ActionType, setIsLoadingActionCreator, unsetIsLoadingActionCreator };
