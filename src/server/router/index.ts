// src/server/router/index.ts
import superjson from 'superjson';
import { createRouter } from './context';

import { waitlistRouter } from './models/waitlist';
import { protectedExampleRouter } from './protected-example-router';

export const appRouter = createRouter()
  .transformer(superjson)
  .merge('waitlist.', waitlistRouter)
  .merge('auth.', protectedExampleRouter);

// export type definition of API
export type AppRouter = typeof appRouter;
