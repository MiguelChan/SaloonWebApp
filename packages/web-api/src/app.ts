import 'reflect-metadata';
import express from 'express';
import * as http from 'http';
import * as winston from 'winston';
import * as expressWinston from 'express-winston';
import cors from 'cors';
import debug from 'debug';
import path from 'path';
import { InversifyContainer } from 'utils';
import { CommonRoutesConfig } from './routes/CommonRoutesConfig';

/**
 * The Actual Application.
 */
export class SaloonApplication {

  /**
   * Starts the application.
   */
  public startApplication(): void {
    const app: express.Application = express();
    const server: http.Server = http.createServer(app);
    const port: number | string = process.env.PORT || 3030;
    const debugLog: debug.IDebugger = debug('SaloonApplication:startApplication');
    const diContainer: InversifyContainer = new InversifyContainer(app);

    // Adding Middleware for parsing all the requests as JSONs.
    app.use(express.json());

    // Adding a middleware for CORS
    app.use(cors());

    // Setting up winston-express logging
    const loggerOptions: expressWinston.LoggerOptions = {
      transports: [
        new winston.transports.Console(),
      ],
      format: winston.format.combine(
        winston.format.json(),
        winston.format.prettyPrint(),
        winston.format.colorize({
          all: true,
        }),
      ),
    };

    // Adding a process-stop on unhandled errors and spitting out a strack trace.
    // Only occurs in Debug Mode.
    if (process.env.DEBUG) {
      process.on('unhandledRejection', (reason: any) => {
        debugLog('unhandledRejection:', reason);
        process.exit(1);
      });
    } else {
      loggerOptions.meta = false;
    }

    // Initialize the Logger
    app.use(expressWinston.logger(loggerOptions));


    // Server Setup.
    server.listen(port, () => {
      debugLog(`Server running @ http://localhost:${port}`);
      diContainer.getAppRoutes().forEach((currentRoute: CommonRoutesConfig) => {
        debugLog(`Configuring Route: ${currentRoute.getName()}`);
        currentRoute.configureRoutes();
      });

      if (process.env.USE_STATIC_ASSETS) {
        const staticAssetsPath = path.join('build/website');
        app.use(express.static(staticAssetsPath));
    
        app.get('*', (req: express.Request, res: express.Response) => {
          const resolvedPath = path.resolve(staticAssetsPath, 'index.html');
          debugLog(`ResolvedPath: ${resolvedPath}`);
          res.sendFile(resolvedPath);
        });
      }
    });
  }
}