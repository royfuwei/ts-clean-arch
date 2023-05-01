import { Container } from "inversify";
import { IAppUseCase } from "./application/Modules/app/interfaces/iAppUseCase";
import { AppUseCase } from "./application/Modules/app/usecaes/default.app";
import { TestAppUseCase } from "./application/Modules/app/usecaes/test.app";
import { AppRoute } from "./services/express/routes/app.route";


const IoCContainer = new Container();

/**
 * IoC 控制 取用 DI的 Default
 * @param container inversify's Container
 */
const getDefaultContainer = (container: Container): void => {
    container.bind<IAppUseCase>(Symbol.for('IAppUseCase')).to(AppUseCase);
}
getDefaultContainer(IoCContainer);

/**
 * IoC 控制 取用 DI的 Test
 * @param container inversify's Container
 */
const getTestContainer = (container: Container): void => {
    container.bind<IAppUseCase>(Symbol.for('IAppUseCase')).to(TestAppUseCase);
}

export default IoCContainer;