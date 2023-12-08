import type {AuthOptions} from "next-auth";

import NextAuth, {NextAuthOptions} from "next-auth";
import GithubProvider from "next-auth/providers/github";
import {PrismaAdapter} from "@auth/prisma-adapter";
import {PrismaClient} from "@prisma/client";

// const prisma = new PrismaClient();

// export default NextAuth({
//   adapter: PrismaAdapter(prisma),
//   providers: [
//     GitHub({
//       clientId: process.env.GITGUB_CLIENT_ID ?? "",
//       clientSecret: process.env.GITGUB_CLIENT_SECRET ?? "",
//     }),
//   ],
// });

// export const OPTIONS: NextAuthOptions = {
//   providers: [
//     GithubProvider({
//       clientId: process.env.GITGUB_CLIENT_ID ?? "",
//       clientSecret: process.env.GITGUB_CLIENT_SECRET ?? "",
//     }),
//   ],
// };

export const authOptions: AuthOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.GITGUB_CLIENT_ID ?? "",
      clientSecret: process.env.GITGUB_CLIENT_SECRET ?? "",
    }),
  ],
};

const handler = NextAuth(authOptions);

export {handler as GET, handler as POST};
