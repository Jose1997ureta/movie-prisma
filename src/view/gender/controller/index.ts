import {
	getGenderController,
	getGenderHomeController,
} from "./list-gender.controller";

export const genderController = {
	getGenderHome: getGenderHomeController,
	getGender: getGenderController,
};
