import { NextFunction, Request, Response } from "express";
import { genderModel } from "../model";

export const getGenderHomeController = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	try {
		const result = await genderModel.getGenderHome();

		res.json(result);
	} catch (error) {
		next(error);
	}
};

export const getGenderController = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	try {
		const result = await genderModel.getGender();

		res.json(result);
	} catch (error) {
		next(error);
	}
};
