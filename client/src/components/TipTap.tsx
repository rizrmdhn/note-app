import { EditorContent, useEditor } from "@tiptap/react";
import Heading from "@tiptap/extension-heading";
import Document from "@tiptap/extension-document";
import Paragraph from "@tiptap/extension-paragraph";
import Text from "@tiptap/extension-text";
import StarterKit from "@tiptap/starter-kit";
import Toolbar from "./Toolbar";
import OrderedList from "@tiptap/extension-ordered-list";
import BulletList from "@tiptap/extension-bullet-list";
import CodeBlock from "@tiptap/extension-code-block";
import { useDispatch } from "react-redux";
import { asyncUpdateDetailContent } from "@/states/detailNote/action";
import { AnyAction } from "@reduxjs/toolkit";

type TiptapProps = {
  text: string;
};

const Tiptap = ({ text }: TiptapProps) => {
  const dispatch = useDispatch();

  const editor = useEditor({
    extensions: [
      StarterKit,
      Document,
      Heading,
      Paragraph,
      Text,
      CodeBlock.configure({
        HTMLAttributes: {
          class:
            "rounded p-5 border-foreground border-2 text-primary mb-3 mt-3",
        },
      }),
      BulletList.configure({ HTMLAttributes: { class: "list-disc" } }),
      OrderedList.configure({ HTMLAttributes: { class: "list-decimal" } }),
    ],
    content: text,
    editorProps: {
      attributes: {
        class: "rounded p-5 border-foreground border-2 text-primary",
      },
    },
    onUpdate: ({ editor }) => {
      dispatch(
        asyncUpdateDetailContent({ content: editor.getHTML() }) as AnyAction,
      );
    },
  });

  return (
    <>
      <Toolbar editor={editor} />
      <EditorContent editor={editor} className="w-full bg-primaryColor" />
    </>
  );
};

export default Tiptap;
