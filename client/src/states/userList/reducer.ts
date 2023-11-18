import { TUser } from "@/types";
import { ActionType, UserListAction } from "./action";

export type TUserListState = TUser[] | [];

const initialState: TUserListState = [];

function userListReducer(
  state: TUserListState = initialState,
  action: UserListAction,
): TUserListState {
  switch (action.type) {
    case ActionType.RECEIVER_USER_LIST:
      return action.payload.userList;
    default:
      return state;
  }
}

export default userListReducer;
