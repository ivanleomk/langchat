import { signOut } from "@/lib/auth";
import React from "react";

const SignOutButton = () => {
  return (
    <form
      action={async () => {
        "use server";
        await signOut({ redirectTo: "/" });
      }}
    >
      <button type="submit">Sign Out</button>
    </form>
  );
};

export default SignOutButton;
