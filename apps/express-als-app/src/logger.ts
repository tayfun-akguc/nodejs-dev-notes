import pino from 'pino';

export const logger = pino({
  transport: {
    targets: [
      {
        target: 'pino-pretty',
        options: {
          colorize: true,
        },
      },
      {
        target: '@logtail/pino',
        options: {
          sourceToken: process.env.ALS_BETTERSTACK_SOURCE_TOKEN,
        },
      },
    ],
  },
  formatters: {
    log: (object) => {
      return object;
    },
  },
});
