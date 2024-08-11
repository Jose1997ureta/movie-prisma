export class newError extends Error {
	public status: number;
	public message: any;

	constructor({
		status = 400,
		message = "",
	}: {
		status?: number;
		message: any;
	}) {
		super(message);

		this.message = message;
		this.status = status;
	}
}
