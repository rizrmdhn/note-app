import Header from "@/components/Header";
import NoteCard from "@/components/NoteCard";
import { Button } from "@/components/ui/button";
import { FaPlus } from "react-icons/fa";

export default function NotePage() {
  return (
    <div className="NotePage h-screen bg-primaryColor">
      <Header needProfile />
      <div className="flex flex-row items-center justify-center">
        <div className="mt-20 flex w-main-content flex-row items-start justify-between rounded-lg bg-white p-5">
          <div className="NoteContainer ml-5 mt-10 flex w-1/2 flex-col justify-start rounded-md bg-secondaryColor p-5">
            <div className="NoteAddButton flex w-full flex-row items-center justify-center">
              <Button className="w-1/2 bg-primaryColor p-8 text-lg font-bold text-black">
                <FaPlus className="mr-2 h-10 w-10 rounded-full bg-white p-2" />
                Add Note
              </Button>
            </div>
            <div className="NoteCard mt-5 flex h-[450px] flex-col items-start overflow-auto">
              {Array.from({ length: 10 }).map((_, index) => {
                return <NoteCard key={index} />;
              })}
            </div>
          </div>
          <div className="NoteDetail ml-5 mt-10 flex w-1/2 flex-col justify-start rounded-md bg-secondaryColor p-5">
            <div className="NoteDetailTitle flex flex-row items-center justify-between">
              <div className="NoteDetailTitleText">
                <h1 className="w-full border-b-8 border-white font-poppins text-5xl font-bold">
                  Note Title
                </h1>
              </div>
              <div className="NoteDetailTitleButton flex flex-row items-center justify-center">
                <Button className="w-1/2 bg-primaryColor p-8 text-lg font-bold text-black">
                  Edit
                </Button>
              </div>
            </div>
            <div className="NoteDetailContent mt-5 flex h-[450px] flex-col items-start overflow-auto">
              <p className="font-poppins text-xl">Note Content</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
