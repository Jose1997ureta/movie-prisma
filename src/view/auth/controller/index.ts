import { signUp } from "./signUp.controller";
import { signInController } from "./signIn.controller";

export const authController = {
	signUp,
	signIn: signInController,
};
