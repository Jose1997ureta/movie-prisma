-- CreateTable
CREATE TABLE `User` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `lastName` VARCHAR(191) NOT NULL,
    `username` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `image` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `User_username_key`(`username`),
    UNIQUE INDEX `User_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Gender` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `key_gender` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `color1` VARCHAR(191) NOT NULL,
    `color2` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Character` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `imagen` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Tag` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Type` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Movie` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(191) NOT NULL,
    `subtitle` VARCHAR(191) NOT NULL,
    `duration` VARCHAR(191) NOT NULL,
    `image` VARCHAR(191) NOT NULL,
    `banner` VARCHAR(191) NOT NULL,
    `idType` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `MovieDetail` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nameDirector` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `idMovie` INTEGER NOT NULL,

    UNIQUE INDEX `MovieDetail_idMovie_key`(`idMovie`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `MovieCharacter` (
    `idMovie` INTEGER NOT NULL,
    `idCharacter` INTEGER NOT NULL,

    PRIMARY KEY (`idMovie`, `idCharacter`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `MovieTag` (
    `idMovie` INTEGER NOT NULL,
    `idTag` INTEGER NOT NULL,

    PRIMARY KEY (`idMovie`, `idTag`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `MovieGender` (
    `idMovie` INTEGER NOT NULL,
    `idGender` INTEGER NOT NULL,

    PRIMARY KEY (`idMovie`, `idGender`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `MovieTrailer` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `url` VARCHAR(191) NOT NULL,
    `idMovie` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Movie` ADD CONSTRAINT `Movie_idType_fkey` FOREIGN KEY (`idType`) REFERENCES `Type`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `MovieDetail` ADD CONSTRAINT `MovieDetail_idMovie_fkey` FOREIGN KEY (`idMovie`) REFERENCES `Movie`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `MovieCharacter` ADD CONSTRAINT `MovieCharacter_idMovie_fkey` FOREIGN KEY (`idMovie`) REFERENCES `Movie`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `MovieCharacter` ADD CONSTRAINT `MovieCharacter_idCharacter_fkey` FOREIGN KEY (`idCharacter`) REFERENCES `Character`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `MovieTag` ADD CONSTRAINT `MovieTag_idMovie_fkey` FOREIGN KEY (`idMovie`) REFERENCES `Movie`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `MovieTag` ADD CONSTRAINT `MovieTag_idTag_fkey` FOREIGN KEY (`idTag`) REFERENCES `Tag`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `MovieGender` ADD CONSTRAINT `MovieGender_idMovie_fkey` FOREIGN KEY (`idMovie`) REFERENCES `Movie`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `MovieGender` ADD CONSTRAINT `MovieGender_idGender_fkey` FOREIGN KEY (`idGender`) REFERENCES `Gender`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `MovieTrailer` ADD CONSTRAINT `MovieTrailer_idMovie_fkey` FOREIGN KEY (`idMovie`) REFERENCES `Movie`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
