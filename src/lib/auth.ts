import NextAuth from "next-auth";
import { KyselyAdapter } from "@auth/kysely-adapter";
import { db } from "./db";
import Resend from "next-auth/providers/resend";

export const { handlers, auth, signIn, signOut } = NextAuth({
  //@ts-ignore
  adapter: KyselyAdapter(db),
  providers: [
    Resend({
      from: "hello@ivanleo.com",
    }),
  ],
});
