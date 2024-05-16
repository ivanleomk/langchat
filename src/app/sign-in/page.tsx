import { signIn } from "@/lib/auth";
import React from "react";

const Login = () => {
  return (
    <div>
      <form
        action={async (formData) => {
          "use server";
          await signIn("resend", formData);
        }}
      >
        <input type="text" name="email" placeholder="Email" />
        <button type="submit">Signin with Resend</button>
      </form>
      <a href="/dashboard">Go to Dashboard</a>
    </div>
  );
};

export default Login;
