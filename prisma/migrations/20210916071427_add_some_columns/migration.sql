/*
  Warnings:

  - You are about to alter the column `name` on the `allergies` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(100)`.
  - You are about to alter the column `name` on the `categories` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(100)`.
  - You are about to alter the column `korean_name` on the `drinks` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(100)`.
  - You are about to alter the column `english_name` on the `drinks` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(100)`.
  - You are about to drop the column `amount` on the `nutritions` table. All the data in the column will be lost.
  - You are about to drop the column `drinkId` on the `nutritions` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `nutritions` table. All the data in the column will be lost.
  - You are about to alter the column `email` on the `users` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(100)`.
  - You are about to alter the column `password` on the `users` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(100)`.
  - You are about to alter the column `username` on the `users` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(100)`.
  - You are about to alter the column `address` on the `users` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(100)`.
  - Added the required column `description` to the `drinks` table without a default value. This is not possible if the table is not empty.
  - Added the required column `caffeine` to the `nutritions` table without a default value. This is not possible if the table is not empty.
  - Added the required column `drink_id` to the `nutritions` table without a default value. This is not possible if the table is not empty.
  - Added the required column `fat` to the `nutritions` table without a default value. This is not possible if the table is not empty.
  - Added the required column `kcal` to the `nutritions` table without a default value. This is not possible if the table is not empty.
  - Added the required column `protein` to the `nutritions` table without a default value. This is not possible if the table is not empty.
  - Added the required column `sodium` to the `nutritions` table without a default value. This is not possible if the table is not empty.
  - Added the required column `sugar` to the `nutritions` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `nutritions` DROP FOREIGN KEY `nutritions_drinkId_fkey`;

-- AlterTable
ALTER TABLE `allergies` MODIFY `name` VARCHAR(100) NOT NULL;

-- AlterTable
ALTER TABLE `categories` MODIFY `name` VARCHAR(100) NOT NULL;

-- AlterTable
ALTER TABLE `drinks` ADD COLUMN `description` VARCHAR(3000) NOT NULL,
    ADD COLUMN `is_new` BOOLEAN NOT NULL DEFAULT false,
    MODIFY `korean_name` VARCHAR(100) NOT NULL,
    MODIFY `english_name` VARCHAR(100) NOT NULL;

-- AlterTable
ALTER TABLE `images` MODIFY `image_url` VARCHAR(300) NOT NULL;

-- AlterTable
ALTER TABLE `nutritions` DROP COLUMN `amount`,
    DROP COLUMN `drinkId`,
    DROP COLUMN `name`,
    ADD COLUMN `caffeine` DOUBLE NOT NULL,
    ADD COLUMN `drink_id` INTEGER NOT NULL,
    ADD COLUMN `fat` DOUBLE NOT NULL,
    ADD COLUMN `kcal` DOUBLE NOT NULL,
    ADD COLUMN `protein` DOUBLE NOT NULL,
    ADD COLUMN `sodium` DOUBLE NOT NULL,
    ADD COLUMN `sugar` DOUBLE NOT NULL;

-- AlterTable
ALTER TABLE `users` MODIFY `email` VARCHAR(100) NOT NULL,
    MODIFY `password` VARCHAR(100) NOT NULL,
    MODIFY `username` VARCHAR(100),
    MODIFY `address` VARCHAR(100);

-- AddForeignKey
ALTER TABLE `nutritions` ADD CONSTRAINT `nutritions_drink_id_fkey` FOREIGN KEY (`drink_id`) REFERENCES `drinks`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
