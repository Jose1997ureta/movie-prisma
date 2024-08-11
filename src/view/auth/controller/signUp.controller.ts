import { NextFunction, Request, Response } from "express";
import { signUpProps } from "../interface/auth.interface";
import { encryptPassword, newError } from "../../../utils";
import { authModel } from "../model";
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../../../constants/core";
import { authSignUpSchema } from "../schema/auth.schema";

export const signUp = async (
	req: Request<{}, {}, signUpProps>,
	res: Response,
	next: NextFunction
) => {
	const { email, image, lastName, name, password, username } = req.body;

	try {
		const validateField = authSignUpSchema.safeParse(req.body);

		if (validateField.error) {
			throw new newError({ message: validateField.error.format() });
		}

		const passwordEncrypt = await encryptPassword(password);

		const element = {
			email,
			lastName,
			password: passwordEncrypt,
			username,
			image,
			name,
		};

		const result = await authModel.signUp(element);

		res.status(201).json({
			id: result.id,
		});
	} catch (error) {
		next(error);
	}
};
