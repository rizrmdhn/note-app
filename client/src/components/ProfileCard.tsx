import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function ProfileCard() {
  return (
    <Card className="mb-5 w-profile-card">
      <CardHeader className="h-24 bg-secondaryColor">
        <Avatar className="absolute h-32 w-32">
          <AvatarImage />
          <AvatarFallback>User</AvatarFallback>
        </Avatar>
      </CardHeader>
      <CardContent className="mt-20">
        <div className="flex flex-col items-start">
          <p className="mb-5 line-clamp-3  font-poppins text-lg  text-black">
            <span className="font-bold">Nama:</span>
            <span className="ml-2">User</span>
          </p>
          <p className=" line-clamp-3 font-poppins text-lg text-black">
            <span className="font-bold">Email:</span>
            <span className="ml-2">abcd@mail.com</span>
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
