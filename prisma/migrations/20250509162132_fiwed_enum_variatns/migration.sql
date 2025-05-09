/*
  Warnings:

  - The values [LIQUID] on the enum `MedicationForm` will be removed. If these variants are still used in the database, this will fail.
  - The values [BOX,BOTTLE,VIAL,BLISTER_PACK,JAR,BAG,SYRINGE,INHALER_DEVICE,OTHER] on the enum `PackagingUnit` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "MedicationForm_new" AS ENUM ('TABLET', 'CAPSULE', 'INJECTION', 'CREAM', 'OINTMENT', 'SUPPOSITORY', 'INHALER', 'PATCH', 'DROPS', 'POWDER', 'SYRUP', 'OTHER');
ALTER TABLE "Medication" ALTER COLUMN "form" TYPE "MedicationForm_new" USING ("form"::text::"MedicationForm_new");
ALTER TYPE "MedicationForm" RENAME TO "MedicationForm_old";
ALTER TYPE "MedicationForm_new" RENAME TO "MedicationForm";
DROP TYPE "MedicationForm_old";
COMMIT;

-- AlterEnum
BEGIN;
CREATE TYPE "PackagingUnit_new" AS ENUM ('FLACON', 'TUBE', 'BOITE', 'AMPOULE', 'BLISTER', 'SACHET', 'FLACON_POUDRE', 'PILULIER');
ALTER TABLE "Medication" ALTER COLUMN "packagingUnit" TYPE "PackagingUnit_new" USING ("packagingUnit"::text::"PackagingUnit_new");
ALTER TYPE "PackagingUnit" RENAME TO "PackagingUnit_old";
ALTER TYPE "PackagingUnit_new" RENAME TO "PackagingUnit";
DROP TYPE "PackagingUnit_old";
COMMIT;
