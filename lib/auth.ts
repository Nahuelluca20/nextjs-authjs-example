import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";

export const {
  handlers: {GET, POST},
  auth,
  signIn,
  signOut,
} = NextAuth({
  providers: [
    GitHub({
      clientId: process.env.GITGUB_CLIENT_ID ?? "",
      clientSecret: process.env.GITGUB_CLIENT_SECRET ?? "",
    }),
  ],
  callbacks: {
    authorized(params) {
      return !!params.auth?.user;
    },
  },
});
