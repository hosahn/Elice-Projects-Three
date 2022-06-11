-- DropForeignKey
ALTER TABLE `diary` DROP FOREIGN KEY `diary_ibfk_1`;

-- AlterTable
ALTER TABLE `users` ALTER COLUMN `inserted_at` DROP DEFAULT,
    ALTER COLUMN `updated_at` DROP DEFAULT;

-- CreateTable
CREATE TABLE `images` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `diary_id` INTEGER NULL,
    `image` TINYTEXT NULL,

    INDEX `diary_id`(`diary_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `diary` ADD CONSTRAINT `diary_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `images` ADD CONSTRAINT `images_ibfk_1` FOREIGN KEY (`diary_id`) REFERENCES `diary`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION;
