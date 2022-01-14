import express from 'express';
import { HealthController } from 'controllers';
import { CommonRoutesConfig } from './CommonRoutesConfig';
import { inject } from 'inversify';
import { DITypes } from '../utils/DITypes';

/**
 * The HealthRoutes Config.
 */
export class HealthRoutesConfig extends CommonRoutesConfig {

  constructor(@inject(DITypes.Application) app: express.Application, 
    @inject(DITypes.HealthController) private readonly healthController: HealthController) {
    super(app, 'HealthRoutes');
  }

  /**
   * .
   * @returns Configured routes.
   */
  public configureRoutes(): express.Application {
    this.app.route('/ping').get(this.healthController.ping);
    this.app.route('/deep_ping').get(this.healthController.deepPing);
    return this.app;
  }

}