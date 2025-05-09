/*
  Warnings:

  - A unique constraint covering the columns `[medicationId,batchNumber]` on the table `MedicationBatch` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "MedicationBatch" DROP CONSTRAINT "MedicationBatch_medicationId_fkey";

-- CreateIndex
CREATE UNIQUE INDEX "MedicationBatch_medicationId_batchNumber_key" ON "MedicationBatch"("medicationId", "batchNumber");

-- AddForeignKey
ALTER TABLE "MedicationBatch" ADD CONSTRAINT "MedicationBatch_medicationId_fkey" FOREIGN KEY ("medicationId") REFERENCES "Medication"("id") ON DELETE CASCADE ON UPDATE CASCADE;
