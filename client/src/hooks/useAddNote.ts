import myToast from "@/components/MyToast";
import React, { useState } from "react";
import { useAppDispatch } from "./useRedux";
import { asyncCreateNote } from "@/states/notes/action";
import { z } from "zod";

const schema = z.object({
  title: z.string({ invalid_type_error: "Title must be a string!" }).min(3, {
    message: "Title minimal 3 karakter!",
  }),
  content: z
    .string({ invalid_type_error: "Content must be a string!" })
    .min(3, {
      message: "Content minimal 3 karakter!",
    }),
  tags: z.array(z.string()).min(1, {
    message: "Tags minimal 1 karakter!",
  }),
});

type TuseAddNote = [
  string,
  string,
  string[],
  React.ChangeEventHandler<HTMLInputElement>,
  (text: string) => void,
  React.ChangeEventHandler<HTMLInputElement>,
  React.MouseEventHandler<HTMLButtonElement>,
];

function useAddNote(defaultValue = " "): TuseAddNote {
  const dispatch = useAppDispatch();

  const [title, setTitle] = useState(defaultValue);
  const [content, setContent] = useState(defaultValue);
  const [tags, setTags] = useState<string[]>([]);

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

  const onSaveHandler: React.MouseEventHandler<HTMLButtonElement> = (event) => {
    event.preventDefault();

    try {
      schema.parse({
        title,
        content,
        tags,
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        error.errors.map((error) => {
          myToast.fire({
            icon: "error",
            title: error.message,
          });
        });
      }
      return;
    }

    const filteredTags = tags.filter((tag) => tag !== "");

    dispatch(
      asyncCreateNote({
        title,
        content,
        tags: filteredTags,
      }),
    );

    setTitle(defaultValue);
    setContent(defaultValue);
    setTags([]);
  };

  return [
    title,
    content,
    tags,
    onChangeTitle,
    onChangeContent,
    onChangeTags,
    onSaveHandler,
  ];
}

export default useAddNote;
