import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";

export default async function Page() {
  return (
    <div>
      <pre>{`User is signed in`}</pre>
    </div>
  );
}
