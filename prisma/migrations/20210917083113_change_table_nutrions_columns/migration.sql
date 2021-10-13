/*
  Warnings:

  - You are about to drop the column `amount` on the `nutritions` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `nutritions` table. All the data in the column will be lost.
  - You are about to drop the column `product_id` on the `nutritions` table. All the data in the column will be lost.
  - Added the required column `caffeine` to the `nutritions` table without a default value. This is not possible if the table is not empty.
  - Added the required column `fat` to the `nutritions` table without a default value. This is not possible if the table is not empty.
  - Added the required column `kcal` to the `nutritions` table without a default value. This is not possible if the table is not empty.
  - Added the required column `natrium` to the `nutritions` table without a default value. This is not possible if the table is not empty.
  - Added the required column `productId` to the `nutritions` table without a default value. This is not possible if the table is not empty.
  - Added the required column `protein` to the `nutritions` table without a default value. This is not possible if the table is not empty.
  - Added the required column `sugal` to the `nutritions` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `nutritions` DROP FOREIGN KEY `nutritions_product_id_fkey`;

-- AlterTable
ALTER TABLE `nutritions` DROP COLUMN `amount`,
    DROP COLUMN `name`,
    DROP COLUMN `product_id`,
    ADD COLUMN `caffeine` INTEGER NOT NULL,
    ADD COLUMN `fat` INTEGER NOT NULL,
    ADD COLUMN `kcal` INTEGER NOT NULL,
    ADD COLUMN `natrium` INTEGER NOT NULL,
    ADD COLUMN `productId` INTEGER NOT NULL,
    ADD COLUMN `protein` INTEGER NOT NULL,
    ADD COLUMN `sugal` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `nutritions` ADD CONSTRAINT `nutritions_productId_fkey` FOREIGN KEY (`productId`) REFERENCES `products`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
