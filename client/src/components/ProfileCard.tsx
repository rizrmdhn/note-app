import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import useSelectState from "@/hooks/useSelectState";
import { TAuthUserState } from "@/states/authUser/reducer";

export default function ProfileCard() {
  const authUser = useSelectState("authUser") as TAuthUserState;

  return (
    <Card className="mb-5 w-profile-card">
      <CardHeader className="h-24 bg-secondaryColor">
        <Avatar className="absolute h-32 w-32">
          <AvatarImage src={authUser?.avatar} alt={authUser?.name} />
          <AvatarFallback>
            {authUser?.name
              ?.split(" ")
              .map((n) => n[0])
              .join("")}
          </AvatarFallback>
        </Avatar>
      </CardHeader>
      <CardContent className="mt-20">
        <div className="flex flex-col items-start">
          <p className="mb-5 line-clamp-3  font-poppins text-lg  text-black">
            <span className="font-bold">Nama:</span>
            <span className="ml-2">{authUser?.name}</span>
          </p>
          <p className=" line-clamp-3 font-poppins text-lg text-black">
            <span className="font-bold">Email:</span>
            <span className="ml-2">{authUser?.email}</span>
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
