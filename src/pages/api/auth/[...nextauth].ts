import NextAuth from "next-auth/next";
import GithubProvider from "next-auth/providers/github";
import { fauna } from "../../../services/fauna";
import { query } from "faunadb";

export default NextAuth({
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
      // @ts-ignore
      scope: "read:user",
    }),
  ],
  secret: process.env.SECRET,
  callbacks: {
    async signIn({ user }) {
      const { email } = user;

      try {
        await fauna.query(
          query.Create(query.Collection("users"), { data: { email } })
        );

        return true;
      } catch {
        return false;
      }
    },
  },
});
