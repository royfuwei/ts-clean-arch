import { injectable, inject } from "inversify";
import { Route } from "../seedWork/route";
import { IAppUseCase } from "../../../application/Modules/app/interfaces/iAppUseCase";

@injectable()
export class AppRoute extends Route {

    private _appUseCase: IAppUseCase;
    constructor(
        @inject(Symbol.for('IAppUseCase')) appUseCase: IAppUseCase,
    ) {
        super();
        this._appUseCase = appUseCase;
        this.setRoutes();
    }

    protected async setRoutes() {
        const result = await this._appUseCase.getAppName();
        this.router.get("", (req, res) => {
            res.status(200).send(result);
        });
    }
}