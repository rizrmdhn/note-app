import Header from "@/components/Header";
import useDocumentTitle from "@/hooks/useDocumentTitle";
import ProfileCard from "@/components/ProfileCard";

export default function ProfilePage() {
  useDocumentTitle("Notes - Profile");
  return (
    <div className="bg-primaryColor ProfilePage h-screen">
      <Header />
      <div className="w-main-content flex flex-row items-center justify-evenly">
        <div className="ProfileCard mt-20 flex flex-col items-center justify-center rounded-lg  p-10">
          <ProfileCard />
        </div>
        <div className="FormProfile mt-20 flex flex-col items-center justify-center rounded-lg  p-10">
          <form className="flex w-1/2 flex-col">
            <label className="font-poppins mb-2 text-xl font-bold">Nama</label>
            <input
              className="font-poppins mb-5 h-16 w-64 rounded-sm border border-black p-2"
              type="text"
              placeholder="Nama"
            />
            <label className="font-poppins mb-2 text-xl font-bold">
              Avatar
            </label>
            <input
              className="font-poppins mb-5 h-16 w-64 rounded-sm border border-black bg-white p-2"
              type="file"
              placeholder="Avatar"
            />
            <label className="font-poppins mb-2 text-xl font-bold">Email</label>
            <input
              className="font-poppins mb-5 h-16 w-64 rounded-sm border border-black p-2"
              type="email"
              placeholder="Email"
            />

            <label className="font-poppins mb-2 text-xl font-bold">
              Password
            </label>
            <input
              className="font-poppins mb-5 h-16 w-64 rounded-sm border border-black p-2"
              type="password"
              placeholder="Password"
            />
            <button className="font-poppins mt-5 w-64 rounded-md bg-white p-5 text-lg text-black">
              Update Profile
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
