import { Router } from "express";
import { injectable } from "inversify";

@injectable()
export abstract class BaseRoute {
    protected router = Router();
    protected abstract setRoutes(): void;
    protected prefix: string = "/";

    public getPrefix() {
        return this.prefix;
    }

    public getRouter() {
        return this.router;
    }
}