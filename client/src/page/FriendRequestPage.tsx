import UserCard from "@/components/UserCard";
import { useAppDispatch } from "@/hooks/useRedux";
import useSelectState from "@/hooks/useSelectState";
import FriendLayout from "@/layout/FriendLayout";
import { TFriendRequestState } from "@/states/friendRequest/reducer";
import { asyncRejectFriendRequest } from "@/states/shared/action";

export default function FriendRequestPage() {
  const dispatch = useAppDispatch();

  const friendRequestList = useSelectState(
    "friendRequestList",
  ) as TFriendRequestState;

  return (
    <FriendLayout>
      {friendRequestList?.length > 0 ? (
        friendRequestList.map((friend) => (
          <UserCard
            key={friend.id}
            name={friend.name}
            avatar={friend.avatar}
            onRejectFriendRequest={() => {
              dispatch(asyncRejectFriendRequest(friend));
            }}
            rejectFriendRequest
          />
        ))
      ) : (
        <h1 className="text-2xl font-bold text-black">No Friend Request</h1>
      )}
    </FriendLayout>
  );
}
