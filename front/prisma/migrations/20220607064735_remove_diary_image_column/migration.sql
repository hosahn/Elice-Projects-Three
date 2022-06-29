/*
  Warnings:

  - You are about to drop the column `image` on the `diary` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `diary` DROP COLUMN `image`;

-- AlterTable
ALTER TABLE `users` MODIFY `inserted_at` TIMESTAMP(0) NULL DEFAULT CURRENT_TIMESTAMP(0),
    MODIFY `updated_at` TIMESTAMP(0) NULL DEFAULT CURRENT_TIMESTAMP(0);
