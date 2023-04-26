import "reflect-metadata";
import IoCContainer from "./DI-container";
import { App } from "./services/express/app";

async function main() {
    const app: App = IoCContainer.resolve<App>(App);
    app.run();
}
main();

