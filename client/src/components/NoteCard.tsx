import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from "@/components/ui/context-menu";
import { cn } from "@/utils/tools";
import { FaTrash } from "react-icons/fa";

type TNoteCardProps = {
  withContextMenu?: boolean;
  title: string;
  content: string;
  className?: string;
  onClickTitle: React.MouseEventHandler<HTMLDivElement>;
  onDeleteNote?: React.MouseEventHandler<HTMLDivElement> | undefined;
};

export default function NoteCard({
  withContextMenu,
  title,
  content,
  className,
  onClickTitle,
  onDeleteNote,
}: TNoteCardProps) {
  if (withContextMenu) {
    return (
      <ContextMenu>
        <ContextMenuTrigger>
          <Card className={cn("mb-5 w-3/5 bg-primaryColor", className)}>
            <CardHeader>
              <CardTitle
                className="font-poppins text-2xl font-bold text-black hover:cursor-pointer hover:underline"
                onClick={onClickTitle}
              >
                {title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="line-clamp-3 font-poppins text-lg text-black">
                {content}
              </CardDescription>
            </CardContent>
          </Card>
        </ContextMenuTrigger>
        <ContextMenuContent>
          <ContextMenuItem
            className="flex flex-row items-center font-poppins font-bold text-black"
            onClick={onDeleteNote}
          >
            <FaTrash className="mr-2" />
            Delete
          </ContextMenuItem>
        </ContextMenuContent>
      </ContextMenu>
    );
  }

  return (
    <Card className={cn("mb-5 w-3/5 bg-primaryColor", className)}>
      <CardHeader>
        <CardTitle
          className="font-poppins text-2xl font-bold text-black hover:cursor-pointer hover:underline"
          onClick={onClickTitle}
        >
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="line-clamp-3 font-poppins text-lg text-black">
          {content}
        </CardDescription>
      </CardContent>
    </Card>
  );
}
