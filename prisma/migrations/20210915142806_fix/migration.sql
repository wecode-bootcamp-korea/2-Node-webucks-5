/*
  Warnings:

  - You are about to drop the `products_allergies` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `products_allergies` DROP FOREIGN KEY `products_allergies_allergy_id_fkey`;

-- DropForeignKey
ALTER TABLE `products_allergies` DROP FOREIGN KEY `products_allergies_drink_id_fkey`;

-- DropTable
DROP TABLE `products_allergies`;

-- CreateTable
CREATE TABLE `drinks_allergies` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `drink_id` INTEGER NOT NULL,
    `allergy_id` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `drinks_allergies` ADD CONSTRAINT `drinks_allergies_drink_id_fkey` FOREIGN KEY (`drink_id`) REFERENCES `drinks`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `drinks_allergies` ADD CONSTRAINT `drinks_allergies_allergy_id_fkey` FOREIGN KEY (`allergy_id`) REFERENCES `allergies`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
