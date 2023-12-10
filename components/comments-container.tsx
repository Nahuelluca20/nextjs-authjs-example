import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from "@/components/ui/tooltip";
import {auth} from "@/lib/auth";
import {getComments} from "@/db/queries";

import {Button} from "./ui/button";
import {Input} from "./ui/input";
import CardComment from "./card-comment";

export default async function CommentsContainer() {
  const session = await auth();
  const comments = await getComments();

  return (
    <div>
      <h2 className="font-semibold text-2xl mb-4">Comments</h2>
      <div className="flex w-full max-w-sm items-center space-x-2 my-4 mx-auto">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Input
                className="flex-grow"
                disabled={session === null}
                placeholder="Add a comment..."
                type="text"
              />
            </TooltipTrigger>
            <TooltipContent>
              <p>{session === null ? "You need to be logged in" : "Post a comment"}</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>

        <Button disabled={session === null} type="submit">
          Post
        </Button>
      </div>
      <div className="md:w-3/4 mx-auto">
        {comments?.data?.map((comment, index) => (
          <CardComment
            key={`comment-${index}`}
            avatarFallback={`U${index}`}
            comment={comment.comment}
            timeAgo={comment.timeAgo.toDateString()}
            username={comment.username}
          />
        ))}
      </div>
    </div>
  );
}
