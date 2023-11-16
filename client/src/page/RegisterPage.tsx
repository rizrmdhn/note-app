import Logo1 from "@/assets/register_1.png";
import useDocumentTitle from "@/hooks/useDocumentTitle";
import { useNavigate } from "react-router-dom";

export default function RegisterPage() {
  const navigate = useNavigate();
  useDocumentTitle("Notes - Register");
  return (
    <div className="Register flex h-screen flex-row items-start justify-center">
      <div className="flex h-full w-1/2 flex-col items-center justify-center bg-primaryColor">
        <form className="flex w-1/2 flex-col">
          <label className="mb-2 font-poppins text-xl font-bold">
            Username
          </label>
          <input
            className="mb-5 h-16 rounded-sm border border-black p-2 font-poppins"
            type="text"
            placeholder="Username"
          />
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
          <label className="mb-2 font-poppins text-xl font-bold">
            Confirm Password
          </label>
          <input
            className="mb-5 h-16 rounded-sm border border-black p-2 font-poppins"
            type="password"
            placeholder="Confirm Password"
          />
          <button className="mt-5 rounded-md bg-white p-5 font-poppins text-lg text-black ">
            Sign Up
          </button>
        </form>
        <p className="mt-5 font-poppins text-xl">
          Sudah punya akun?{" "}
          <span
            className="font-bold text-black hover:cursor-pointer hover:underline"
            onClick={() => {
              navigate("/");
            }}
          >
            Sign In
          </span>
        </p>
      </div>
      <div className="flex h-full w-1/2 flex-col items-center justify-evenly">
        <div className="flex flex-col items-center justify-center">
          <h1 className="font-poppins text-6xl font-bold">Silahkan</h1>
          <p className="font-poppins text-6xl font-bold">Membuat Akun</p>
        </div>
        <img src={Logo1} alt="Logo" />
      </div>
    </div>
  );
}
