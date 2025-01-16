-- CreateTable
CREATE TABLE "ViewOrder" (
    "id" SERIAL NOT NULL,
    "productId" INTEGER NOT NULL,
    "totalAmount" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "orderType" "ItemType" NOT NULL,
    "buyerId" TEXT,
    "sellerId" TEXT,
    "renterId" TEXT,
    "lenderId" TEXT,

    CONSTRAINT "ViewOrder_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_ProductToViewOrder" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,

    CONSTRAINT "_ProductToViewOrder_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE INDEX "_ProductToViewOrder_B_index" ON "_ProductToViewOrder"("B");

-- AddForeignKey
ALTER TABLE "ViewOrder" ADD CONSTRAINT "ViewOrder_buyerId_fkey" FOREIGN KEY ("buyerId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ViewOrder" ADD CONSTRAINT "ViewOrder_sellerId_fkey" FOREIGN KEY ("sellerId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ViewOrder" ADD CONSTRAINT "ViewOrder_renterId_fkey" FOREIGN KEY ("renterId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ViewOrder" ADD CONSTRAINT "ViewOrder_lenderId_fkey" FOREIGN KEY ("lenderId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ProductToViewOrder" ADD CONSTRAINT "_ProductToViewOrder_A_fkey" FOREIGN KEY ("A") REFERENCES "Product"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ProductToViewOrder" ADD CONSTRAINT "_ProductToViewOrder_B_fkey" FOREIGN KEY ("B") REFERENCES "ViewOrder"("id") ON DELETE CASCADE ON UPDATE CASCADE;
