import { authClient } from '@/lib/auth-client';

export const signInWithGoogle = async () => {
  const data = await authClient.signIn.social({
    provider: 'google',
  });
};

export const signInWithGitHub = async () => {
  const data = await authClient.signIn.social({
    provider: 'github',
  });
};

export const signUpWithGoogle = async () => {
  const data = await authClient.signUp.social({
    provider: 'google',
  });
};

export const signUpWithGitHub = async () => {
  const data = await authClient.signUp.social({
    provider: 'github',
  });
};
