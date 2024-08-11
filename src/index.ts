import express from "express";
import morgan from "morgan";
import path from "path";
import cors from "cors";
import "dotenv/config";
import cookieParse from "cookie-parser";

import { authRouter } from "./router";
import { errorMiddleware } from "./middleware";
import { movieRouter } from "./router/movie.router";
import { genderRouter } from "./router/gender.router";
import { characterRouter } from "./router/character.router";

const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan("dev"));
app.use(cookieParse());

app.get("/", (req, res) => {
	res.send("<h1>Hola Mundos</h1>");
});

app.use("/static/users", express.static(path.join(__dirname, "/upload/users")));
app.use("/static/movie", express.static(path.join(__dirname, "/upload/movie")));

app.use("/auth", authRouter);
app.use("/movie", movieRouter);
app.use("/gender", genderRouter);
app.use("/character", characterRouter);

app.use(errorMiddleware);

const PORT = process.env.PORT;

app.listen(PORT, () => {
	console.log(`server running on port ${PORT}`);
});
