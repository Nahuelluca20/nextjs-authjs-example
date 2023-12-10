"use client";
import type {Session} from "next-auth";

import {useFormState, useFormStatus} from "react-dom";

import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from "@/components/ui/tooltip";
import {addComment} from "@/db/queries";

import {Input} from "./ui/input";
import {Button} from "./ui/button";

const initialState = {
  message: "undefined",
};

function SubmitButton({disabled}: {disabled: boolean}) {
  const {pending} = useFormStatus();

  return (
    <Button
      aria-disabled={pending}
      className="text-white bg-vercel-blue hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
      disabled={disabled}
      type="submit"
    >
      Post
    </Button>
  );
}

export default function AddCommentForm({session}: {session: Session | null}) {
  const [state, formAction] = useFormState(addComment, initialState);

  return (
    <form action={formAction} className="flex w-full max-w-sm items-center space-x-2 my-4 mx-auto">
      <TooltipProvider>
        <Tooltip>
          <Input
            className="hidden"
            defaultValue={session?.user?.name ?? ""}
            disabled={session === null}
            id="username"
            name="username"
            placeholder="username"
            type="text"
          />
          <TooltipTrigger asChild>
            <Input
              className="flex-grow"
              disabled={session === null}
              id="comment"
              name="comment"
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
      <SubmitButton disabled={session === null} />
      <p aria-live="polite" className="sr-only" role="status">
        {state?.message}
      </p>
    </form>
  );
}
