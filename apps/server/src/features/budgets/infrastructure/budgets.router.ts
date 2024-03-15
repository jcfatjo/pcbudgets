import { Router } from "express";

import { Routes } from "../budgets.constants.js";
import * as budgetsController from "./budgets.controller.js";

const budgetsRouter: Router = Router();

budgetsRouter.get(Routes.ROOT, budgetsController.getAll);
budgetsRouter.get(Routes.BUDGET, budgetsController.get);
budgetsRouter.post(Routes.ROOT, budgetsController.create);
budgetsRouter.put(Routes.BUDGET, budgetsController.update);
budgetsRouter.delete(Routes.BUDGET, budgetsController.remove);

export default budgetsRouter;
