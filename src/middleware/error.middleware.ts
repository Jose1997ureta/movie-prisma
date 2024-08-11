import { ErrorRequestHandler, NextFunction, Request, Response } from "express";
import { newError } from "../utils";

export const errorMiddleware = (
	error: ErrorRequestHandler,
	req: Request,
	res: Response,
	next: NextFunction
) => {
	if (error instanceof newError) {
		return res.status(error.status).json({
			message: error.message,
		});
	}

	res
		.status(500)
		.json({ message: "Ha ocurrido un error en el servidor general" });

	// console.log("error", error);

	next();
};
