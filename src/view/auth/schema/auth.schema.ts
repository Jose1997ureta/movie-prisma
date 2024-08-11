import z from "zod";

export const authSignUpSchema = z.object({
	name: z.string({
		invalid_type_error: "El campo name no tiene el formato strig",
		required_error: "El campo es requerido",
	}),
	lastName: z.string({
		required_error: "El campo es requerido",
	}),
	username: z.string({
		required_error: "El campo es requerido",
	}),
	email: z
		.string({
			required_error: "El campo es requerido",
		})
		.email({
			message: "No es un email correcto",
		}),
	password: z.string({
		required_error: "El campo es requerido",
	}),
});

export const authSignInSchema = z.object({
	email: z
		.string({
			required_error: "El campo es requerido",
		})
		.email({
			message: "Es un formato incorrecto",
		}),
	password: z.string({
		required_error: "El campo es requerido",
	}),
});
