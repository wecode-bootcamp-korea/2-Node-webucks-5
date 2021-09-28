/*
  Warnings:

  - You are about to drop the column `del_yn` on the `users` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `users` DROP COLUMN `del_yn`,
    ADD COLUMN `is_deleted` BOOLEAN NOT NULL DEFAULT false;
