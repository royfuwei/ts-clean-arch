import express, { Application } from "express";
import { AppRoute } from "../app.route";

export class App {
    public app: Application;

    constructor() {
        this.app = express();
        const appRoute = new AppRoute();
        this.app.use(appRoute.getPrefix(), appRoute.getRouter());
        this.app.listen(3000, () => {
            console.log('App is running in debug mode');
        })
    }
}