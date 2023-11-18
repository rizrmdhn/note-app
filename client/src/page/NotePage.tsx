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
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import Tiptap from "@/components/TipTap";
import { setIsEditingNoteActionCreator } from "@/states/isEditingNote/action";
import { useEffect } from "react";
import useUpdateNote from "@/hooks/useUpdateNote";
import { useSearchParams } from "react-router-dom";
import { TAuthUserState } from "@/states/authUser/reducer";
import { useAppDispatch } from "@/hooks/useRedux";
import AddNoteButton from "@/components/AddNoteButton";
import useAddNote from "@/hooks/useAddNote";
import { asyncDeleteNote } from "@/states/notes/action";

export default function NotePage() {
  useDocumentTitle("Notes - Note");

  const [searchParam, setSearchParam] = useSearchParams();
  const noteId = searchParam.get("noteId");

  const authUser = useSelectState("authUser") as TAuthUserState;
  const notes = useSelectState("notes") as TNotesState;
  const detailNote = useSelectState("detailNote") as TDetailNoteState;
  const isEditingNote = useSelectState("isEditingNote") as TIsEditingNoteState;

  const dispatch = useAppDispatch();

  const [
    newTitle,
    newContent,
    newTags,
    onChangeNewTitle,
    onChangeNewContent,
    onChangeNewTags,
    onSaveHandler,
  ] = useAddNote();

  const [
    setId,
    title,
    setTitle,
    onChangeTitle,
    content,
    setContent,
    onChangeContent,
    tags,
    setTags,
    onChangeTags,
    isFriendOnly,
    setIsFriendOnly,
    isPrivate,
    setIsPrivate,
    isPublic,
    setIsPublic,
    onSubmitHandler,
  ] = useUpdateNote();

  const handleGetNotes = (noteId: number) => {
    if (detailNote !== null && detailNote.id === noteId) {
      dispatch(asyncEmptyDetailNote());
      dispatch(setIsEditingNoteActionCreator(false));
      document.title = `Notes - Note`;
      setSearchParam();
      return;
    }
    dispatch(asyncGetDetailNote({ noteId }));
    setSearchParam({ noteId: noteId.toString() });
  };

  const handleDeleteNote = (noteId: number) => {
    dispatch(asyncDeleteNote({ id: noteId }));
  };

  const handleEditNote: React.MouseEventHandler<HTMLButtonElement> = (
    event,
  ) => {
    // check if nothing changed from the previous state then do nothing

    if (isEditingNote) {
      if (
        detailNote !== null &&
        title === detailNote.title &&
        content === detailNote.content &&
        JSON.stringify(tags) === JSON.stringify(detailNote.tags) &&
        isFriendOnly === detailNote.is_friend_only &&
        isPrivate === detailNote.is_private &&
        isPublic === detailNote.is_public
      ) {
        dispatch(setIsEditingNoteActionCreator(false));
        return;
      }
      onSubmitHandler(event);
      dispatch(setIsEditingNoteActionCreator(false));
    } else {
      dispatch(setIsEditingNoteActionCreator(true));
    }
  };

  useEffect(() => {
    if (noteId !== null) {
      const noteIdNumber = parseInt(noteId);
      dispatch(asyncGetDetailNote({ noteId: noteIdNumber }));
    }
  }, [noteId, dispatch]);

  useEffect(() => {
    if (isEditingNote && detailNote !== null) {
      setId(detailNote.id);
      setTitle(detailNote.title);
      setContent(detailNote.content);
      setTags(detailNote.tags);
      setIsFriendOnly(detailNote.is_friend_only);
      setIsPrivate(detailNote.is_private);
      setIsPublic(detailNote.is_public);
    }
    if (detailNote !== null) {
      document.title = `Notes - ${detailNote.title}`;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isEditingNote, detailNote]);

  return (
    <div className="NotePage h-screen bg-primaryColor">
      <Header needProfile />
      <div className="flex flex-row items-center justify-center">
        <div className="mt-20 flex w-main-content flex-row items-start justify-between rounded-lg bg-white p-5">
          <div className="NoteContainer ml-5 mt-10 flex w-1/2 flex-col justify-start self-stretch overflow-y-auto rounded-md bg-secondaryColor p-5">
            <div className="NoteAddButton flex w-full flex-row items-center justify-center">
              <AddNoteButton
                title={newTitle}
                onChangeTitle={onChangeNewTitle}
                content={newContent}
                onChangeContent={onChangeNewContent}
                tags={newTags}
                onChangeTags={onChangeNewTags}
                onSaveNote={onSaveHandler}
              />
            </div>
            <div className="NoteCard mt-5 flex max-h-[500px] flex-col items-start overflow-y-auto">
              {notes?.length > 0 ? (
                notes.map((note) => (
                  <NoteCard
                    className="w-full"
                    withContextMenu
                    key={note.id}
                    title={note.title}
                    content={note.content}
                    tags={note.tags}
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
                      value={title}
                      onChange={onChangeTitle}
                    />
                  ) : (
                    <h1 className="line-clamp-1 w-full border-b-8 border-white font-poppins text-2xl font-bold">
                      {detailNote.title}
                    </h1>
                  )}
                </div>
                {detailNote?.owner_id === authUser?.id && (
                  <div className="NoteDetailTitleButton flex flex-row items-center justify-center">
                    <Button
                      className="w-1/2 bg-primaryColor p-8 pb-2 pt-1 text-lg font-bold text-black hover:bg-red-500 hover:text-white"
                      onClick={(event) => handleEditNote(event)}
                    >
                      {isEditingNote ? "Save" : "Edit"}
                    </Button>
                  </div>
                )}
              </div>
              <div className="NoteDetailContent mt-5 flex h-[450px] flex-col items-start overflow-auto">
                {isEditingNote ? (
                  <Tiptap
                    text={content}
                    onUpdateText={(text) => onChangeContent(text)}
                    className="h-60 overflow-y-auto rounded border-none bg-white font-poppins text-black"
                    attributPropsClassName="border-none h-60 font-poppins overflow-y-auto"
                  />
                ) : (
                  <div
                    className="pl-5 pr-5 font-poppins text-xl"
                    dangerouslySetInnerHTML={{ __html: detailNote.content }}
                  ></div>
                )}
              </div>
              <div className="NoteDetailTags mt-5 flex flex-row items-center justify-start">
                {isEditingNote ? (
                  <Input
                    className="w-full border-b-8 border-white font-poppins text-xl"
                    placeholder="Tags"
                    value={tags}
                    onChange={onChangeTags}
                  />
                ) : (
                  detailNote.tags.map((tag) => (
                    <p
                      key={tag}
                      className="mr-2 rounded-md bg-white p-2 font-poppins text-sm font-bold text-black"
                    >
                      {tag}
                    </p>
                  ))
                )}
              </div>
              <div className="NoteDetailPrivacy mt-5 flex flex-row items-center justify-start">
                <div className="NoteDetailPrivacyFriendOnly mr-2 flex flex-row items-center justify-start">
                  <Checkbox
                    className={
                      isEditingNote ? "mr-2" : "mr-2 cursor-not-allowed"
                    }
                    checked={
                      isEditingNote ? isFriendOnly : detailNote.is_friend_only
                    }
                    onClick={
                      isEditingNote
                        ? () => setIsFriendOnly(!isFriendOnly)
                        : () => {}
                    }
                  />
                  <p className="font-poppins text-xl">Friend Only</p>
                </div>
                <div className="NoteDetailPrivacyPrivate mr-2 flex flex-row items-center justify-start">
                  <Checkbox
                    className={
                      isEditingNote ? "mr-2" : "mr-2 cursor-not-allowed"
                    }
                    checked={isEditingNote ? isPrivate : detailNote.is_private}
                    onClick={
                      isEditingNote ? () => setIsPrivate(!isPrivate) : () => {}
                    }
                  />
                  <p className="font-poppins text-xl">Private</p>
                </div>
                <div className="NoteDetailPrivacyPublic mr-2 flex flex-row items-center justify-start">
                  <Checkbox
                    className={
                      isEditingNote ? "mr-2" : "mr-2 cursor-not-allowed"
                    }
                    checked={isEditingNote ? isPublic : detailNote.is_public}
                    onClick={
                      isEditingNote ? () => setIsPublic(!isPublic) : () => {}
                    }
                  />
                  <p className="font-poppins text-xl">Public</p>
                </div>
              </div>
            </div>
          ) : (
            <div className="NoteDetailEmpty ml-5 mt-10 flex w-1/2 flex-col items-center justify-center self-stretch rounded-md bg-secondaryColor p-5">
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
