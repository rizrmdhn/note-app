import UserCard from "@/components/UserCard";
import { useAppDispatch } from "@/hooks/useRedux";
import useSelectState from "@/hooks/useSelectState";
import FriendLayout from "@/layout/FriendLayout";
import { TFriendSentState } from "@/states/friendSentList/reducer";
import { asyncCancelFriendRequest } from "@/states/shared/action";

export default function FriendRequestSentPage() {
  const dispatch = useAppDispatch();

  const friendSentList = useSelectState("friendSentList") as TFriendSentState;

  return (
    <FriendLayout>
      {friendSentList?.length > 0 ? (
        friendSentList.map((friend) => (
          <UserCard
            key={friend.id}
            name={friend.name}
            avatar={friend.avatar}
            onCancelFriendRequest={() => {
              dispatch(asyncCancelFriendRequest(friend));
            }}
            cancelFriendRequest
          />
        ))
      ) : (
        <h1 className="text-2xl font-bold text-black">
          No Friend Request Sent
        </h1>
      )}
    </FriendLayout>
  );
}
