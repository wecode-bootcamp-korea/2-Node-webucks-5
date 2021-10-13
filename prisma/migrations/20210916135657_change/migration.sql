/*
  Warnings:

  - Added the required column `descriptions` to the `products` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `products` ADD COLUMN `descriptions` VARCHAR(500) NOT NULL;
