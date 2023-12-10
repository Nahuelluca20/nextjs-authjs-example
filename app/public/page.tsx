import {getServerSession} from "next-auth/next";
import Link from "next/link";

import {authOptions} from "@/app/api/auth/[...nextauth]/route";
import LayoutContainer from "@/components/layout-container";
import {Button} from "@/components/ui/button";
import CommentsContainer from "@/components/comments-container";

export default async function page(): Promise<any> {
  const session = await getServerSession(authOptions);

  // {session !== null ? (
  //   <div className="w-full flex justify-between">
  //     <h1 className="text-2xl font-extrabold">Hi {session?.user?.name}!</h1>
  //     <LogoutButton />
  //   </div>
  // ) : (
  //   <SigninLayout />
  // )}
  return (
    <LayoutContainer>
      <main>
        <header className="w-full flex justify-between">
          <Link className="text-xl font-bold" href={"/"}>
            Hi! This is an example of NextJS 14 + AuthJS
          </Link>
          <div className="flex gap-2">
            <Button asChild>
              <Link href="/api/auth/signin">Sign in</Link>
            </Button>
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
