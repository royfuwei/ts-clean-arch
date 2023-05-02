import * as fs from 'fs';
import * as path from 'path';
import * as swaggerUi from 'swagger-ui-express';
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
        const rawdata: string = fs.readFileSync(path.resolve('./dist/swagger.json'), 'utf8');
        const swaggerDocument = JSON.parse(rawdata);
        this.app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended: true}));

        this.app.listen(this.port, () => {
            console.log(`App is running at http://localhost:${this.port}`);
        })
    }
}