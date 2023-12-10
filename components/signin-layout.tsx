import Link from "next/link";

import {Button} from "./ui/button";

export default function SigninLayout() {
  return (
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
      <div className="mt-10 text-xl font-medium max-w-[900px]">
        <p>
          You can access this route since the middleware is responsible for checking if the user is
          logged in to the routes that begin with {"/protected"}
        </p>
      </div>
    </main>
  );
}
