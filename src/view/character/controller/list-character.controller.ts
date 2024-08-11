import { NextFunction, Request, Response } from "express";
import { characterModel } from "../model";
import "dotenv/config";

export const getCharacterController = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	try {
		const result = await characterModel.getCharacterHome();

		const data = result.map((el) => {
			return {
				...el,
				imagen: `${process.env.BASE_URL}${el.imagen}`,
			};
		});

		res.json(data);
	} catch (error) {
		next(error);
	}
};
