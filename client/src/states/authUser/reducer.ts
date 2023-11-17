import { TUser } from "@/types";
import { AuthUserAction, ActionType } from "./action";

export type TAuthUserState = TUser | null;

const initialState: TAuthUserState = null;

function authUserReducer(
  state: TAuthUserState = initialState,
  action: AuthUserAction,
): TAuthUserState {
  switch (action.type) {
    case ActionType.SET_AUTH_USER:
      return action.payload.authUser;
    case ActionType.UNSET_AUTH_USER:
      return null;
    default:
      return state;
  }
}

export default authUserReducer;
