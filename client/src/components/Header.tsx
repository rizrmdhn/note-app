import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { GiHamburgerMenu } from "react-icons/gi";

export default function Header() {
  return (
    <div className="bg-primaryColor flex h-header-height flex-row items-center justify-between ">
      <div className="Header_title__menu flex flex-row items-center">
        <button className="ml-4">
          <GiHamburgerMenu className="text-4xl" />
        </button>
        <h1 className="ml-4 text-center text-3xl font-bold">Notes</h1>
      </div>
      <div className="flex flex-row items-center">
        <div className="mr-5 flex flex-col items-start">
          <p className="text-lg font-bold">User</p>
        </div>
        <div className="mr-4 flex flex-row items-center">
          <Avatar className="h-16 w-16">
            <AvatarImage />
            <AvatarFallback>User</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </div>
  );
}
