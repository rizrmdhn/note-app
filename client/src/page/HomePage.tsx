import Header from "@/components/Header";
import Logo1 from "@/assets/home_1.png";
import NoteCard from "@/components/NoteCard";
import useDocumentTitle from "@/hooks/useDocumentTitle";
import useSelectState from "@/hooks/useSelectState";
import { TAuthUserState } from "@/states/authUser/reducer";

export default function HomePage() {
  useDocumentTitle("Notes - Home");

  const authUser = useSelectState("authUser") as TAuthUserState;

  return (
    <div className="HomePage h-screen bg-primaryColor">
      <Header needProfile />
      <div className="flex flex-row items-center justify-center">
        <div className="mt-20 flex w-main-content flex-row items-start justify-between rounded-lg bg-white p-5">
          <div className="HomeText ml-5 mt-10 flex w-1/2 flex-col justify-start">
            <div className="HomeTextTitle">
              <h1 className="font-poppins text-5xl font-bold">
                Hallo! {authUser?.name}
              </h1>
              <p className="font-poppins text-xl">Selamat datang Di Notes</p>
            </div>
            <div className="NoteCard mt-5 flex h-[450px] flex-col items-start overflow-auto">
              {Array.from({ length: 10 }).map((_, index) => {
                return <NoteCard key={index} />;
              })}
            </div>
          </div>
          <div className="HomeImage w-1/2">
            <img src={Logo1} alt="Logo" />
          </div>
        </div>
      </div>
    </div>
  );
}
