import { AppName } from "../viewModels/appName";

/**
 * Solid 依賴反轉原則 Dependency Inversion Principle (DIP)
 * 定義功能
 */
export interface IAppUseCase {
    getAppName(): Promise<AppName>; 
}


