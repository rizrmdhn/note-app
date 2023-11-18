import { useNavigate } from "react-router-dom";

export default function NotFoundPage() {
  const navigate = useNavigate();
  return (
    <div className="flex h-screen flex-col items-center justify-center bg-primaryColor">
      <h1 className="font-poppins text-6xl font-bold">404</h1>
      <p className="font-poppins text-6xl font-bold">Not Found</p>
      <button
        className=" mt-5 rounded-md bg-white p-4 font-poppins text-lg text-black hover:bg-opacity-80"
        onClick={() => {
          navigate(-1);
        }}
      >
        Back to Previous Page
      </button>
    </div>
  );
}
