import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { FaPlus } from "react-icons/fa";
import Tiptap from "./TipTap";
import { Button } from "./ui/button";

type AddNoteButtonProps = {
  title: string;
  onChangeTitle: React.ChangeEventHandler<HTMLInputElement>;
  content: string;
  onChangeContent: (event: string) => void;
  tags: string[];
  onChangeTags: React.ChangeEventHandler<HTMLInputElement>;
  onSaveNote: React.MouseEventHandler<HTMLButtonElement>;
};

export default function AddNoteButton({
  title,
  onChangeTitle,
  content,
  onChangeContent,
  tags,
  onChangeTags,
  onSaveNote,
}: AddNoteButtonProps) {
  return (
    <Dialog>
      <DialogTrigger className="flex w-2/6 flex-row items-center justify-center rounded-lg bg-primaryColor pb-4 pl-1 pr-1 pt-4 text-lg font-bold text-black">
        <FaPlus className="mr-2 h-10 w-10 rounded-full bg-white p-2" />
        Add Note
      </DialogTrigger>
      <DialogContent className="max-w-xl bg-primaryColor">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">Add Note</DialogTitle>
        </DialogHeader>
        <form className="flex w-full flex-col items-start justify-center">
          <div className="mb-5 flex w-full flex-col items-start justify-center">
            <label className="font-poppins text-lg font-bold text-black">
              Title
            </label>
            <input
              className="h-10 w-full rounded-md p-2 font-poppins"
              type="text"
              placeholder="Title"
              value={title}
              onChange={onChangeTitle}
            />
          </div>
          <div className="mb-5 flex w-full flex-col items-start justify-center">
            <label className="font-poppins text-lg font-bold text-black">
              Content
            </label>
            <Tiptap
              text={content}
              onUpdateText={(event) => onChangeContent(event)}
              toolBarClassName="bg-white"
              className="rounded border-none bg-white font-poppins text-black"
              attributPropsClassName="border-none h-60 font-poppins"
            />
          </div>
          <div className="mb-5 flex w-full flex-col items-start justify-center">
            <label className="font-poppins text-lg font-bold text-black">
              Tags
            </label>
            <input
              className="h-10 w-full rounded-md p-2 font-poppins"
              type="text"
              placeholder="Tags"
              value={tags}
              onChange={onChangeTags}
            />
          </div>
        </form>
        <DialogFooter>
          <DialogClose asChild>
            <Button className="bg-red-500 font-poppins font-bold text-white hover:bg-white hover:text-black">
              Cancel
            </Button>
          </DialogClose>
          <DialogClose asChild>
            <Button
              className="bg-green-500 font-poppins font-bold text-white hover:bg-white hover:text-black"
              onClick={onSaveNote}
            >
              Save
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
