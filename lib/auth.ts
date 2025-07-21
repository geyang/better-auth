import prisma from './prisma';
import { betterAuth } from 'better-auth';
import { prismaAdapter } from 'better-auth/adapters/prisma';

export const auth = betterAuth({
  baseUrl: process.env.AUTHKIT_URL as string,
  clientUrl: process.env.AUTHKIT_CLIENT_URL as string,
  secret: process.env.AUTHKIT_SECRET as string,
  trustedOrigins: process.env.AUTHKIT_TRUSTED_ORIGINS?.split(',') as string[],
  database: prismaAdapter(prisma, {
    provider: 'mongodb',
  }),
  emailAndPassword: {
    enabled: true,
    autoSignIn: false,
  },
  socialProviders: {
    github: {
      enabled: true,
      clientId: process.env.AUTHKIT_GITHUB_CLIENT_ID as string,
      clientSecret: process.env.AUTHKIT_GITHUB_CLIENT_SECRET as string,
    },
    google: {
      enabled: true,
      clientId: process.env.AUTHKIT_GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.AUTHKIT_GOOGLE_CLIENT_SECRET as string,
    },
  },
  rateLimit: {
    window: 60,
    max: 10,
  },
});
