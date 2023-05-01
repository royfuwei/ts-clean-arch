import "reflect-metadata";
import { Container } from 'inversify';
import { AppController } from './controllers/app.controller';
import { App } from './app';
import { AppRoute } from './routes/app.route';

export class InversifyAdapter {
  constructor(private readonly container: Container) {
    this.container.bind<AppController>(AppController).toSelf();
    this.container.bind<AppRoute>(AppRoute).toSelf();
  }
}