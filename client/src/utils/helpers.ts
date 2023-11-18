import { TFriendList, TFriendRequestOrSent, TUser } from "@/types";

function convertToTypeFriendList(data: TUser): TFriendList {
  return {
    friend_id: data.id,
    friend_name: data.name,
    friend_avatar: data.avatar,
    friend_email: data.email,
    friend_username: data.username,
  };
}

function convertToTypeFriendRequestOrSentList(
  data: TUser,
): TFriendRequestOrSent {
  return {
    id: data.id,
    name: data.name,
    avatar: data.avatar,
    email: data.email,
    username: data.username,
  };
}

export { convertToTypeFriendList, convertToTypeFriendRequestOrSentList };
