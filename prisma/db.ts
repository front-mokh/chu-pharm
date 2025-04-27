import { prisma } from "@/lib/db";

export async function getUserRole(userId: string) {
  const user = await prisma.user.findUnique({
    where: {
      id: userId,
    },
  });
  return user?.role;
}
