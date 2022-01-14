import { injectable } from 'inversify';
import express from 'express';

/**
 * Defines a Basic Common Routes Configuration.
 */
@injectable()
export abstract class CommonRoutesConfig {
  /**
   * Basic Constructor.
   * 
   * @param {express.Application} app The application to use.
   * @param {string} name The name of this Route.
   */
  constructor(protected readonly app: express.Application, private readonly name: string) {
  }
  
  /**
   * .
   * @returns {string} The name of this Route.
   */
  public getName(): string {
    return this.name;
  }

  /**
   * Configures the Routes.
   * @returns {express.Application} The configured Express Application.
   */
  public abstract configureRoutes(): express.Application;

}