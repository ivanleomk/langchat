"use server";
import { signIn } from "@/lib/auth";

export async function handleSignIn(email: string) {
  await signIn("resend", {
    redirect: false,
    email,
    redirectTo: "/dashboard",
  });
}
