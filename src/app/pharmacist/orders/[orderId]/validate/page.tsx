import React from "react";
import { getOrderForValidationById } from "../../service";
import OrderValidationForm from "./OrderValidationForm";
import { notFound, redirect } from "next/navigation";
import { unstable_noStore as noStore } from "next/cache";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { auth } from "../../../../../../auth";
import { getUserRole } from "../../../../../../prisma/db";
import { User } from "@/generated/prisma";

export default async function OrderValidationPage({
  params,
}: {
  params: { orderId: string };
}) {
  noStore();
  const orderId = params.orderId;

  const session = await auth();

  if (!session || !session.user || !session.user.id) {
    redirect("/auth/signin");
  }
  const userRole = await getUserRole(session.user.id);
  if (userRole !== "PHARMACIST") {
    redirect("/dashboard/pharmacist/dashboard");
  }

  const currentUser = session.user as Pick<User, "id">;

  // Hardcoded user for now, replace with actual session user

  const order = await getOrderForValidationById(orderId);

  if (!order) {
    notFound();
  }

  return (
    <div className="container mx-auto p-4 md:p-6 max-w-5xl">
      <div className="mb-4">
        <Button asChild variant="outline" size="sm">
          <Link href="/dashboard/pharmacist/orders/pending">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Retour à la liste
          </Link>
        </Button>
      </div>
      <OrderValidationForm order={order} currentUser={currentUser} />
    </div>
  );
}
