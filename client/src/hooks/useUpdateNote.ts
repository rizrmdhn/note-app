import myToast from "@/components/MyToast";
import { asyncUpdateNote } from "@/states/notes/action";
import { AnyAction } from "@reduxjs/toolkit";
import { useState } from "react";
import { useDispatch } from "react-redux";

type FormEventHandlers = [
  React.Dispatch<React.SetStateAction<number>>,
  string,
  React.Dispatch<React.SetStateAction<string>>,
  React.ChangeEventHandler<HTMLInputElement>,
  string,
  React.Dispatch<React.SetStateAction<string>>,
  (text: string) => void,
  string[],
  React.Dispatch<React.SetStateAction<string[]>>,
  React.ChangeEventHandler<HTMLInputElement>,
  boolean,
  React.Dispatch<React.SetStateAction<boolean>>,
  boolean,
  React.Dispatch<React.SetStateAction<boolean>>,
  boolean,
  React.Dispatch<React.SetStateAction<boolean>>,
  React.MouseEventHandler<HTMLButtonElement>,
];

function useUpdateNote(defaultValue = ""): FormEventHandlers {
  const dispatch = useDispatch();

  const [id, setId] = useState(0);
  const [title, setTitle] = useState(defaultValue);
  const [content, setContent] = useState(defaultValue);
  const [tags, setTags] = useState<string[]>([]);
  const [isFriendOnly, setIsFriendOnly] = useState(false);
  const [isPrivate, setIsPrivate] = useState(false);
  const [isPublic, setIsPublic] = useState(false);

  const onChangeTitle: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setTitle(event.target.value);
  };

  const onChangeContent = (text: string) => {
    setContent(text);
  };

  const onChangeTags: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    const tags = event.target.value.split(",").map((tag) => tag.trim());
    setTags(tags);
  };

  const onSubmitHandler: React.MouseEventHandler<HTMLButtonElement> = (
    event,
  ) => {
    event.preventDefault();

    if (!id) {
      myToast.fire({
        icon: "error",
        title: "Silahkan isi id!",
      });
      return;
    }

    if (!title || !content) {
      myToast.fire({
        icon: "error",
        title: "Silahkan isi title dan content!",
      });
      return;
    }

    if (!tags) {
      myToast.fire({
        icon: "error",
        title: "Silahkan isi tags!",
      });
      return;
    }

    const filteredTags = tags.filter((tag) => tag !== "");

    dispatch(
      asyncUpdateNote({
        id,
        title,
        content,
        tags: filteredTags,
        isFriendOnly,
        isPrivate,
        isPublic,
      }) as AnyAction,
    );
  };

  return [
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
  ];
}

export default useUpdateNote;
