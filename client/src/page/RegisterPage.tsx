import Logo1 from "@/assets/register_1.png";

export default function RegisterPage() {
  return (
    <div className="Register flex h-screen flex-row items-start justify-center">
      <div className="bg-primaryColor flex h-full w-1/2 flex-col items-center justify-center">
        <form className="flex w-1/2 flex-col">
          <label className="font-poppins mb-2 text-xl font-bold">
            Username
          </label>
          <input
            className="font-poppins mb-5 h-16 rounded-sm border border-black p-2"
            type="text"
            placeholder="Username"
          />
          <label className="font-poppins mb-2 text-xl font-bold">Email</label>
          <input
            className="font-poppins mb-5 h-16 rounded-sm border border-black p-2"
            type="email"
            placeholder="Email Address"
          />
          <label className="font-poppins mb-2 text-xl font-bold">
            Password
          </label>
          <input
            className="font-poppins mb-5 h-16 rounded-sm border border-black p-2"
            type="password"
            placeholder="Password"
          />
          <label className="font-poppins mb-2 text-xl font-bold">
            Confirm Password
          </label>
          <input
            className="font-poppins mb-5 h-16 rounded-sm border border-black p-2"
            type="password"
            placeholder="Confirm Password"
          />
          <button className="font-poppins mt-5 rounded-md bg-white p-5 text-lg text-black ">
            Sign Up
          </button>
        </form>
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
