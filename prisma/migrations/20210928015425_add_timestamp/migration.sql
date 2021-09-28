/*
  Warnings:

  - You are about to alter the column `natrium` on the `nutrients` table. The data in that column could be lost. The data in that column will be cast from `Int` to `Decimal(8,2)`.

*/
-- AlterTable
ALTER TABLE `drinks` ADD COLUMN `created_at` DATETIME(3),
    ADD COLUMN `updated_at` DATETIME(3);

-- AlterTable
ALTER TABLE `nutrients` MODIFY `natrium` DECIMAL(8, 2) NOT NULL;

-- AlterTable
ALTER TABLE `users` ADD COLUMN `created_at` DATETIME(3),
    ADD COLUMN `del_yn` BOOLEAN NOT NULL DEFAULT false,
    ADD COLUMN `deleted_at` DATETIME(3),
    ADD COLUMN `updated_at` DATETIME(3);
