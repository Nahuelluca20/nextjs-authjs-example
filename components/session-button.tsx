import {auth, signIn, signOut} from "@/lib/auth";

import {Button} from "./ui/button";

export default async function SessionButton() {
  const session = await auth();

  return (
    <>
      {session !== null ? (
        <form
          action={async () => {
            "use server";
            await signOut({redirectTo: "/"});
          }}
        >
          <Button>Log Out</Button>
        </form>
      ) : (
        <form
          action={async () => {
            "use server";
            await signIn();
          }}
        >
          <Button>Sign in</Button>
        </form>
      )}
    </>
  );
}
