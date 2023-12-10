import Link from "next/link";

import LayoutContainer from "@/components/layout-container";
import {Button} from "@/components/ui/button";
import CommentsContainer from "@/components/comments-container";
import SessionButton from "@/components/session-button";

export default async function page(): Promise<any> {
  return (
    <LayoutContainer>
      <main>
        <header className="w-full flex justify-between">
          <Link className="text-xl font-bold" href={"/"}>
            Hi! This is an example of NextJS 14 + AuthJS
          </Link>
          <div className="flex gap-2">
            <SessionButton />
          </div>
        </header>
        <div className="my-10 text-xl font-medium max-w-[900px]">
          <p>
            You can access this route since the middleware is responsible for checking if the user
            is logged in to the routes that begin with {"/protected"}
          </p>
          <p>If you are not logged in you will be able to see the comments but not post one</p>
        </div>
        <CommentsContainer />
      </main>
    </LayoutContainer>
  );
}
