import { auth } from "../../../auth";
import { redirect } from "next/navigation";
import { getUserRole } from "../../../prisma/db";

export default async function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const session = await auth();

  if (!session) {
    redirect("/auth/signin");
  }
  const role = await getUserRole(session.user?.id as string);

  if (role !== "ADMIN") {
    redirect("/auth/signin");
  }

  return <div className="h-full">{children}</div>;
}
