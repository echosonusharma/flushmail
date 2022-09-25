import { z } from 'zod';
import { createRouter } from '../context';

export const waitlistRouter = createRouter()
  .query('getAll', {
    async resolve({ ctx }) {
      return await ctx.prisma.waitlist.findMany();
    },
  })
  .mutation('join', {
    input: z.object({
      email: z.string().email(),
    }),
    async resolve({ ctx, input }) {
      const { email } = input;
      const user = await ctx.prisma.waitlist.create({
        data: {
          email,
        },
      });

      return user;
    },
  });
