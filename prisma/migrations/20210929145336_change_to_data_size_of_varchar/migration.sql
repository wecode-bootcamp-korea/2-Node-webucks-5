/*
  Warnings:

  - You are about to alter the column `caffeine` on the `nutritions` table. The data in that column could be lost. The data in that column will be cast from `Int` to `Decimal(65,30)`.
  - You are about to alter the column `fat` on the `nutritions` table. The data in that column could be lost. The data in that column will be cast from `Int` to `Decimal(65,30)`.
  - You are about to alter the column `kcal` on the `nutritions` table. The data in that column could be lost. The data in that column will be cast from `Int` to `Decimal(65,30)`.
  - You are about to alter the column `natrium` on the `nutritions` table. The data in that column could be lost. The data in that column will be cast from `Int` to `Decimal(65,30)`.
  - You are about to alter the column `protein` on the `nutritions` table. The data in that column could be lost. The data in that column will be cast from `Int` to `Decimal(65,30)`.
  - You are about to alter the column `sugal` on the `nutritions` table. The data in that column could be lost. The data in that column will be cast from `Int` to `Decimal(65,30)`.

*/
-- AlterTable
ALTER TABLE `allergies` MODIFY `name` VARCHAR(50) NOT NULL;

-- AlterTable
ALTER TABLE `categories` MODIFY `name` VARCHAR(50) NOT NULL;

-- AlterTable
ALTER TABLE `images` MODIFY `image_url` VARCHAR(2000) NOT NULL;

-- AlterTable
ALTER TABLE `nutritions` MODIFY `caffeine` DECIMAL(65, 30) NOT NULL,
    MODIFY `fat` DECIMAL(65, 30) NOT NULL,
    MODIFY `kcal` DECIMAL(65, 30) NOT NULL,
    MODIFY `natrium` DECIMAL(65, 30) NOT NULL,
    MODIFY `protein` DECIMAL(65, 30) NOT NULL,
    MODIFY `sugal` DECIMAL(65, 30) NOT NULL;

-- AlterTable
ALTER TABLE `products` MODIFY `english_name` VARCHAR(100) NOT NULL,
    MODIFY `descriptions` VARCHAR(3000) NOT NULL;

-- AlterTable
ALTER TABLE `users` MODIFY `email` VARCHAR(200) NOT NULL,
    MODIFY `user_name` VARCHAR(50),
    MODIFY `address` VARCHAR(500),
    MODIFY `phone_number` VARCHAR(50);
