import { Route } from "./server/route";

export class AppRoute extends Route {
    constructor() {
        super();
        this.setRoutes();
    }

    protected setRoutes() {
        this.router.get("", (req, res) => {
            res.status(200).send({ app: "test server" });
        });
    }
}