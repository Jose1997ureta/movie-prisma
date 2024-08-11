import { prisma } from "../../../db/db";
import { newError } from "../../../utils";

export const signIn = async ({ email }: { email: string }) => {
	try {
		const result = await prisma.user.findFirst({
			where: {
				email,
			},
			select: {
				email: true,
				id: true,
				image: true,
				lastName: true,
				name: true,
				username: true,
				password: true,
			},
		});

		if (!result)
			throw new newError({ message: "El email o password es incorrecto" });

		return result;
	} catch (error) {
		if (error instanceof newError) throw error;

		throw new newError({
			message: "Ha ocurrido un error en SignIn Controller",
		});
	} finally {
		await prisma.$disconnect();
	}
};
