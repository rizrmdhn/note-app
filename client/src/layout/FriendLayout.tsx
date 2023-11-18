import Header from "@/components/Header";
import { FaUser, FaUserFriends } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";

export default function FriendLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <div className="FriendPage h-screen bg-primaryColor">
      <Header needProfile />
      <div className="flex flex-row items-center justify-center">
        <div className="mt-20 flex w-main-content flex-col items-start justify-start rounded-lg bg-white p-5">
          <div className="FriendPageMenu flex flex-row items-center justify-center">
            <h1
              className={`flex flex-row items-center p-2 text-2xl font-bold text-black hover:cursor-pointer
                    ${
                      location.pathname === "/friends/user-list"
                        ? "rounded-lg rounded-b-none bg-secondaryColor"
                        : ""
                    }`}
              onClick={() => navigate("/friends/user-list")}
            >
              <FaUser className="mr-2 inline-block h-10 w-10" />
              User List
            </h1>
            <h1
              className={`flex flex-row items-center p-2 text-2xl font-bold text-black hover:cursor-pointer
                ${
                  location.pathname === "/friends"
                    ? "rounded-lg rounded-b-none bg-secondaryColor"
                    : ""
                }`}
              onClick={() => navigate("/friends")}
            >
              <FaUserFriends className="mr-2 inline-block h-10 w-10" />
              Your Friends
            </h1>
            <h1
              className={`flex flex-row items-center p-2 text-2xl font-bold text-black hover:cursor-pointer
                ${
                  location.pathname === "/friends/request"
                    ? "rounded-lg rounded-b-none bg-secondaryColor"
                    : ""
                }`}
              onClick={() => navigate("/friends/request")}
            >
              <FaUserFriends className="mr-2 inline-block h-10 w-10" />
              Friend Requests
            </h1>
            <h1
              className={`flex flex-row items-center p-2 text-2xl font-bold text-black hover:cursor-pointer
                ${
                  location.pathname === "/friends/request-sent"
                    ? "rounded-lg rounded-b-none bg-secondaryColor"
                    : ""
                }`}
              onClick={() => navigate("/friends/request-sent")}
            >
              <FaUserFriends className="mr-2 inline-block h-10 w-10" />
              Friend Requests Sent
            </h1>
          </div>
          <div
            className={`FriendPageContent flex w-full flex-row flex-wrap items-center justify-start gap-2 self-stretch rounded-lg  bg-secondaryColor p-10
            ${
              location.pathname === "/friends/user-list"
                ? "rounded-tl-none"
                : ""
            }`}
          >
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
