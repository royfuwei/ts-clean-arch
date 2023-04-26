import { injectable } from "inversify";
import { IAppUseCase } from "../interfaces/iAppUseCase";
import { AppName } from "../viewModels/appName";

@injectable()
export class TestAppUseCase implements IAppUseCase {
    async getAppName(): Promise<AppName> {
        const result = new AppName();
        result.app = 'ts-clean-arch:test';
        return result;
    }
}