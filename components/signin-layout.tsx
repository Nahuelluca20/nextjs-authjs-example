import Link from "next/link";

import {Button} from "./ui/button";
import {ModeToggle} from "./ui/toggle-mode";

export default function SigninLayout() {
  return (
    <div>
      <header className="w-full flex justify-between">
        <h1 className="text-xl font-bold">Hi! This is an example of NextJS 14 + AuthJS</h1>
        <div className="flex gap-2">
          <ModeToggle />
          <Button asChild>
            <Link href="/api/auth/signin">Sign in</Link>
          </Button>
        </div>
      </header>
    </div>
  );
}
