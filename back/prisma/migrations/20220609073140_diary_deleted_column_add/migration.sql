/*
  Warnings:

  - You are about to drop the `images` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `diary` DROP FOREIGN KEY `diary_ibfk_1`;

-- AlterTable
ALTER TABLE `challenge` ADD COLUMN `type` INTEGER NULL;

-- AlterTable
ALTER TABLE `diary` ADD COLUMN `deleted` BOOLEAN NULL DEFAULT false;

-- AlterTable
ALTER TABLE `user_challenge` ADD COLUMN `type` INTEGER NULL;

-- AlterTable
ALTER TABLE `users` ALTER COLUMN `updated_at` DROP DEFAULT;

-- DropTable
DROP TABLE `images`;

-- AddForeignKey
ALTER TABLE `diary` ADD CONSTRAINT `diary_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;
