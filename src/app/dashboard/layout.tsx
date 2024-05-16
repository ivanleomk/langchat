import SignOutButton from "@/components/SignOutButton";
import { Button } from "@/components/ui/button";
import { auth, signOut } from "@/lib/auth";
import { redirect } from "next/navigation";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();

  if (!session) {
    redirect("/sign-in");
  }
  return (
    <div className="min-h-screen flex flex-col">
      <header className="flex items-center justify-between p-4 border-b">
        <div className="flex items-center space-x-4">
          <div className="text-xl font-bold">Langchat</div>
        </div>
        <SignOutButton />
      </header>
      <div>{children}</div>
    </div>
  );
}
