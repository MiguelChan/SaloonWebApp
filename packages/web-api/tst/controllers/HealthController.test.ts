import { HealthController } from "controllers";
import express from 'express';
import { createMockRequest, createMockResponse } from "../utils/ExpressUtils";

describe('HealthController', () => {

  let controller: HealthController;

  beforeEach(() => {
    controller = new HealthController();
  });

  describe('ping', () => {
    it('Should perform a Ping', () => {
      const mockReq: express.Request = createMockRequest();
      const mockRes: express.Response = createMockResponse();
  
      controller.ping(mockReq, mockRes);
  
      expect(mockRes.status).toHaveBeenCalledWith(200);
      expect(mockRes.send).toHaveBeenCalledWith('healthy');
    });
  });

  describe('deepPing', () => {
    it('Should perform a DeepPing', () => {
      const mockReq: express.Request = createMockRequest();
      const mockRes: express.Response = createMockResponse();
  
      controller.deepPing(mockReq, mockRes);
  
      expect(mockRes.status).toHaveBeenCalledWith(200);
      expect(mockRes.send).toHaveBeenCalledWith('healthy');
    });
  });

});