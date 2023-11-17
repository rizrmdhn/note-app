import Header from "@/components/Header";
import useDocumentTitle from "@/hooks/useDocumentTitle";
import ProfileCard from "@/components/ProfileCard";
import { MouseEvent, useRef } from "react";
import useUpdateUserAvatar from "@/hooks/useUpdateUserAvatar";

export default function ProfilePage() {
  useDocumentTitle("Notes - Profile");

  const changeAvatarRef = useRef<HTMLInputElement>(null);

  const [handleAvatarChange] = useUpdateUserAvatar();

  const handleChangeAvatar = (
    e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>,
  ) => {
    e.preventDefault();
    changeAvatarRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleAvatarChange(e);
  };

  return (
    <div className="ProfilePage h-screen bg-primaryColor">
      <Header />
      <div className="flex w-full flex-row items-center justify-evenly">
        <div className="ProfileCard mt-20 flex w-1/2 flex-col items-center justify-center rounded-lg  p-10">
          <ProfileCard />
        </div>
        <div className="FormProfile mt-20 flex w-1/2 flex-col items-center justify-center  rounded-lg p-10 pr-0">
          <form className="flex w-full flex-col">
            <div className=" flex flex-col items-start justify-center border-b-2 border-white">
              <label className="mb-2 font-poppins text-xl font-bold">
                Nama
              </label>
              <input
                className="mb-5 h-16 w-1/2 rounded-sm border border-black p-2 font-poppins"
                type="text"
                placeholder="Nama"
              />
            </div>
            <div className=" flex flex-col items-start justify-center border-b-2 border-white">
              <label className="mb-2 font-poppins text-xl font-bold">
                Avatar
              </label>
              <input
                ref={changeAvatarRef}
                onChange={handleFileChange}
                className="hidden"
                type="file"
                accept="image/*"
              />
              <button
                onClick={(e) => handleChangeAvatar(e)}
                className="mb-5 h-16 w-1/2 rounded-sm border border-black bg-white p-2 font-poppins"
              >
                Change Avatar
              </button>
            </div>
            <div className=" flex flex-col items-start justify-center border-b-2 border-white">
              <label className="mb-2 font-poppins text-xl font-bold">
                Email
              </label>
              <input
                className="mb-5 h-16 w-1/2 rounded-sm border border-black p-2 font-poppins"
                type="email"
                placeholder="Email"
              />
            </div>
            <div className=" flex flex-col items-start justify-center border-b-2 border-white">
              <label className="mb-2 font-poppins text-xl font-bold">
                Password
              </label>
              <input
                className="mb-5 h-16 w-1/2 rounded-sm border border-black p-2 font-poppins"
                type="password"
                placeholder="Password"
              />
            </div>
            <button className="mt-5 w-1/2 rounded-md bg-white p-5 font-poppins text-lg text-black">
              Update Profile
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
