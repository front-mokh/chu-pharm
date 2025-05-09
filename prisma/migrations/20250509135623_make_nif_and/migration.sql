/*
  Warnings:

  - Made the column `nif` on table `Supplier` required. This step will fail if there are existing NULL values in that column.
  - Made the column `rc` on table `Supplier` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Supplier" ALTER COLUMN "nif" SET NOT NULL,
ALTER COLUMN "rc" SET NOT NULL;
