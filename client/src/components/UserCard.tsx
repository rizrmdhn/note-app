import { Card, CardContent, CardDescription } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { FaTrash, FaUserPlus, FaUserSlash, FaUserTimes } from "react-icons/fa";

type TUserCardProps = {
  addUser?: boolean;
  deleteFriend?: boolean;
  rejectFriendRequest?: boolean;
  cancelFriendRequest?: boolean;
  name: string;
  avatar: string;
  onAddUser?: () => void;
  onDeleteFriend?: () => void;
  onRejectFriendRequest?: () => void;
  onCancelFriendRequest?: () => void;
};

export default function UserCard({
  addUser,
  deleteFriend,
  rejectFriendRequest,
  cancelFriendRequest,
  name,
  avatar,
  onAddUser,
  onDeleteFriend,
  onRejectFriendRequest,
  onCancelFriendRequest,
}: TUserCardProps) {
  return (
    <Card className="w-72">
      <CardContent className="flex flex-row items-center justify-start self-center p-2 pb-6 pt-6">
        <Avatar className="mr-5">
          <AvatarImage src={avatar} />
          <AvatarFallback>
            {name
              .split(" ")
              .map((n) => n[0])
              .join("")}
          </AvatarFallback>
        </Avatar>
        <CardDescription className="line-clamp-1 text-xl font-bold text-black">
          {name}
        </CardDescription>
        {addUser && (
          <Button
            className="ml-auto bg-transparent hover:bg-transparent"
            onClick={onAddUser}
          >
            <FaUserPlus className="inline-block h-6 w-6 text-black" />
          </Button>
        )}
        {deleteFriend && (
          <Button
            className="ml-auto bg-transparent hover:bg-transparent"
            onClick={onDeleteFriend}
          >
            <FaTrash className="inline-block h-6 w-6 text-black" />
          </Button>
        )}
        {rejectFriendRequest && (
          <Button
            className="ml-auto bg-transparent hover:bg-transparent"
            onClick={onRejectFriendRequest}
          >
            <FaUserSlash className="inline-block h-6 w-6 text-black" />
          </Button>
        )}
        {cancelFriendRequest && (
          <Button
            className="ml-auto bg-transparent hover:bg-transparent"
            onClick={onCancelFriendRequest}
          >
            <FaUserTimes className="inline-block h-6 w-6 text-black" />
          </Button>
        )}
      </CardContent>
    </Card>
  );
}
