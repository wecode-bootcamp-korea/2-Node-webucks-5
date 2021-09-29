/*
  Warnings:

  - You are about to drop the column `name` on the `allergies` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `categories` table. All the data in the column will be lost.
  - Added the required column `category_name` to the `categories` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `allergies` DROP COLUMN `name`,
    ADD COLUMN `allergy_cause` VARCHAR(30);

-- AlterTable
ALTER TABLE `categories` DROP COLUMN `name`,
    ADD COLUMN `category_name` VARCHAR(191) NOT NULL;
