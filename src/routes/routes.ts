import {Router} from "express";
import {employeeRouter} from "./employeeRouter";
import {branchRouter} from "./branch";

export const routes = Router();
routes.use('/employees',employeeRouter);
routes.use('/branches',branchRouter);