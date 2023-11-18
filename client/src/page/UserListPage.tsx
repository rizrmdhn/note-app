import UserCard from "@/components/UserCard";
import { useAppDispatch } from "@/hooks/useRedux";
import useSelectState from "@/hooks/useSelectState";
import FriendLayout from "@/layout/FriendLayout";
import { asyncSentFriendRequest } from "@/states/shared/action";
import { TUserListState } from "@/states/userList/reducer";
import { convertToTypeFriendRequestOrSentList } from "@/utils/helpers";

export default function UserListPage() {
  const dispatch = useAppDispatch();

  const userList = useSelectState("userList") as TUserListState;
  const friendList = useSelectState("friendList") as TUserListState;
  const friendRequestList = useSelectState(
    "friendRequestList",
  ) as TUserListState;
  const friendSentList = useSelectState("friendSentList") as TUserListState;

  const filterUserList = userList?.filter(
    (user) =>
      !friendList?.some((friend) => friend.id === user.id) &&
      !friendRequestList?.some((friend) => friend.id === user.id) &&
      !friendSentList?.some((friend) => friend.id === user.id),
  );

  return (
    <FriendLayout>
      {filterUserList?.length > 0 ? (
        filterUserList.map((user) => (
          <UserCard
            key={user.id}
            name={user.name}
            avatar={user.avatar}
            onAddUser={() => {
              const convertedUser = convertToTypeFriendRequestOrSentList(user);
              dispatch(asyncSentFriendRequest(convertedUser));
            }}
            addUser
          />
        ))
      ) : (
        <h1 className="text-2xl font-bold text-black">No User</h1>
      )}
    </FriendLayout>
  );
}
