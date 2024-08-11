import { NextFunction, Request, Response } from "express";
import { MovieModel } from "../model";

import "dotenv/config";
import { newError } from "../../../utils";

export const getDestacadosController = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	try {
		const result = await MovieModel.listDestacado();

		const rpta = result?.map((el) => {
			return {
				id: el.id,
				image: `${process.env.BASE_URL}${el.image}`,
				type: el.type.name,
				tags: el.movieTag.map((m) => m.tag),
			};
		});

		res.json(rpta);
	} catch (error) {
		next(error);
	}
};

export const getMovieHomeGenderController = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	try {
		const result: any = await MovieModel.getHomeGender();

		if (!result)
			throw new newError({
				message: "Ha ocurrido el problema de movie banner controller",
			});

		const baseUrl = process.env.BASE_URL;
		const dataResult = Object.keys(result).map((g: any) => {
			return {
				name: result[g].name,
				gender_key: g,
				movie: result[g].data.map((movie: any) => {
					return {
						id: movie.id,
						image: `${baseUrl}${movie.image}`,
						type: movie.type,
						tags: movie.movieTag.map((t: any) => t.tag),
					};
				}),
			};
		});

		res.json(dataResult);
	} catch (error) {
		console.log(error);
		next(error);
	}
};

export const getMovieIDController = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	try {
		const { id } = req.params;
		const result = await MovieModel.getMovieId(Number(id));

		if (!result) {
			throw new newError({ message: "Ha ocurrido un problema con la lista" });
		}

		console.log(req.cookies);

		const rpta = {
			id: result.id,
			title: result.title,
			subtitle: result.subtitle,
			banner: `${process.env.BASE_URL}${result.banner}`,
			image: `${process.env.BASE_URL}${result.image}`,
			duration: result.duration,
			type: result.type.name,
			description: result.movieDetail?.description,
			nameDirector: result.movieDetail?.nameDirector,
			tags: result.movieTag.map((m) => m.tag),
			gender: result.movieGender.map((el) => el.gender),
		};

		res.json(rpta);
	} catch (error) {
		next(error);
	}
};

export const getMovieIDInformationController = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	try {
		const { id } = req.params;
		const result = await MovieModel.getIdInfo(Number(id));

		if (!result) {
			throw new newError({ message: "Ha ocurrido un problema con la lista" });
		}

		const rpta = {
			id: result.id,
			nameDirector: result.movieDetail?.nameDirector,
			genders: result.movieGender.map((m) => m.gender),
			characters: result.movieCharacter.map((m) => m.character),
			trailers: result.movieTrailer,
		};

		res.json(rpta);
	} catch (error) {
		next(error);
	}
};

export const getMovieBannerController = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	try {
		const result = await MovieModel.getBanner();

		const rpta = result.map((el) => {
			return {
				id: el.id,
				banner: `${process.env.BASE_URL}${el.banner}`,
				duration: el.duration,
				title: el.title,
				subtitle: el.subtitle,
				tags: el.movieTag.map((el) => el.tag),
				description: el.movieDetail?.description,
			};
		});

		console.log(rpta);
		res.json(rpta);
	} catch (error) {
		next(error);
	}
};

export const getMoreMovieIdController = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	try {
		const { id } = req.params;
		const result: any = await MovieModel.getMoreMovieId(Number(id));

		if (!result)
			throw new newError({
				message: "Ha ocurrido el problema de movie banner controller",
			});

		const baseUrl = process.env.BASE_URL;

		const dataResult = result.map((el: any) => {
			return {
				id: el.id,
				image: `${baseUrl}${el.image}`,
				type: el.type,
				tags: el.movieTag.map((t: any) => t.tag),
			};
		});

		res.json(dataResult);
	} catch (error) {
		console.log(error);
		next(error);
	}
};
export const getFilterMovieGenderController = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	try {
		const { gender } = req.params;
		const result: any = await MovieModel.getFilterMovieGender(gender);

		if (!result)
			throw new newError({
				message: "Ha ocurrido el problema de movie banner controller",
			});

		const baseUrl = process.env.BASE_URL;

		const dataResult = result.map((el: any) => {
			return {
				id: el.id,
				image: `${baseUrl}${el.image}`,
				type: el.type,
				tags: el.movieTag.map((t: any) => t.tag),
			};
		});

		res.json(dataResult);
	} catch (error) {
		console.log(error);
		next(error);
	}
};
