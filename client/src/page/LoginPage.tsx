import Logo1 from "@/assets/login_1.svg";
import Logo2 from "@/assets/login_2.png";
import useDocumentTitle from "@/hooks/useDocumentTitle";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const navigate = useNavigate();
  useDocumentTitle("Notes - Login");

  return (
    <div className="LoginPage flex h-screen flex-row items-start justify-center">
      <div className="flex h-full w-1/2 flex-col items-center justify-evenly">
        <div className="flex flex-col items-center justify-center">
          <h1 className="font-poppins text-6xl font-bold">Hallo</h1>
          <p className="font-poppins text-6xl font-bold">Selamat datang</p>
        </div>
        <img src={Logo1} alt="Logo" />
      </div>
      <div className="flex h-full w-1/2 flex-col items-center justify-start bg-primaryColor">
        <div className="mb-10 mr-20 mt-20 flex w-full flex-col items-end">
          <button
            className="rounded-md bg-white p-5 font-poppins text-lg text-black"
            onClick={() => {
              navigate("/register");
            }}
          >
            Sign Up
          </button>
        </div>
        <div className="flex  flex-col items-center justify-center rounded-lg bg-white p-10 pl-20 pr-20">
          <img src={Logo2} alt="Logo" />
          <h1 className="font-poppins text-6xl font-bold">Notes</h1>
        </div>
        <form className="flex w-1/2 flex-col">
          <label className="mb-2 font-poppins text-xl font-bold">Email</label>
          <input
            className="mb-5 h-16 rounded-sm border border-black p-2 font-poppins"
            type="email"
            placeholder="Email Address"
          />
          <label className="mb-2 font-poppins text-xl font-bold">
            Password
          </label>
          <input
            className="mb-5 h-16 rounded-sm border border-black p-2 font-poppins"
            type="password"
            placeholder="Password"
          />
          <button className="mt-5 rounded-md bg-white p-5 font-poppins text-lg text-black">
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
}
