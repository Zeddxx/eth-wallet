import NextAuth from "next-auth";
import authConfig from "./auth.config";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { db } from "./lib/db";
import { getUserById } from "./data/user";

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  callbacks: {
    async session({ token, session }) {
      if (token.sub && session.user) {
        session.user.id = token.sub;
      }

      if (session.user && token.email) {
        session.user.email = token.email;
        session.user.image = token.picture;
        session.user.name = token.name;
      }

      return session;
    },
    async jwt({ token }) {
      if (!token.sub) return token;
      const existingUser = await getUserById(token.sub);

      if (!existingUser) return token;

      token.name = existingUser.name;
      token.email = existingUser.email;
      token.picture = existingUser.image;
      return token;
    },
  },
  adapter: PrismaAdapter(db),
  session: { strategy: "jwt" },
  ...authConfig,
});
