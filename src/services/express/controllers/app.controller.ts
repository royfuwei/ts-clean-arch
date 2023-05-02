import "reflect-metadata";
import { inject, injectable } from "inversify";
import { IAppUseCase } from "../../../application/Modules/app/interfaces/iAppUseCase";
import {
    Get,
    Route,
  } from "tsoa";

@injectable()
@Route()
export class AppController {

    constructor(
        @inject(Symbol.for('IAppUseCase')) private readonly appUseCase: IAppUseCase,
    ) {}


    /**
     * 
     */
    @Get()
    async getAppName() {
        return this.appUseCase.getAppName();
    }
}