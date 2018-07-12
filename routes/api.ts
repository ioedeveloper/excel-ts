// importing libraries and dependencies
import { NextFunction, Request, Response, Router } from "express";
import * as excelApiController from "../controller/excelApiController";

/**
 * Handles routing of leave api request
 */
class ExcelApi {
  public router: Router;
  public constructor() {
    this.router = Router();
    this.init();
  }
  private init():void {
    this.router.post("/upload", excelApiController.excelHandler);
  }
}

const excelApiRoutes:ExcelApi = new ExcelApi();
export {excelApiRoutes};
