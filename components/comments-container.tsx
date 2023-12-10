import {auth} from "@/lib/auth";
import {getComments} from "@/db/queries";

import CardComment from "./card-comment";
import AddCommentForm from "./add-comment-form";

export default async function CommentsContainer() {
  const session = await auth();
  const comments = await getComments();

  return (
    <div>
      <h2 className="font-semibold text-2xl mb-4">Comments</h2>

      <AddCommentForm session={session} />

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
