"use client";

import type {Session} from "next-auth";

import {SessionProvider} from "next-auth/react";

export const Providers = ({children, session}: React.PropsWithChildren<{session: Session}>) => {
  return <SessionProvider session={session}>{children}</SessionProvider>;
};
