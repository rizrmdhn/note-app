import { useSelector } from "react-redux";
import myToast from "@/components/MyToast";
import { RootState } from "@/states";
import { TAuthUserState } from "@/states/authUser/reducer";
import { TIsLoadingState } from "@/states/isLoading/reducer";
import { TIsPreloadState } from "@/states/isPreload/reducer";
import { TNotesState } from "@/states/notes/reducer";
import { TDetailNoteState } from "@/states/detailNote/reducer";
import { TIsEditingNoteState } from "@/states/isEditingNote/reducer";
import { TUserListState } from "@/states/userList/reducer";
import { TFriendListState } from "@/states/friendsList/reducer";
import { TFriendRequestState } from "@/states/friendRequest/reducer";
import { TFriendSentState } from "@/states/friendSentList/reducer";

function useSelectState(state: string) {
  const authUser = useSelector<RootState, TAuthUserState>(
    (state) => state.authUser,
  );
  const isLoading = useSelector<RootState, TIsLoadingState>(
    (state) => state.isLoading,
  );
  const isPreload = useSelector<RootState, TIsPreloadState>(
    (state) => state.isPreload,
  );
  const notes = useSelector<RootState, TNotesState>((state) => state.notes);
  const detailNote = useSelector<RootState, TDetailNoteState>(
    (state) => state.detailNote,
  );
  const isEditingNote = useSelector<RootState, TIsEditingNoteState>(
    (state) => state.isEditingNote,
  );
  const userList = useSelector<RootState, TUserListState>(
    (state) => state.userList,
  );
  const friendList = useSelector<RootState, TFriendListState>(
    (state) => state.friendList,
  );
  const friendRequestList = useSelector<RootState, TFriendRequestState>(
    (state) => state.friendRequestList,
  );
  const friendSentList = useSelector<RootState, TFriendSentState>(
    (state) => state.friendSentList,
  );

  switch (state) {
    case "authUser":
      return authUser;
    case "isLoading":
      return isLoading;
    case "isPreload":
      return isPreload;
    case "notes":
      return notes;
    case "detailNote":
      return detailNote;
    case "isEditingNote":
      return isEditingNote;
    case "userList":
      return userList;
    case "friendList":
      return friendList;
    case "friendRequestList":
      return friendRequestList;
    case "friendSentList":
      return friendSentList;
    default:
      myToast.fire({
        icon: "error",
        title: "Invalid state name",
      });
      return null;
  }
}

export default useSelectState;
