import { prisma } from "../../../db/db";
import { newError } from "../../../utils";

export const addMovieFavoriteModel = async (
	idMovie: number,
	idUser: number
) => {
	try {
		const result = await prisma.userMovieFavorite.create({
			data: {
				idMovie,
				idUser,
			},
		});

		if (!result)
			throw new newError({
				message: "Ha ocurrido un problema con agregar favorito model",
			});

		return result;
	} catch (error) {
		if (error instanceof newError) throw error;
		throw new newError({
			message: "Ha ocurrido un problema con codigo de agregar favorito model",
		});
	} finally {
		await prisma.$disconnect();
	}
};
