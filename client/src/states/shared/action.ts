import { hideLoading, showLoading } from "react-redux-loading-bar";
import { AppDispatch } from "..";
import { friend } from "@/utils/api";
import { deleteFriend, receiveFriendsList } from "../friendsList/action";
import {
  deleteFriendRequest,
  receiveFriendRequest,
} from "../friendRequest/action";
import {
  addFriendSent,
  deleteFriendSent,
  receiveFriendSentList,
} from "../friendSentList/action";
import myToast from "@/components/MyToast";
import { TFriendRequestOrSent } from "@/types";

function asyncGetFriends() {
  return async (dispatch: AppDispatch) => {
    dispatch(showLoading());
    try {
      const data = await friend.getFriend();

      dispatch(receiveFriendsList(data.friendList));
      dispatch(receiveFriendRequest(data.friendRequestList));
      dispatch(receiveFriendSentList(data.friendSentList));
    } catch (error) {
      myToast.fire({
        icon: "error",
        title: "Get friends data failed",
      });
    }
    dispatch(hideLoading());
  };
}

function asyncSentFriendRequest(friendRequest: TFriendRequestOrSent) {
  return async (dispatch: AppDispatch) => {
    dispatch(showLoading());
    try {
      await friend.sentFriendRequest(friendRequest.id);
      dispatch(addFriendSent(friendRequest));
      myToast.fire({
        icon: "success",
        title: "Sent friend request success",
      });
    } catch (error) {
      myToast.fire({
        icon: "error",
        title: "Sent friend request failed",
      });
    }
    dispatch(hideLoading());
  };
}

function asyncCancelFriendRequest(friendRequest: TFriendRequestOrSent) {
  return async (dispatch: AppDispatch) => {
    dispatch(showLoading());
    try {
      await friend.cancelFriendRequest(friendRequest.id);
      dispatch(deleteFriendSent(friendRequest.id));
      myToast.fire({
        icon: "success",
        title: "Cancel friend request success",
      });
    } catch (error) {
      myToast.fire({
        icon: "error",
        title: "Cancel friend request failed",
      });
    }
    dispatch(hideLoading());
  };
}

function asyncDeleteFriend(friendId: number) {
  return async (dispatch: AppDispatch) => {
    dispatch(showLoading());
    try {
      await friend.deleteFriend(friendId);
      dispatch(deleteFriend(friendId));
      myToast.fire({
        icon: "success",
        title: "Delete friend success",
      });
    } catch (error) {
      myToast.fire({
        icon: "error",
        title: "Delete friend failed",
      });
    }
    dispatch(hideLoading());
  };
}

function asyncRejectFriendRequest(friendRequest: TFriendRequestOrSent) {
  return async (dispatch: AppDispatch) => {
    dispatch(showLoading());
    try {
      await friend.rejectFriendRequest(friendRequest.id);
      dispatch(deleteFriendRequest(friendRequest.id));
      myToast.fire({
        icon: "success",
        title: "Reject friend request success",
      });
    } catch (error) {
      myToast.fire({
        icon: "error",
        title: "Reject friend request failed",
      });
    }
    dispatch(hideLoading());
  };
}

export {
  asyncGetFriends,
  asyncSentFriendRequest,
  asyncCancelFriendRequest,
  asyncDeleteFriend,
  asyncRejectFriendRequest,
};
