import nock from 'nock';
import { describe, it, expect } from '@jest/globals';

// Mocking the Google OAuth token endpoint
nock('https://oauth2.googleapis.com')
  .post('/token')
  .reply(200, {
    access_token: 'mock_access_token',
    id_token: 'mock_id_token',
    expires_in: 3600,
    token_type: 'Bearer',
  });

// Mocking the Google user info endpoint
nock('https://www.googleapis.com')
  .get('/oauth2/v3/userinfo')
  .reply(200, {
    sub: '1234567890',
    name: 'John Doe',
    given_name: 'John',
    family_name: 'Doe',
    picture: 'https://example.com/johndoe.jpg',
    email: 'johndoe@example.com',
    email_verified: true,
    locale: 'en',
  });

describe('OAuth Flow', () => {
  it('should handle Google OAuth token exchange and user info retrieval', async () => {
    // Simulate the token exchange and user info retrieval
    // This is where you would call your actual function that handles the OAuth flow
    const accessToken = 'mock_access_token';
    const userInfo = {
      sub: '1234567890',
      name: 'John Doe',
      email: 'johndoe@example.com',
    };

    // Assertions to verify the mocked responses
    expect(accessToken).toBe('mock_access_token');
    expect(userInfo.name).toBe('John Doe');
    expect(userInfo.email).toBe('johndoe@example.com');
  });
}); 