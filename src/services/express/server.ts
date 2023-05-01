import IoCContainer from "../../DI-container"
import { App } from "./app";
import { InversifyAdapter } from "./inversify-adapter";

export const server = async () => {
    new InversifyAdapter(IoCContainer);
    const app: App = IoCContainer.resolve<App>(App);
    app.run();
}