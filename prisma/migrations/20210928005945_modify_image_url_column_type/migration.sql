-- AlterTable
ALTER TABLE `images` MODIFY `image_url` VARCHAR(2000) NOT NULL;

-- AlterTable
ALTER TABLE `users` MODIFY `password` VARCHAR(200) NOT NULL;
