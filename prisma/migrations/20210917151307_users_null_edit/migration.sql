-- AlterTable
ALTER TABLE `users` MODIFY `password` VARCHAR(191),
    MODIFY `policy_agreed` BOOLEAN DEFAULT true;
