import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function ProfileCard() {
  return (
    <Card className="w-profile-card mb-5">
      <CardHeader className="bg-secondaryColor h-24">
        <Avatar className="absolute h-32 w-32">
          <AvatarImage />
          <AvatarFallback>User</AvatarFallback>
        </Avatar>
      </CardHeader>
      <CardContent>
        <CardDescription className="font-poppins mt-20 line-clamp-3 text-lg text-black">
          <div className="flex flex-row items-center">
            <div className="mr-5 flex flex-col items-start">
              <p className="mb-5  text-lg">
                <span className="font-bold">Nama:</span>
                <span className="ml-2">User</span>
              </p>
              <p className="text-lg">
                <span className="font-bold">Email:</span>
                <span className="ml-2">abcd@mail.com</span>
              </p>
            </div>
          </div>
        </CardDescription>
      </CardContent>
    </Card>
  );
}
