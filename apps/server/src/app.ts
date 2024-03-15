import express, { type Express } from "express";
import logger from "morgan";

import { Routes } from "./app.constants.js";
import connectDB from "./config/mongo.js";
import { budgets } from "./features/budgets/index.js";

const app: Express = express();

await connectDB();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(`${Routes.ROOT}${Routes.BUDGETS}`, budgets);

export default app;
