import { prisma } from "../../../db/db";
import { newError } from "../../../utils";
import { createMovieProps } from "../interface/movie.interface";

export const createMovieModel = async (parameter: createMovieProps) => {
	const {
		banner,
		description,
		duration,
		characters,
		genders,
		tags,
		idType,
		imagen,
		title,
		subtitle,
		nameDirector,
		trailers,
	} = parameter;
	console.log("parameter", parameter);

	try {
		const result = await prisma.movie.create({
			data: {
				title,
				subtitle,
				banner,
				image: imagen,
				duration,
				idType,

				movieDetail: {
					create: {
						description,
						nameDirector,
					},
				},

				movieTrailer: trailers?.length
					? {
							createMany: {
								data: trailers.map((el) => {
									return { url: el.url };
								}),
							},
					  }
					: undefined,

				// movieCharacter: characters?.length
				// 	? {
				// 			createMany: {
				// 				data: characters.map((el) => {
				// 					return { idCharacter: el };
				// 				}),
				// 			},
				// 	  }
				// 	: undefined,

				movieCharacter: characters?.length
					? {
							create: characters.map((el) => {
								return {
									character: {
										connect: {
											id: el,
										},
									},
								};
							}),
					  }
					: undefined,

				// movieTag: tags?.length
				// 	? {
				// 			createMany: {
				// 				data: tags.map((el) => {
				// 					return { idTag: el };
				// 				}),
				// 			},
				// 	  }
				// 	: undefined,

				movieTag: tags?.length
					? {
							create: tags.map((el) => {
								return {
									tag: {
										connect: { id: el },
									},
								};
							}),
					  }
					: undefined,

				// movieGender: genders?.length
				// 	? {
				// 			createMany: {
				// 				data: genders.map((el) => {
				// 					return { idGender: el };
				// 				}),
				// 			},
				// 	  }
				// 	: undefined,

				movieGender: genders?.length
					? {
							create: genders.map((el) => {
								return {
									gender: {
										connect: {
											id: el,
										},
									},
								};
							}),
					  }
					: undefined,
			},
			select: {
				id: true,
			},
		});

		console.log("result", result);
		if (!result)
			throw new newError({
				message: "Ha ocurrido un problema con el registro del producto",
			});

		return result;
	} catch (error) {
		console.log("error", error);
		if (error instanceof newError) throw error;
		else {
			throw new newError({
				message: "Ha ocurrido un problema con el registra movie",
			});
		}
	} finally {
		await prisma.$disconnect();
	}
};
