import express, { Application } from "express";
import { AppRoute } from "./routes/app.route";
import { inject, injectable } from "inversify";

@injectable()
export class App {
    public app: Application;
    public port: number = 3010;

    private _appRoute: AppRoute;

    constructor(
        @inject(AppRoute) appRoute: AppRoute,
    ) {
        this._appRoute = appRoute;
        this.app = express();
    }

    public run() {
        this.app.use(this._appRoute.getPrefix(), this._appRoute.getRouter());
        this.app.listen(this.port, () => {
            console.log(`App is running at http://localhost:${this.port}`);
        })
    }
}