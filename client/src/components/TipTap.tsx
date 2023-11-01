// src/Tiptap.jsx
import { EditorContent, useEditor } from "@tiptap/react";
import Heading from "@tiptap/extension-heading";
import Document from "@tiptap/extension-document";
import Paragraph from "@tiptap/extension-paragraph";
import Text from "@tiptap/extension-text";
import StarterKit from "@tiptap/starter-kit";
import { useState } from "react";
import Toolbar from "./Toolbar";
import OrderedList from "@tiptap/extension-ordered-list";
import BulletList from "@tiptap/extension-bullet-list";
import CodeBlock from "@tiptap/extension-code-block";

const Tiptap = () => {
  const [text, setText] = useState("");

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
      setText(editor.getHTML());
    },
  });

  return (
    <>
      <div className="editor" />
      <button
        className="rounded p-2 hover:bg-foreground hover:text-primary-foreground"
        onClick={() => console.log("text", text)}
      >
        Log Text
      </button>
      <Toolbar editor={editor} />
      <EditorContent editor={editor} className="p-5" />
    </>
  );
};

export default Tiptap;
