import { prisma } from "../../../db/db";
import { newError } from "../../../utils";

export const getMovieBannerModel = async () => {
	try {
		const result = await prisma.movie.findMany({
			where: {
				id: 2,
			},
			select: {
				id: true,
				banner: true,
				duration: true,
				title: true,
				subtitle: true,
				movieTag: {
					select: {
						tag: true,
					},
				},
				movieDetail: {
					select: {
						description: true,
					},
				},
			},
			take: 1,
		});

		return result;
	} catch (error) {
		throw new newError({
			message:
				"Ha ocurrido un problema en la obtencion de los banner en el model",
		});
	} finally {
		await prisma.$disconnect();
	}
};

export const getMovieDestacadoModel = async () => {
	try {
		const result = await prisma.movie.findMany({
			where: {
				movieTag: {
					some: {
						idTag: 1,
					},
				},
			},
			select: {
				id: true,
				image: true,
				type: {
					select: {
						id: true,
						name: true,
					},
				},
				movieTag: {
					select: {
						tag: {
							select: {
								id: true,
								name: true,
							},
						},
					},
				},
			},
		});

		return result;
	} catch (error) {
	} finally {
		await prisma.$disconnect();
	}
};

export const getMovieHomeGenderModel = async () => {
	try {
		const selectData = {
			select: {
				id: true,
				image: true,
				type: {
					select: {
						id: true,
						name: true,
					},
				},
				movieTag: {
					select: {
						tag: {
							select: {
								id: true,
								name: true,
							},
						},
					},
				},
				movieGender: {
					select: {
						gender: {
							select: {
								key_gender: true,
							},
						},
					},
				},
			},
		};

		const resultTerror = await prisma.movie.findMany({
			where: {
				movieGender: {
					some: {
						idGender: 6,
					},
				},
			},
			...selectData,
			take: 8,
		});

		const resultComedy = await prisma.movie.findMany({
			where: {
				movieGender: {
					some: {
						idGender: 1,
					},
				},
			},
			...selectData,
			take: 8,
		});

		const resultRomance = await prisma.movie.findMany({
			where: {
				movieGender: {
					some: {
						idGender: 2,
					},
				},
			},
			...selectData,
			take: 8,
		});

		const resultSci_Fi = await prisma.movie.findMany({
			where: {
				movieGender: {
					some: {
						idGender: 5,
					},
				},
			},
			...selectData,
			take: 8,
		});

		return {
			comedy: { name: "Comedia", data: resultComedy },
			romance: { name: "Romance", data: resultRomance },
			terror: { name: "Terror", data: resultTerror },
			"sci-fi": { name: "Sci Fi", data: resultSci_Fi },
		};
	} catch (error) {
	} finally {
		await prisma.$disconnect();
	}
};

export const getMovieIdModel = async (id: number) => {
	try {
		const result = await prisma.movie.findFirst({
			where: {
				id,
			},
			select: {
				id: true,
				title: true,
				subtitle: true,
				banner: true,
				image: true,
				duration: true,
				type: {
					select: {
						id: true,
						name: true,
					},
				},
				movieDetail: {
					select: {
						description: true,
						nameDirector: true,
					},
				},
				movieTag: {
					select: {
						tag: {
							select: {
								id: true,
								name: true,
							},
						},
					},
				},
				movieGender: {
					select: {
						gender: {
							select: {
								id: true,
								name: true,
								key_gender: true,
							},
						},
					},
				},
			},
		});

		return result;
	} catch (error) {
	} finally {
		await prisma.$disconnect();
	}
};

export const getMovieIdInformationModel = async (id: number) => {
	try {
		const result = await prisma.movie.findFirst({
			where: {
				id,
			},
			select: {
				id: true,
				movieDetail: {
					select: {
						nameDirector: true,
					},
				},

				movieGender: {
					select: {
						gender: {
							select: {
								id: true,
								name: true,
							},
						},
					},
				},
				movieCharacter: {
					select: {
						character: {
							select: {
								id: true,
								name: true,
							},
						},
					},
				},

				movieTrailer: {
					select: {
						id: true,
						url: true,
					},
				},
			},
		});

		return result;
	} catch (error) {
	} finally {
		await prisma.$disconnect();
	}
};

export const getMoreMovieIdModel = async (id: number) => {
	try {
		const resultGender = await prisma.movie.findFirst({
			where: {
				id,
			},
			select: {
				movieGender: {
					select: {
						idGender: true,
					},
				},
			},
		});

		if (!resultGender)
			throw new newError({
				message: "Ha ocurrido un problema con la lista de ggnder more",
			});

		const rGender = resultGender.movieGender.map((el) => el.idGender);

		const result = await prisma.movie.findMany({
			where: {
				movieGender: {
					some: {
						idGender: {
							in: rGender,
						},
					},
				},
				NOT: {
					id,
				},
			},
			select: {
				id: true,
				image: true,
				type: {
					select: {
						id: true,
						name: true,
					},
				},
				movieTag: {
					select: {
						tag: {
							select: {
								id: true,
								name: true,
							},
						},
					},
				},
			},

			take: 5,
		});

		return result;
	} catch (error) {
	} finally {
		await prisma.$disconnect();
	}
};

export const getFilterMovieGenderModel = async (gender: string) => {
	try {
		const result = await prisma.movie.findMany({
			where: {
				movieGender: {
					some: {
						gender: {
							key_gender: gender,
						},
					},
				},
			},
			select: {
				id: true,
				image: true,
				type: {
					select: {
						id: true,
						name: true,
					},
				},
				movieTag: {
					select: {
						tag: {
							select: {
								id: true,
								name: true,
							},
						},
					},
				},
			},
		});

		return result;
	} catch (error) {
		if (error instanceof newError) throw error;

		throw new newError({
			message: "Ha ocurrido un problema en el filter movie gender model",
		});
	} finally {
		await prisma.$disconnect();
	}
};
