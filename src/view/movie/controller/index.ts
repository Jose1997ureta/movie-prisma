import { addMovieFavoriteController } from "./add-movie-favorite.controller";
import { createMovieController } from "./create-movie.controller";
import {
	getDestacadosController,
	getMovieBannerController,
	getMovieIDController,
	getMovieIDInformationController,
	getMovieHomeGenderController,
	getMoreMovieIdController,
	getFilterMovieGenderController,
} from "./list-movie.controller";

export const movieController = {
	create: createMovieController,
	getDescatado: getDestacadosController,
	getMovieId: getMovieIDController,
	getMovieIdInfo: getMovieIDInformationController,
	getBanner: getMovieBannerController,
	getHomeGender: getMovieHomeGenderController,
	getMoreMovieId: getMoreMovieIdController,
	getFilterMovieGender: getFilterMovieGenderController,

	addMovieFavorite: addMovieFavoriteController,
};
