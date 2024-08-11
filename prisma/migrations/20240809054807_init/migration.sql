-- CreateTable
CREATE TABLE `UserMovieFavorite` (
    `idUser` INTEGER NOT NULL,
    `idMovie` INTEGER NOT NULL,

    PRIMARY KEY (`idMovie`, `idUser`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `UserMovieFavorite` ADD CONSTRAINT `UserMovieFavorite_idUser_fkey` FOREIGN KEY (`idUser`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `UserMovieFavorite` ADD CONSTRAINT `UserMovieFavorite_idMovie_fkey` FOREIGN KEY (`idMovie`) REFERENCES `Movie`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
