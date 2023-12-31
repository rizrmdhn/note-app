import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { GiHamburgerMenu } from "react-icons/gi";
import {
  FaHome,
  FaUserCircle,
  FaUserFriends,
  FaUsers,
  FaDoorOpen,
} from "react-icons/fa";
import { FaPhone, FaNoteSticky } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import useSelectState from "@/hooks/useSelectState";
import { TAuthUserState } from "@/states/authUser/reducer";
import { asyncUnsetAuthUser } from "@/states/authUser/action";
import "moment/locale/id";
import moment from "moment";
import LoadingBar from "react-redux-loading-bar";
import { useAppDispatch } from "@/hooks/useRedux";

type HeaderProps = {
  needProfile?: boolean;
};

export default function Header({ needProfile }: HeaderProps) {
  const authUser = useSelectState("authUser") as TAuthUserState;

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  return (
    <>
      <div className="flex h-header-height flex-row items-center justify-between bg-primaryColor ">
        <div className="Header_title__menu flex flex-row items-center">
          <DropdownMenu>
            <DropdownMenuTrigger className="ml-4">
              <GiHamburgerMenu className="text-4xl" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="ml-4 bg-primaryColor">
              <DropdownMenuItem
                className="mb-3 flex flex-row items-center justify-evenly rounded-md bg-white p-5 pb-2 pt-2 font-poppins font-bold text-black"
                onClick={() => {
                  navigate("/");
                }}
              >
                <FaHome className="mr-2 h-6 w-6" />
                Home
              </DropdownMenuItem>
              <DropdownMenuItem
                className="mb-3 flex flex-row items-center justify-evenly  rounded-md bg-white p-5 pb-2 pt-2 font-poppins font-bold text-black"
                onClick={() => {
                  navigate("/note");
                }}
              >
                <FaNoteSticky className="mr-2 h-6 w-6" />
                Note
              </DropdownMenuItem>
              <DropdownMenuItem
                className="mb-3 flex flex-row items-center justify-evenly  rounded-md bg-white p-5 pb-2 pt-2 font-poppins font-bold text-black"
                onClick={() => {
                  navigate("/profile");
                }}
              >
                <FaUserCircle className="mr-2 h-6 w-6" />
                Profile
              </DropdownMenuItem>
              <DropdownMenuItem
                className="mb-3 flex flex-row items-center justify-evenly  rounded-md bg-white p-5 pb-2 pt-2 font-poppins font-bold text-black"
                onClick={() => {
                  navigate("/friends");
                }}
              >
                <FaUserFriends className="mr-2 h-6 w-6" />
                Friends
              </DropdownMenuItem>
              <DropdownMenuItem
                className="mb-3 flex flex-row items-center justify-evenly  rounded-md bg-white p-5 pb-2 pt-2 font-poppins font-bold text-black"
                onClick={() => {
                  navigate("/contact-us");
                }}
              >
                <FaPhone className="mr-2 h-6 w-6" />
                Contact
              </DropdownMenuItem>
              <DropdownMenuItem
                className="mb-3 flex flex-row items-center justify-evenly  rounded-md bg-white p-5 pb-2 pt-2 font-poppins font-bold text-black"
                onClick={() => {
                  navigate("/about-us");
                }}
              >
                <FaUsers className="mr-2 h-6 w-6" />
                About Us
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <h1 className="ml-4 text-center text-3xl font-bold">Notes</h1>
        </div>
        {needProfile && (
          <div className="flex flex-row items-center">
            <div className="mr-5 flex flex-col items-start">
              <p className="text-lg font-bold">{authUser?.name}</p>
              <p className="text-lg font-bold">
                {moment().locale("id").format("DD MMMM YYYY")}
              </p>
            </div>
            <div className="mr-4 flex flex-row items-center">
              <DropdownMenu>
                <DropdownMenuTrigger>
                  <Avatar className="h-16 w-16">
                    <AvatarImage src={authUser?.avatar} alt={authUser?.name} />
                    <AvatarFallback>
                      {authUser?.name?.split(" ").map((name) => name[0])}
                    </AvatarFallback>
                  </Avatar>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="mr-4 bg-primaryColor">
                  <DropdownMenuItem
                    className="flex flex-row items-center justify-evenly rounded-md bg-white p-5 pb-2 pt-2 font-poppins font-bold text-black"
                    onClick={() => {
                      dispatch(asyncUnsetAuthUser());
                    }}
                  >
                    <FaDoorOpen className="mr-2 h-6 w-6" />
                    Logout
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        )}
      </div>
      <LoadingBar
        style={{ backgroundColor: "#f11946", height: "5px" }}
        updateTime={100}
        maxProgress={95}
        progressIncrease={5}
      />
    </>
  );
}
