import { prisma } from "../../../db/db";
import { newError } from "../../../utils";
import { signUpProps } from "../interface/auth.interface";

export const signUp = async (parameter: signUpProps) => {
	const { email, image, lastName, name, password, username } = parameter;

	console.log(parameter);

	try {
		const validateUser = await prisma.user.findFirst({
			where: {
				OR: [
					{
						username: {
							equals: username,
						},
					},
					{
						email: {
							equals: email,
						},
					},
				],
			},
		});

		if (validateUser)
			throw new newError({ message: "el username o email ya exiten" });

		const result = await prisma.user.create({
			data: {
				name,
				lastName,
				email,
				username,
				password,
				image: "",
			},
			select: {
				id: true,
			},
		});

		if (!result)
			throw new newError({ message: "No se ha podido registrar el usuario" });

		return result;
	} catch (error) {
		if (error instanceof newError) throw error;

		throw new newError({ message: "Ha ocurrido un error en model signUp" });
	} finally {
		await prisma.$disconnect();
	}
};
