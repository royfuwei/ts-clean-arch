import express, { Application } from "express";
import { AppRoute } from "./routes/app.route";
import { inject, injectable } from "inversify";

@injectable()
export class App {
    public app: Application;
    public port: number = 3010;


    constructor(
        @inject(AppRoute) private readonly appRoute: AppRoute,
    ) {
        this.app = express();
    }

    public run() {
        this.app.use(this.appRoute.getPrefix(), this.appRoute.getRouter());
        this.app.listen(this.port, () => {
            console.log(`App is running at http://localhost:${this.port}`);
        })
    }
}