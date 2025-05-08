/*
  Warnings:

  - A unique constraint covering the columns `[codedci]` on the table `Medication` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[code]` on the table `TherapeuticClass` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `codedci` to the `Medication` table without a default value. This is not possible if the table is not empty.
  - Added the required column `code` to the `TherapeuticClass` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Medication" ADD COLUMN     "codedci" TEXT NOT NULL,
ADD COLUMN     "subClassId" TEXT;

-- AlterTable
ALTER TABLE "TherapeuticClass" ADD COLUMN     "code" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "SubClass" (
    "id" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "therapeuticClassId" TEXT NOT NULL,

    CONSTRAINT "SubClass_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "SubClass_code_key" ON "SubClass"("code");

-- CreateIndex
CREATE UNIQUE INDEX "SubClass_name_key" ON "SubClass"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Medication_codedci_key" ON "Medication"("codedci");

-- CreateIndex
CREATE UNIQUE INDEX "TherapeuticClass_code_key" ON "TherapeuticClass"("code");

-- AddForeignKey
ALTER TABLE "SubClass" ADD CONSTRAINT "SubClass_therapeuticClassId_fkey" FOREIGN KEY ("therapeuticClassId") REFERENCES "TherapeuticClass"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Medication" ADD CONSTRAINT "Medication_subClassId_fkey" FOREIGN KEY ("subClassId") REFERENCES "SubClass"("id") ON DELETE SET NULL ON UPDATE CASCADE;
