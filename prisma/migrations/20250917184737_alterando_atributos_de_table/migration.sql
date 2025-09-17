/*
  Warnings:

  - You are about to drop the column `name` on the `Table` table. All the data in the column will be lost.
  - You are about to drop the column `number` on the `Table` table. All the data in the column will be lost.
  - Added the required column `num` to the `Table` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."Table" DROP COLUMN "name",
DROP COLUMN "number",
ADD COLUMN     "num" TEXT NOT NULL;
