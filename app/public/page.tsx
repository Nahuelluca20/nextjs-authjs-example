import type {NextRequest} from "next/server";

import {getServerSession} from "next-auth/next";
import Link from "next/link";

import {authOptions} from "@/app/api/auth/[...nextauth]/route";
import LogoutButton from "@/components/logout-button";
import SigninLayout from "@/components/signin-layout";
import LayoutContainer from "@/components/layout-container";

export default async function page(): Promise<any> {
  const session = await getServerSession(authOptions);

  return (
    <LayoutContainer>
      {session !== null ? (
        <div className="w-full flex justify-between">
          <h1 className="text-2xl font-extrabold">Hi {session?.user?.name}!</h1>
          <LogoutButton />
        </div>
      ) : (
        <SigninLayout />
      )}
    </LayoutContainer>
  );
}
