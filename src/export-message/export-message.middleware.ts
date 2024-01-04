import { Injectable, NestMiddleware } from '@nestjs/common';
import * as fs from 'fs';

const getCircularReplacer = () => {
  const seen = new WeakSet();
  return (key, value) => {
    if (typeof value === 'object' && value !== null) {
      if (seen.has(value)) {
        return;
      }
      seen.add(value);
    }
    return value;
  };
};

@Injectable()
export class ExportMessageMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    let reqJsonString, resJsonString;
    try {
      reqJsonString = JSON.stringify(req, getCircularReplacer());
      resJsonString = JSON.stringify(res, getCircularReplacer());
      // 使用 jsonString 进行你想要的操作
    } catch (error) {
      console.error('Error while converting to JSON:', error);
    }

    const logMessage = `${new Date().toLocaleString()} - ${req.method} ${
      req.originalUrl
    }
${reqJsonString}
${resJsonString}
`;

    // Write the log message to a text file
    fs.appendFileSync('request_logs.log', logMessage + '\n');
    next();
  }
}
