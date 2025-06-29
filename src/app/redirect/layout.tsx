import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { getUserRole } from "../../../prisma/db";
import { auth } from "../../../auth";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  console.log("THE REDIRECT LAYOUT IS RUNNING");

  const session = await auth();
  if (!session || !session.user) {
    redirect("/auth/signin");
  }

  const userId = session.user.id;

  if (!userId) {
    redirect("/signin");
  }

  let role;
  try {
    role = await getUserRole(userId);
  } catch (error) {
    console.error("Error in getUserRole:", error);
  }

  if (!role) {
    redirect("/signin");
  }

  switch (role) {
    case "ADMIN":
      redirect("/admin");
    case "PHARMACIST":
      redirect("/pharmacist");
    case "SERVICE_COORDINATOR":
      redirect("/coordinator");
    case "ORDER_PREPARER":
      redirect("/preparator");
    default:
      console.log("Unknown role:", role);
      redirect("/auth/signin");
  }

  return <>{children}</>;
}
