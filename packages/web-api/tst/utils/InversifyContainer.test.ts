import { InversifyContainer } from "utils";
import express, { Router } from 'express';

describe('InversifyContainer', () => {

  it('Should Bootstrap the Application', () => {
    const app: express.Application = jest.fn().mockReturnThis() as any;

    const container = new InversifyContainer(app);

    const appRoutesSet: Set<string> = new Set<string>(
      container.getAppRoutes().map(route => route.getName())
    )

    expect(appRoutesSet.has('HealthRoutes')).toBeTruthy();
  });

});