import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";

export default function LeftMenu() {
  return (
    <div className="h-screen-with-header w-left-menu border-r-2 border-gray-600 bg-primary">
      <div className="flex flex-col justify-between p-5">
        <Card className="h-full w-full bg-transparent">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-white">
              Note App
            </CardTitle>
            <CardDescription className=" text-white">
              Your notes, your way.
            </CardDescription>
          </CardHeader>
        </Card>
      </div>
    </div>
  );
}
