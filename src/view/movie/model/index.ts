import { addMovieFavoriteModel } from "./add-movie-favorite.model";
import { createMovieModel } from "./create-movie.model";
import {
	getMovieBannerModel,
	getMovieDestacadoModel,
	getMovieIdInformationModel,
	getMovieIdModel,
	getMovieHomeGenderModel,
	getMoreMovieIdModel,
	getFilterMovieGenderModel,
} from "./list-movie.model";

export const MovieModel = {
	create: createMovieModel,
	listDestacado: getMovieDestacadoModel,
	getMovieId: getMovieIdModel,
	getIdInfo: getMovieIdInformationModel,
	getBanner: getMovieBannerModel,
	getHomeGender: getMovieHomeGenderModel,
	getMoreMovieId: getMoreMovieIdModel,
	getFilterMovieGender: getFilterMovieGenderModel,

	addMovieFavorite: addMovieFavoriteModel,
};
