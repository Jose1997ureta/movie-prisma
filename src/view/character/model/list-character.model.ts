import { prisma } from "../../../db/db";
import { newError } from "../../../utils";

export const getCharacteHomeModel = async () => {
	try {
		const result = await prisma.character.findMany({
			take: 9,
		});

		return result;
	} catch (error) {
		if (error instanceof newError) throw error;
		throw new newError({
			message:
				"Ha ocurrido un problema con el servicio de listar character model",
		});
	} finally {
		await prisma.$disconnect();
	}
};
