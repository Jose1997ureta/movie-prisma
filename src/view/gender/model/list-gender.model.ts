import { prisma } from "../../../db/db";
import { newError } from "../../../utils";

export const getGenderHomeModel = async () => {
	try {
		const result = await prisma.gender.findMany({
			take: 3,
		});

		return result;
	} catch (error) {
		if (error instanceof newError) throw error;
		throw new newError({
			message:
				"Ha ocurrido un problema con el servicio de listar generos home model",
		});
	} finally {
		await prisma.$disconnect();
	}
};

export const getGenderModel = async () => {
	try {
		const result = await prisma.gender.findMany({
			select: {
				id: true,
				name: true,
				key_gender: true,
			},
		});

		return result;
	} catch (error) {
		if (error instanceof newError) throw error;
		throw new newError({
			message:
				"Ha ocurrido un problema con el servicio de listar generos home model",
		});
	} finally {
		await prisma.$disconnect();
	}
};
