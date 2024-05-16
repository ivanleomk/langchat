import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { db } from "@/lib/db";

export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <p>Chats</p>
      <Label>Name</Label>
      <Input />
      {/* <Input>What's your name?</Input> */}
    </main>
  );
}
