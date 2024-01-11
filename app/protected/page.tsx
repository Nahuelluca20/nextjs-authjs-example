import Link from "next/link";

import SessionButton from "@/components/session-button";
import {Button} from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <SessionButton />
      <Button asChild>
        <Link href="/public">Go leave a comment</Link>
      </Button>
    </main>
  );
}
