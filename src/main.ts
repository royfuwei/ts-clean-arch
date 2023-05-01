import "reflect-metadata";
import IoCContainer from "./DI-container";
import { server } from "./services/express/server";

async function main() {
    server();
}
main();

