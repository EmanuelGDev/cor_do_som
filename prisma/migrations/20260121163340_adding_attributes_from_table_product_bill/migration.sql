/*
  Warnings:

  - Added the required column `productName` to the `ProductBill` table without a default value. This is not possible if the table is not empty.
  - Added the required column `productPrice` to the `ProductBill` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."ProductBill" ADD COLUMN     "productName" TEXT NOT NULL,
ADD COLUMN     "productPrice" DOUBLE PRECISION NOT NULL;
