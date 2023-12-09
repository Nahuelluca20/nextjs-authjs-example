import type {AuthOptions} from "next-auth";

import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import {PrismaAdapter} from "@auth/prisma-adapter";
import {PrismaClient} from "@prisma/client";

const prisma = new PrismaClient();

export const authOptions: AuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GithubProvider({
      clientId: process.env.GITGUB_CLIENT_ID ?? "",
      clientSecret: process.env.GITGUB_CLIENT_SECRET ?? "",
    }),
  ],
  // session: {strategy: "jwt"},
};

const handler = NextAuth(authOptions);

export {handler as GET, handler as POST};
