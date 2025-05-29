// src/lib/authOptions.ts
import GitHubProvider from "next-auth/providers/github";
import { NextAuthOptions } from "next-auth";

/*
export const authOptions: NextAuthOptions = {
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_CLIENT_ID!,
      clientSecret: process.env.GITHUB_CLIENT_SECRET!,
    }),
  ],
  callbacks: {
    async jwt({ token, profile }) {
      // GitHub profile includes "login"
      if (profile && "login" in profile) {
        token.username = (profile as { login: string }).login;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.username = token.username;
      }
      return session;
    },
  },
};*/


export const authOptions: NextAuthOptions = {
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_CLIENT_ID!,
      clientSecret: process.env.GITHUB_CLIENT_SECRET!,
      authorization: { params: { scope: "read:user user:email" } },
    }),
  ],
  callbacks: {
    async jwt({ token, profile }) {
      if (profile) {
        token.username = (profile as any).login;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.name = token.username as string;
      }
      return session;
    },
  },
};