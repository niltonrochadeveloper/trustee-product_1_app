import { NextApiRequest, NextApiResponse } from "next";
import NextAuth, { AuthOptions } from "next-auth";
import KeycloakProvider from "next-auth/providers/keycloak";

export const authOptions: AuthOptions = {
  providers: [
    KeycloakProvider({
      clientId: process.env.KEYCLOAK_CLIENT_ID!,
      clientSecret: process.env.KEYCLOAK_CLIENT_SECRET!,
      issuer: process.env.KEYCLOAK_ISSUER!,
    }),
  ],
  callbacks: {
    async jwt({ token, account }) {
      if (account) {
        token.id_token = account.id_token;
      }
      return token;
    },
  },
  events: {
    async signOut({ token }) {
      const logOutUrl = new URL(
        `${process.env.NEXT_PUBLIC_KEYCLOAK_API_URL}/realms/${process.env.KEYCLOAK_REALM}/protocol/openid-connect/logout`
      );
      logOutUrl.searchParams.set("id_token_hint", String(token.id_token));
      await fetch(logOutUrl);
    },
  },
};

export default function auth(req: NextApiRequest, res: NextApiResponse) {
  return NextAuth(req, res, authOptions);
}
