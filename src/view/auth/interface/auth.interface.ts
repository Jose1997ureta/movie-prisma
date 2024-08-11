export interface authProps {
	id: number;
	name: string;
	lastName: string;
	username: string;
	email: string;
	password: string;
	image: string;
}

export interface signUpProps extends Omit<authProps, "id"> {}

export interface signInProps extends Pick<authProps, "email" | "password"> {}
