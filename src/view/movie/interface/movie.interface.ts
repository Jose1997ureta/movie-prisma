export interface MovieProps {
	id: number;
	title: string;
	subtitle: string;
	duration: string;
	imagen: string;
	banner: string;

	idType: number;
}

export interface createMovieProps extends Omit<MovieProps, "id"> {
	description: string;
	nameDirector: string;

	characters: number[];
	tags: number[];
	genders: number[];
	trailers: { url: string }[];
}
