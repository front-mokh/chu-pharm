"use server";

import { revalidatePath } from "next/cache";
import { auth } from "../../auth";
import { hash } from "bcryptjs";
import { prisma } from "./db";

// Types for User inputs
export type CreateUserInput = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  role: "ADMIN" | "PHARMACIST" | "SERVICE_COORDINATOR" | "ORDER_PREPARER";
  serviceId?: string;
  isActive: boolean;
};

export type UpdateUserInput = {
  firstName: string;
  lastName: string;
  email: string;
  password?: string;
  role: "ADMIN" | "PHARMACIST" | "SERVICE_COORDINATOR" | "ORDER_PREPARER";
  serviceId?: string;
  isActive: boolean;
};

// Types for Service inputs
export type CreateServiceInput = {
  name: string;
  description?: string;
  isActive: boolean;
};

export type UpdateServiceInput = {
  name: string;
  description?: string;
  isActive: boolean;
};

// Types for Supplier inputs
export type CreateSupplierInput = {
  name: string;
  contactName?: string;
  email?: string;
  phone?: string;
  address?: string;
  nif?: string; 
  rc?: string; 
  isActive: boolean;
};

export type UpdateSupplierInput = {
  name: string;
  contactName?: string;
  email?: string;
  phone?: string;
  address?: string;
  nif?: string; 
  rc?: string;  
  isActive: boolean;
}

// Types for Therapeutic Class inputs
export type CreateTherapeuticClassInput = {
  code: string; // Added code field
  name: string;
  description?: string;
  isActive: boolean;
};

export type UpdateTherapeuticClassInput = {
  code: string; // Added code field
  name: string;
  description?: string;
  isActive: boolean;
};

// Types for SubClass inputs
export type CreateSubClassInput = {
  code: string; // One letter code
  name: string;
  description?: string;
  isActive: boolean;
  therapeuticClassId: string;
};

export type UpdateSubClassInput = {
  code: string;
  name: string;
  description?: string;
  isActive: boolean;
  therapeuticClassId: string;
};
// Get the current session or throw an error
async function getSessionOrThrow() {
  const session = await auth();

  if (!session?.user?.id) {
    throw new Error("Vous devez être connecté pour effectuer cette action");
  }

  return session;
}

// User CRUD operations
export async function createUser(data: CreateUserInput) {
  try {
    await getSessionOrThrow();

    // Hash the password
    const passwordHash = await hash(data.password, 10);

    const user = await prisma.user.create({
      data: {
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        passwordHash,
        role: data.role,
        serviceId: data.serviceId,
        isActive: data.isActive,
      },
    });

    revalidatePath("/admin/users");
    return { success: true, data: user };
  } catch (error) {
    console.error("Error creating user:", error);
    return {
      success: false,
      error:
        error instanceof Error ? error.message : "Une erreur s'est produite",
    };
  }
}

export async function updateUser(id: string, data: UpdateUserInput) {
  try {
    await getSessionOrThrow();

    // Prepare update data
    const updateData: any = {
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      role: data.role,
      serviceId: data.serviceId,
      isActive: data.isActive,
    };

    // Update password only if provided
    if (data.password) {
      updateData.passwordHash = await hash(data.password, 10);
    }

    const user = await prisma.user.update({
      where: { id },
      data: updateData,
    });

    revalidatePath("/admin/users");
    return { success: true, data: user };
  } catch (error) {
    console.error("Error updating user:", error);
    return {
      success: false,
      error:
        error instanceof Error ? error.message : "Une erreur s'est produite",
    };
  }
}

export async function deleteUser(id: string) {
  try {
    await getSessionOrThrow();

    const user = await prisma.user.delete({ where: { id } });
    revalidatePath("/admin/users");
    return { success: true, data: user };
  } catch (error) {
    console.error("Error deleting user:", error);
    return {
      success: false,
      error:
        error instanceof Error ? error.message : "Une erreur s'est produite",
    };
  }
}

export async function getAllUsers() {
  try {
    await getSessionOrThrow();

    const users = await prisma.user.findMany({
      orderBy: { lastName: "asc" },
    });

    return users;
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
}

export async function getUserById(id: string) {
  try {
    await getSessionOrThrow();

    const user = await prisma.user.findUnique({
      where: { id },
    });

    return user;
  } catch (error) {
    console.error("Error fetching user:", error);
    throw error;
  }
}

// Service CRUD operations
export async function createService(data: CreateServiceInput) {
  try {
    await getSessionOrThrow();

    const service = await prisma.service.create({
      data,
    });

    revalidatePath("/admin/services");
    return { success: true, data: service };
  } catch (error) {
    console.error("Error creating service:", error);
    return {
      success: false,
      error:
        error instanceof Error ? error.message : "Une erreur s'est produite",
    };
  }
}

export async function updateService(id: string, data: UpdateServiceInput) {
  try {
    await getSessionOrThrow();

    const service = await prisma.service.update({
      where: { id },
      data,
    });

    revalidatePath("/admin/services");
    return { success: true, data: service };
  } catch (error) {
    console.error("Error updating service:", error);
    return {
      success: false,
      error:
        error instanceof Error ? error.message : "Une erreur s'est produite",
    };
  }
}

export async function deleteService(id: string) {
  try {
    await getSessionOrThrow();

    // Check if there are users assigned to this service
    const usersWithService = await prisma.user.findMany({
      where: { serviceId: id },
    });

    if (usersWithService.length > 0) {
      return {
        success: false,
        error:
          "Impossible de supprimer ce service car des utilisateurs y sont assignés",
      };
    }

    const service = await prisma.service.delete({ where: { id } });
    revalidatePath("/admin/services");
    return { success: true, data: service };
  } catch (error) {
    console.error("Error deleting service:", error);
    return {
      success: false,
      error:
        error instanceof Error ? error.message : "Une erreur s'est produite",
    };
  }
}

export async function getAllServices() {
  try {
    await getSessionOrThrow();

    const services = await prisma.service.findMany({
      orderBy: { name: "asc" },
    });

    return services;
  } catch (error) {
    console.error("Error fetching services:", error);
    throw error;
  }
}

export async function getServiceById(id: string) {
  try {
    await getSessionOrThrow();

    const service = await prisma.service.findUnique({
      where: { id },
    });

    return service;
  } catch (error) {
    console.error("Error fetching service:", error);
    throw error;
  }
}

// Supplier CRUD operations
export async function createSupplier(data: CreateSupplierInput) {
  try {
    await getSessionOrThrow();

    const supplier = await prisma.supplier.create({
      data,
    });

    revalidatePath("/admin/suppliers");
    return { success: true, data: supplier };
  } catch (error) {
    console.error("Error creating supplier:", error);
    return {
      success: false,
      error:
        error instanceof Error ? error.message : "Une erreur s'est produite",
    };
  }
}

export async function updateSupplier(id: string, data: UpdateSupplierInput) {
  try {
    await getSessionOrThrow();

    const supplier = await prisma.supplier.update({
      where: { id },
      data,
    });

    revalidatePath("/admin/suppliers");
    return { success: true, data: supplier };
  } catch (error) {
    console.error("Error updating supplier:", error);
    return {
      success: false,
      error:
        error instanceof Error ? error.message : "Une erreur s'est produite",
    };
  }
}

export async function deleteSupplier(id: string) {
  try {
    await getSessionOrThrow();

    // Here you might want to check if there are stock entries related to this supplier
    // before deletion, similar to how we check for users assigned to a service

    const supplier = await prisma.supplier.delete({ where: { id } });
    revalidatePath("/admin/suppliers");
    return { success: true, data: supplier };
  } catch (error) {
    console.error("Error deleting supplier:", error);
    return {
      success: false,
      error:
        error instanceof Error ? error.message : "Une erreur s'est produite",
    };
  }
}

export async function getAllSuppliers() {
  try {
    await getSessionOrThrow();

    const suppliers = await prisma.supplier.findMany({
      orderBy: { name: "asc" },
    });

    return suppliers;
  } catch (error) {
    console.error("Error fetching suppliers:", error);
    throw error;
  }
}

export async function getSupplierById(id: string) {
  try {
    await getSessionOrThrow();

    const supplier = await prisma.supplier.findUnique({
      where: { id },
    });

    return supplier;
  } catch (error) {
    console.error("Error fetching supplier:", error);
    throw error;
  }
}

// Create CRUD functions for Therapeutic Classes
export async function createTherapeuticClass(
  data: CreateTherapeuticClassInput
) {
  try {
    await getSessionOrThrow();

    const therapeuticClass = await prisma.therapeuticClass.create({
      data,
    });

    revalidatePath("/admin/therapeutic-classes");
    return { success: true, data: therapeuticClass };
  } catch (error) {
    console.error("Error creating therapeutic class:", error);
    return {
      success: false,
      error:
        error instanceof Error ? error.message : "Une erreur s'est produite",
    };
  }
}
export async function updateTherapeuticClass(
  id: string,
  data: UpdateTherapeuticClassInput
) {
  try {
    await getSessionOrThrow();

    const therapeuticClass = await prisma.therapeuticClass.update({
      where: { id },
      data,
    });

    revalidatePath("/admin/therapeutic-classes");
    return { success: true, data: therapeuticClass };
  } catch (error) {
    console.error("Error updating therapeutic class:", error);
    return {
      success: false,
      error:
        error instanceof Error ? error.message : "Une erreur s'est produite",
    };
  }
}

export async function deleteTherapeuticClass(id: string) {
  try {
    await getSessionOrThrow();

    const therapeuticClass = await prisma.therapeuticClass.delete({
      where: { id },
    });
    revalidatePath("/admin/therapeutic-classes");
    return { success: true, data: therapeuticClass };
  } catch (error) {
    console.error("Error deleting therapeutic class:", error);
    return {
      success: false,
      error:
        error instanceof Error ? error.message : "Une erreur s'est produite",
    };
  }
}

export async function getAllTherapeuticClasses() {
  try {
    await getSessionOrThrow();

    const therapeuticClasses = await prisma.therapeuticClass.findMany({
      orderBy: { name: "asc" },
    });

    return therapeuticClasses;
  } catch (error) {
    console.error("Error fetching therapeutic classes:", error);
    throw error;
  }
}
export async function createSubClass(data: CreateSubClassInput) {
  try {
    await getSessionOrThrow();
    const subClass = await prisma.subClass.create({ data });
    revalidatePath("/admin/subclasses");
    return { success: true, data: subClass };
  } catch (error) {
    console.error("Error creating SubClass:", error);
    return { success: false, error: error instanceof Error ? error.message : "Une erreur s'est produite" };
  }
}

export async function updateSubClass(id: string, data: UpdateSubClassInput) {
  try {
    await getSessionOrThrow();
    const subClass = await prisma.subClass.update({ where: { id }, data });
    revalidatePath("/admin/subclasses");
    return { success: true, data: subClass };
  } catch (error) {
    console.error("Error updating SubClass:", error);
    return { success: false, error: error instanceof Error ? error.message : "Une erreur s'est produite" };
  }
}

export async function deleteSubClass(id: string) {
  try {
    await getSessionOrThrow();
    const subClass = await prisma.subClass.delete({ where: { id } });
    revalidatePath("/admin/subclasses");
    return { success: true, data: subClass };
  } catch (error) {
    console.error("Error deleting SubClass:", error);
    return { success: false, error: error instanceof Error ? error.message : "Une erreur s'est produite" };
  }
}

export async function getAllSubClasses() {
  try {
    await getSessionOrThrow();
    const subClasses = await prisma.subClass.findMany({ orderBy: { name: 'asc' } });
    return subClasses;
  } catch (error) {
    console.error("Error fetching SubClasses:", error);
    throw error;
  }
}

export async function getSubClassById(id: string) {
  try {
    await getSessionOrThrow();
    return await prisma.subClass.findUnique({ where: { id } });
  } catch (error) {
    console.error("Error fetching SubClass:", error);
    throw error;
  }
}