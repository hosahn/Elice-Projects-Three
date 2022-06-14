/*
  Warnings:

  - You are about to drop the column `diary_id` on the `images` table. All the data in the column will be lost.
  - Made the column `title` on table `diary` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE `images` DROP FOREIGN KEY `images_ibfk_1`;

-- AlterTable
ALTER TABLE `diary` MODIFY `title` VARCHAR(50) NOT NULL,
    MODIFY `view` INTEGER NULL DEFAULT 1;

-- AlterTable
ALTER TABLE `images` DROP COLUMN `diary_id`;
