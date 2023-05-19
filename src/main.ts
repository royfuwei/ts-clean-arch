import './preboot';
import { server } from "./services/express/server";
import configs from './configs';

async function main() {
    console.log(`NODE_ENV: ${configs.environment}`);
    await server();
}
main();

