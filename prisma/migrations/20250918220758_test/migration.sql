/*
  Warnings:

  - Changed the type of `num` on the `Table` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "public"."Table" DROP COLUMN "num",
ADD COLUMN     "num" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Table_num_key" ON "public"."Table"("num");
