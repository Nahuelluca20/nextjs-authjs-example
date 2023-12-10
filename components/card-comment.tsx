import {AvatarImage, AvatarFallback, Avatar} from "@/components/ui/avatar";
import {CardHeader, CardContent, Card} from "@/components/ui/card";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";

export default function CardComment({
  username,
  comment,
  avatarFallback,
  timeAgo,
}: {
  username: string;
  comment: string;
  avatarFallback: string;
  timeAgo: string;
}) {
  return (
    <Card className="mb-6 ml-8">
      <CardHeader className="flex justify-between items-center">
        <div className="flex items-center gap-4">
          <Avatar className="w-10 h-10 border">
            <AvatarImage alt={`@${username}`} src="/placeholder-user.jpg" />
            <AvatarFallback>{avatarFallback}</AvatarFallback>
          </Avatar>
          <div>
            <span className="font-semibold">@{username}</span>
            <span className="text-gray-500 text-xs dark:text-gray-400 ml-2">{timeAgo} ago</span>
          </div>
        </div>
      </CardHeader>
      <CardContent className="text-sm">{comment}</CardContent>
    </Card>
  );
}
