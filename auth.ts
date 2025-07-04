// app/auth.ts
import NextAuth, { NextAuthConfig } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { prisma } from "@/lib/db";
import bcrypt from "bcryptjs";

export const authConfig: NextAuthConfig = {
  providers: [
    Credentials({
      name: "Credentials",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "email@example.com",
        },

        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        try {
          if (!credentials || !credentials.email || !credentials.password) {
            return null;
          }

          const email = credentials.email as string;

          console.log("Email:", email);

          const user = await prisma.user.findUnique({
            where: {
              email,
            },
          });

          if (!user) {
            console.log("User not found");
            return null;
          }
          if (!user) {
            return null;
          }

          const isMatch = bcrypt.compareSync(
            credentials.password as string,
            user.passwordHash
          );

          if (!isMatch) {
            console.log("Password mismatch");
            return null;
          }

          return {
            id: user.id,
            email: user.email,
            name: user.lastName.toUpperCase() + " " + user.firstName,
          };
        } catch (error) {
          console.error("Authorization error:", error);
          return null;
        }
      },
    }),
  ],
  pages: {
    signIn: "/auth/signin",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.email = user.email;
        token.name = user.name;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id as string;
        session.user.email = token.email as string;
        session.user.name = token.name as string;
      }
      return session;
    },
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const isProtected = true;
      if (isProtected) {
        if (isLoggedIn) return true;
        return false; // redirect to login
      }
      return true;
    },
  },
  session: {
    strategy: "jwt",
  },
  trustHost: true,
  debug: process.env.NODE_ENV === "development",
  secret: process.env.NEXTAUTH_SECRET,
};

export const { handlers, auth, signIn, signOut } = NextAuth(authConfig);
