/*
  Warnings:

  - You are about to alter the column `kcal` on the `nutritions` table. The data in that column could be lost. The data in that column will be cast from `Int` to `Double`.

*/
-- AlterTable
ALTER TABLE `images` MODIFY `image_url` VARCHAR(2000) NOT NULL;

-- AlterTable
ALTER TABLE `nutritions` MODIFY `kcal` DOUBLE NOT NULL;

-- AlterTable
ALTER TABLE `users` ADD COLUMN `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `updated_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);
