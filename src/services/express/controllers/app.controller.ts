import "reflect-metadata";
import { inject, injectable } from "inversify";
import { IAppUseCase } from "../../../application/Modules/app/interfaces/iAppUseCase";

@injectable()
export class AppController {

    constructor(
        @inject(Symbol.for('IAppUseCase')) private readonly appUseCase: IAppUseCase,
    ) {}


    /**
     * controller func
     * 把 usecase, router 放在一起變成controller
     */
    async getAppName() {
        return this.appUseCase.getAppName();
    }
}