import {Button} from "./ui/button";
import {Input} from "./ui/input";
import CardComment from "./card-comment";

export default function CommentsContainer() {
  let comments = [
    {
      username: "username2",
      comment: "This coments is sumbit fro username2.",
      avatarFallback: "U2",
      timeAgo: "45 mins",
    },
    {
      username: "username3",
      comment: "This coments is sumbit fro username3.",
      avatarFallback: "U3",
      timeAgo: "55 mins",
    },
  ];

  return (
    <div>
      <h2 className="font-semibold text-2xl mb-4">Comments</h2>
      <div className="flex w-full max-w-sm items-center space-x-2 my-4 mx-auto">
        <Input className="flex-grow" placeholder="Add a comment..." type="text" />
        <Button type="submit">Post</Button>
      </div>
      <div className="w-3/4 mx-auto">
        {comments.map((comment, index) => (
          <CardComment key={`comment-${index}`} {...comment} />
        ))}
      </div>
    </div>
  );
}
