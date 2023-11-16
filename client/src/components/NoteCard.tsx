import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function NoteCard() {
  return (
    <Card className="bg-primaryColor mb-5 w-3/5">
      <CardHeader>
        <CardTitle className="font-poppins text-2xl font-bold text-black hover:cursor-pointer hover:underline">
          Title
        </CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="font-poppins line-clamp-3 text-lg text-black">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
          voluptas, quia, quod, quibusdam quas voluptatem voluptatum
          voluptatibus nesciunt quos molestiae laboriosam. Quisquam
          voluptatibus, voluptas quos quas quod atque, voluptatem
          exercitationem, quae doloribus doloremque. Quisquam, voluptas
          voluptates.
        </CardDescription>
      </CardContent>
    </Card>
  );
}
