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
import { cn } from "@/utils/tools";

type TiptapProps = {
  text: string;
  toolBarClassName?: string;
  className?: string;
  attributPropsClassName?: string;
  onUpdateText: (event: string) => void;
};

const Tiptap = ({
  text,
  toolBarClassName,
  className,
  attributPropsClassName,
  onUpdateText,
}: TiptapProps) => {
  const editor = useEditor(
    {
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
          class: cn(
            "rounded p-5 border-foreground border-2 text-black",
            attributPropsClassName,
          ),
        },
      },
      onUpdate: ({ editor }) => {
        const html = editor.getHTML();
        onUpdateText(html);
      },
    },
    [text],
  );

  return (
    <>
      <Toolbar editor={editor} className={toolBarClassName} />
      <EditorContent
        editor={editor}
        className={cn("w-full bg-primaryColor", className)}
      />
    </>
  );
};

export default Tiptap;
