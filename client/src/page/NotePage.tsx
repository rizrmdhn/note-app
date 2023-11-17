import Header from "@/components/Header";
import NoteCard from "@/components/NoteCard";
import { Button } from "@/components/ui/button";
import useDocumentTitle from "@/hooks/useDocumentTitle";
import useSelectState from "@/hooks/useSelectState";
import {
  asyncEmptyDetailNote,
  asyncGetDetailNote,
} from "@/states/detailNote/action";
import { TDetailNoteState } from "@/states/detailNote/reducer";
import { TIsEditingNoteState } from "@/states/isEditingNote/reducer";
import { TNotesState } from "@/states/notes/reducer";
import { AnyAction } from "@reduxjs/toolkit";
import { FaPlus } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { Input } from "@/components/ui/input";
import Tiptap from "@/components/TipTap";
import { setIsEditingNoteActionCreator } from "@/states/isEditingNote/action";

export default function NotePage() {
  useDocumentTitle("Notes - Note");

  const notes = useSelectState("notes") as TNotesState;
  const detailNote = useSelectState("detailNote") as TDetailNoteState;
  const isEditingNote = useSelectState("isEditingNote") as TIsEditingNoteState;

  const dispatch = useDispatch();

  const handleGetNotes = (noteId: number) => {
    if (detailNote !== null && detailNote.id === noteId)
      return dispatch(asyncEmptyDetailNote() as AnyAction);
    dispatch(asyncGetDetailNote({ noteId }) as AnyAction);
  };

  const handleDeleteNote = (noteId: number) => {
    console.log(noteId, "delete");
  };

  const handleEditNote = () => {
    if (isEditingNote) {
      dispatch(setIsEditingNoteActionCreator(false) as AnyAction);
    } else {
      dispatch(setIsEditingNoteActionCreator(true) as AnyAction);
    }
  };

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
              {notes?.length > 0 ? (
                notes.map((note) => (
                  <NoteCard
                    className="w-full"
                    withContextMenu
                    key={note.id}
                    title={note.title}
                    content={note.content}
                    onClickTitle={() => handleGetNotes(note.id)}
                    onDeleteNote={() => handleDeleteNote(note.id)}
                  />
                ))
              ) : (
                <p className="font-poppins text-xl">Tidak ada catatan</p>
              )}
            </div>
          </div>
          {detailNote !== null ? (
            <div className="NoteDetail ml-5 mt-10 flex w-1/2 flex-col justify-start rounded-md bg-secondaryColor p-5">
              <div className="NoteDetailTitle flex flex-row items-center justify-between">
                <div className="NoteDetailTitleText">
                  {isEditingNote ? (
                    <Input
                      className="w-full border-b-8 border-white font-poppins text-2xl font-bold"
                      placeholder="Title"
                      defaultValue={detailNote.title}
                    />
                  ) : (
                    <h1 className="line-clamp-1 w-full border-b-8 border-white font-poppins text-2xl font-bold">
                      {detailNote.title}
                    </h1>
                  )}
                </div>
                <div className="NoteDetailTitleButton flex flex-row items-center justify-center">
                  <Button
                    className="w-1/2 bg-primaryColor p-8 text-lg font-bold text-black hover:bg-red-500 hover:text-white"
                    onClick={() => handleEditNote()}
                  >
                    {isEditingNote ? "Save" : "Edit"}
                  </Button>
                </div>
              </div>
              <div className="NoteDetailContent mt-5 flex h-[450px] flex-col items-start overflow-auto">
                {isEditingNote ? (
                  <Tiptap text={detailNote.content} />
                ) : (
                  <div
                    className="pl-5 pr-5 font-poppins text-xl"
                    dangerouslySetInnerHTML={{ __html: detailNote.content }}
                  ></div>
                )}
              </div>
            </div>
          ) : (
            <div className="NoteDetailEmpty ml-5 mt-10 flex w-1/2 flex-col items-center justify-center rounded-md bg-secondaryColor p-5">
              <div className="NoteDetailEmptyText flex flex-col items-center justify-center">
                <p className="font-poppins text-2xl">
                  Pilih catatan untuk melihat detail
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
