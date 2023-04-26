ts-clean-arch
===

試著將自己理解的clean architecture 跟 DDD (Domain Driven Design) 用 Nodejs 做出簡單的開發架構。

### 主要有:
- 不被 express, nestjs 等 External Service 耦合影養。
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

- [【TypeScript】從頭建立屬於你的 TypeScript 專案](https://nijialin.com/2020/09/19/how-to-build-typescript/)


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

### typeorm

```sh
npm install @nestjs/typeorm typeorm --save
npm install reflect-metadata --save
```