import { ExportMessageMiddleware } from './export-message.middleware';

describe('ExportMessageMiddleware', () => {
  it('should be defined', () => {
    expect(new ExportMessageMiddleware()).toBeDefined();
  });
});
