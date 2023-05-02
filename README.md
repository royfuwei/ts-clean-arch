ts-clean-arch
===

試著將自己理解的clean architecture 跟 DDD (Domain Driven Design) 用 Nodejs 做出簡單的開發架構。

### 主要有:
- 不被 express 等 External Service 耦合影響。
- Domain Layer, Application Layer, Infrastructure Layer 分層
- 對外 External Service 另外分一層，先用Express。

### Technologies 要做的部分
- IoC: [InversifyJS](https://github.com/inversify/InversifyJS)
- [RxJS](https://rxjs.dev/)
- Clean Architecture
- DDD
- UnitTest: [jest](https://jestjs.io/)
- [TypeORM]()
- Mongodb: [mongoose](https://github.com/Automattic/mongoose), [mongodb](https://github.com/mongodb/node-mongodb-native)
- swagger

---

## Install



```sh
npm init
npm install typescript @types/node
npx tsc --init
npm install ts-node nodemon --save-dev
```


### IoC

```sh
npm install inversify reflect-metadata --save
```

TypeScript Interface 在反射(`"reflect-metadata"`)時，無法使用非實體的`interface`去反射，所以在`inversify`需要定義：

```ts
// default.app.ts
@injectable()
export class AppUseCase implements IAppUseCase {
    async getAppName(): Promise<AppName> {
        const result = new AppName();

// app.route.ts
@injectable()
export class AppRoute {

    private _appUseCase: IAppUseCase;
    constructor(
        @inject(Symbol.for('IAppUseCase')) appUseCase: IAppUseCase,
    ) {
        this._appUseCase = appUseCase;

// IoC
// DI-container.ts
container.bind<IAppUseCase>(Symbol.for('IAppUseCase')).to(AppUseCase);

```

### webpack

```sh
npm i --save-dev webpack webpack-cli webpack-node-externals start-server-nestjs-webpack-plugin clean-webpack-plugin
npm i --save-dev ts-loader
```

### tsoa

```sh
npm i tsoa swagger-ui-express
npm i --save-dev @types/swagger-ui-express
```

> InversifyJS 無法用webpack hmr

### typeorm

```sh
npm install @nestjs/typeorm typeorm --save
npm install reflect-metadata --save
```