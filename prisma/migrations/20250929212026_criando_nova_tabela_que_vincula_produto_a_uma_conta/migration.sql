-- CreateTable
CREATE TABLE "public"."ProductBill" (
    "id" SERIAL NOT NULL,
    "billId" INTEGER NOT NULL,
    "productId" INTEGER NOT NULL,

    CONSTRAINT "ProductBill_pkey" PRIMARY KEY ("id")
);
