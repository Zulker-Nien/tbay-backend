/*
  Warnings:

  - You are about to drop the `ViewOrder` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_ProductToViewOrder` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "ViewOrder" DROP CONSTRAINT "ViewOrder_buyerId_fkey";

-- DropForeignKey
ALTER TABLE "ViewOrder" DROP CONSTRAINT "ViewOrder_lenderId_fkey";

-- DropForeignKey
ALTER TABLE "ViewOrder" DROP CONSTRAINT "ViewOrder_renterId_fkey";

-- DropForeignKey
ALTER TABLE "ViewOrder" DROP CONSTRAINT "ViewOrder_sellerId_fkey";

-- DropForeignKey
ALTER TABLE "_ProductToViewOrder" DROP CONSTRAINT "_ProductToViewOrder_A_fkey";

-- DropForeignKey
ALTER TABLE "_ProductToViewOrder" DROP CONSTRAINT "_ProductToViewOrder_B_fkey";

-- DropTable
DROP TABLE "ViewOrder";

-- DropTable
DROP TABLE "_ProductToViewOrder";
