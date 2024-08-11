import { NextFunction, Request, Response } from "express";
import { signInProps } from "../interface/auth.interface";
import { comparePassword, newError } from "../../../utils";
import { authModel } from "../model";
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../../../constants/core";
import { authSignInSchema } from "../schema/auth.schema";

export const signInController = async (
	req: Request<{}, {}, signInProps>,
	res: Response,
	next: NextFunction
) => {
	const { email, password } = req.body;

	try {
		const validateField = authSignInSchema.safeParse({ email, password });

		if (validateField.error)
			throw new newError({ message: validateField.error.format() });

		const { password: passworddb, ...result } = await authModel.signIn({
			email,
		});

		const validatePassword = await comparePassword(password, passworddb);

		if (!validatePassword)
			throw new newError({ message: "El email o password es incorrecto" });

		const token = jwt.sign(
			{
				id: result.id,
				email: result.email,
				username: result.username,
			},
			JWT_SECRET,
			{
				expiresIn: "1h",
			}
		);

		res
			.cookie("access_token", token, {
				httpOnly: false,
				maxAge: 1000 * 60 * 60, /// 1hr
				secure: process.env.NODE_ENV === "producction",
			})
			.send({
				token,
				data: {
					...result,
				},
			});
	} catch (error) {
		next(error);
	}
};
