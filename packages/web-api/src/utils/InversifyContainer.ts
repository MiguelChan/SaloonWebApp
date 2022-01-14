import * as inversify from 'inversify';
import express from 'express';
import { DITypes } from './DITypes';
import { HealthRoutesConfig } from 'routes';
import { HealthController } from 'controllers';
import { CommonRoutesConfig } from '../routes/CommonRoutesConfig';

export class InversifyContainer {
  private readonly container: inversify.Container;

  private readonly ROUTES_CONFIG: symbol[] = [
    DITypes.HealthRoutes,
  ];

  constructor(app: express.Application) {
    this.container = new inversify.Container();
    this.container.bind<express.Application>(DITypes.Application).toConstantValue(app);
    this.configureContainer();
  }

  public getAppRoutes(): CommonRoutesConfig[] {
    return this.ROUTES_CONFIG.map((currentRoute: symbol) => {
      return this.container.get<CommonRoutesConfig>(currentRoute);
    });
  }

  private configureContainer(): void {
    this.container.bind<HealthRoutesConfig>(DITypes.HealthRoutes).to(HealthRoutesConfig).inSingletonScope();
    this.container.bind<HealthController>(DITypes.HealthController).to(HealthController).inSingletonScope();
  }
}