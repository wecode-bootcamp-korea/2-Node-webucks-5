/*
  Warnings:

  - You are about to drop the column `policyAgreed` on the `users` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `users` DROP COLUMN `policyAgreed`,
    ADD COLUMN `policy_agreed` BOOLEAN NOT NULL DEFAULT true;
