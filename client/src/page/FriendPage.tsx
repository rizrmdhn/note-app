import Header from "@/components/Header";
import UserCard from "@/components/UserCard";
import useSelectState from "@/hooks/useSelectState";
import { TUserListState } from "@/states/userList/reducer";
import { FaUser, FaUserFriends } from "react-icons/fa";

export default function FriendPage() {
  const userList = useSelectState("userList") as TUserListState;
  console.log("🚀 ~ file: FriendPage.tsx:9 ~ FriendPage ~ userList:", userList);
  return (
    <div className="FriendPage h-screen bg-primaryColor">
      <Header needProfile />
      <div className="flex flex-row items-center justify-center">
        <div className="mt-20 flex w-main-content flex-col items-start justify-start rounded-lg bg-white p-5">
          <div className="FriendPageMenu flex flex-row items-center justify-center">
            <h1 className="mr-5 flex flex-row items-center rounded-lg rounded-b-none bg-secondaryColor p-2 text-2xl font-bold text-black">
              <FaUser className="mr-2 inline-block h-10 w-10" />
              User List
            </h1>
            <h1 className="flex flex-row items-center text-2xl font-bold text-black">
              <FaUserFriends className="mr-2 inline-block h-10 w-10" />
              Your Friends
            </h1>
          </div>
          <div className="FriendPageContent flex w-full flex-row flex-wrap items-center justify-start gap-2 self-stretch rounded-lg rounded-tl-none bg-secondaryColor p-10">
            {userList?.length > 0 ? (
              userList.map((user) => (
                <UserCard
                  key={user.id}
                  name={user.name}
                  avatar={user.avatar}
                  onAddUser={() => {
                    console.log("add user");
                  }}
                  addUser
                />
              ))
            ) : (
              <h1 className="text-2xl font-bold text-black">No User</h1>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
