import debug from 'debug';
import express from 'express';
import { injectable } from 'inversify';

const logger: debug.IDebugger = debug('controllers:HealthController');

/**
 * The health controller.
 */
@injectable()
export class HealthController {

  /**
   * .
   */
  constructor() {
    logger('Initializing HealthController');
    this.ping = this.ping.bind(this);
    this.deepPing = this.deepPing.bind(this);
  }

  /**
   * The ping operation.
   * @param req .
   * @param res .
   */
  public async ping(req: express.Request, res: express.Response): Promise<void> {
    logger('ping');
    res.status(200).send('healthy');
  }

  public async deepPing(req: express.Request, res: express.Response): Promise<void> {
    logger('deepPing');
    res.status(200).send('healthy');
  }

}