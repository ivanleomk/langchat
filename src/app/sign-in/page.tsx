"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import ClipLoader from "react-spinners/ClipLoader";
import { handleSignIn } from "@/lib/auth-server";
import React, { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { toast } from "sonner";
import { redirect } from "next/navigation";

const Login = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [userEmail, setUserEmail] = useState("");
  const session = useSession();

  useEffect(() => {
    if (session && session.status === "authenticated") {
      redirect("/dashboard");
    }
    console.log(session);
  }, []);

  return (
    <form
      onSubmit={async (event) => {
        event.preventDefault();
        setIsLoading(true);
        toast.promise(handleSignIn(userEmail), {
          loading: "Loading...",
          success: () => {
            return `Login email succesfully sent to user! `;
          },
          error: "Error",
          finally: () => setIsLoading(false),
        });
      }}
      className="flex flex-col items-center justify-center h-screen space-y-4 text-left"
    >
      <div className="text-left">
        <h1 className="text-2xl font-bold mb-4">Sign In</h1>
        <p className="max-w-sm text-sm text-muted-foreground">
          {`We'll send you an email with login instructions. If it's your first time logging in, then we'll create a new account along the way. `}
        </p>
      </div>
      <div className="w-full max-w-sm">
        <Label htmlFor="email" className="sr-only">
          Email
        </Label>
        <Input
          type="email"
          id="email"
          placeholder="name@example.com"
          value={userEmail}
          autoComplete="off"
          onChange={(e) => setUserEmail(e.target.value)}
        />
      </div>
      <Button type="submit" className="w-full max-w-sm" disabled={isLoading}>
        {isLoading ? (
          <ClipLoader color="white" size={15} speedMultiplier={0.5} />
        ) : (
          `Get Sign In Link`
        )}
      </Button>
    </form>
  );
};

export default Login;
