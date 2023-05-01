import { injectable, inject } from "inversify";
import { BaseRoute } from "../seedWork/route";
import { AppController } from "../controllers/app.controller";
import { NextFunction, Request, Response } from "express";

@injectable()
export class AppRoute extends BaseRoute {

    constructor(
        @inject(AppController) private readonly controller: AppController,
    ) {
        super();
        this.setRoutes();
    }

    /**
     * set route
     */
    protected setRoutes() {
        this.router.get('', this.get);
    }

    /**
     * route function
     * @param req 
     * @param res 
     * @param next 
     */
    protected get = async (req: Request, res: Response, next: NextFunction) => {
        const data = await this.controller.getAppName();
        res.status(200).send(data);
    }
}