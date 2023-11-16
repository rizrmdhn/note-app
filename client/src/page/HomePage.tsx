import Header from "@/components/Header";
import Logo1 from "@/assets/home_1.png";
import NoteCard from "@/components/NoteCard";
import useDocumentTitle from "@/hooks/useDocumentTitle";

export default function HomePage() {
  useDocumentTitle("Notes - Home");
  return (
    <div className="bg-primaryColor HomePage h-screen">
      <Header />
      <div className="flex flex-row items-center justify-center">
        <div className="w-main-content mt-20 flex flex-row items-start justify-between rounded-lg bg-white p-5">
          <div className="HomeText ml-5 mt-10 flex w-1/2 flex-col justify-start">
            <div className="HomeTextTitle">
              <h1 className="font-poppins text-5xl font-bold">Hallo! User</h1>
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
