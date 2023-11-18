import UserCard from "@/components/UserCard";
import { useAppDispatch } from "@/hooks/useRedux";
import useSelectState from "@/hooks/useSelectState";
import FriendLayout from "@/layout/FriendLayout";
import { TFriendListState } from "@/states/friendsList/reducer";
import { asyncDeleteFriend } from "@/states/shared/action";

export default function FriendPage() {
  const dispatch = useAppDispatch();

  const friendList = useSelectState("friendList") as TFriendListState;
  return (
    <FriendLayout>
      {friendList?.length > 0 ? (
        friendList.map((friend) => (
          <UserCard
            key={friend.friend_id}
            name={friend.friend_name}
            avatar={friend.friend_avatar}
            onDeleteFriend={() => {
              dispatch(asyncDeleteFriend(friend.friend_id));
            }}
            deleteFriend
          />
        ))
      ) : (
        <h1 className="text-2xl font-bold text-black">No Friend</h1>
      )}
    </FriendLayout>
  );
}
