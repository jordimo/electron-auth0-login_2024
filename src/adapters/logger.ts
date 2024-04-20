import { Adapter } from '../types.js';
import { context } from '../framework.js';

export const logger: Adapter = (config) => context('logger', {
    debug: (...s: string[]) => {
      if (config.debug) {
          console.log(...s);
      }
    },
    warn: (...s: string[]) => console.warn(...s)
});
