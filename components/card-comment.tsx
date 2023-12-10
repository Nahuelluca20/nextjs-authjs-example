import {AvatarImage, AvatarFallback, Avatar} from "@/components/ui/avatar";
import {CardHeader, CardContent, Card} from "@/components/ui/card";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";

export default function CardComment() {
  return (
    <div>
      <h2 className="font-semibold text-2xl mb-4">Comments</h2>
      <div className="w-3/4 mx-auto">
        <Card className="mb-6">
          <CardHeader className="flex justify-between items-center">
            <div className="flex items-center gap-4">
              <Avatar className="w-10 h-10 border">
                <AvatarImage alt="@username1" src="/placeholder-user.jpg" />
                <AvatarFallback>U1</AvatarFallback>
              </Avatar>
              <div>
                <span className="font-semibold">@username1</span>
                <span className="text-gray-500 text-xs dark:text-gray-400 ml-2">1 hour ago</span>
              </div>
            </div>
          </CardHeader>
          <CardContent className="text-sm">This is a comment.</CardContent>
        </Card>
        <Card className="mb-6 ml-8">
          <CardHeader className="flex justify-between items-center">
            <div className="flex items-center gap-4">
              <Avatar className="w-10 h-10 border">
                <AvatarImage alt="@username2" src="/placeholder-user.jpg" />
                <AvatarFallback>U2</AvatarFallback>
              </Avatar>
              <div>
                <span className="font-semibold">@username2</span>
                <span className="text-gray-500 text-xs dark:text-gray-400 ml-2">45 mins ago</span>
              </div>
            </div>
          </CardHeader>
          <CardContent className="text-sm">This is a reply to the comment.</CardContent>
        </Card>
        <Card className="mb-6">
          <CardHeader className="flex justify-between items-center">
            <div className="flex items-center gap-4">
              <Avatar className="w-10 h-10 border">
                <AvatarImage alt="@username3" src="/placeholder-user.jpg" />
                <AvatarFallback>U3</AvatarFallback>
              </Avatar>
              <div>
                <span className="font-semibold">@username3</span>
                <span className="text-gray-500 text-xs dark:text-gray-400 ml-2">30 mins ago</span>
              </div>
            </div>
          </CardHeader>
          <CardContent className="text-sm">This is another comment.</CardContent>
        </Card>
      </div>
      <div className="flex w-full max-w-sm items-center space-x-2 mt-4 mx-auto">
        <Input className="flex-grow" placeholder="Add a comment..." type="text" />
        <Button type="submit">Post</Button>
      </div>
    </div>
  );
}
