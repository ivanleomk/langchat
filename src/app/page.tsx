import { buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { db } from "@/lib/db";
import Link from "next/link";

export default async function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center p-24">
      <div className="text-center">
        <p className="text-2xl font-bold mb-4">This is LangChat</p>
        <div className="space-x-4">
          <Link
            href="/sign-in"
            className={buttonVariants({
              variant: "default",
            })}
          >
            Sign In
          </Link>
          <p
            className={buttonVariants({
              variant: "ghost",
            })}
          >
            Learn More
          </p>
        </div>
      </div>
    </main>
  );
}
