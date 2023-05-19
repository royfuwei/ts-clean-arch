import env from 'env-var';

class Configs {
    port = env.get('PORT').default(5001).asPortNumber();
    environment = env.get('NODE_ENV').default('').asString();
}

const configs = new Configs();
export default configs;