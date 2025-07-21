# BestAuth Starter Kit 🚀

BestAuth Starter is a Tailwind4 + Next.js 15 boilerplate with built-in authentication using **BetterAuth**. This currently supports **Google** and **GitHub** social logins.

## 🛠️ Tech Stack

- **Framework:** Next.js 15
- **Auth Provider:** BetterAuth (Credentials & Google Login)
- **Database:** MongoDB with Prisma ORM
- **Styling:** Tailwind4, ShadCN

## 🚀 Getting Started

### 1️⃣ Install Dependencies

```bash
pnpm install
```

### 2️⃣ Set Up Environment Variables
Create an `.env` file and add the necessary credentials:

```bash
AUTHKIT_URL="http://localhost:3001"
AUTHKIT_CLIENT_URL="http://localhost:3000"
AUTHKIT_SECRET="UzRsU8Ky+jLD1YbeL+1K8ZIR6ZyLaxogZX1YhuCOsWc="
# add trusted origins
AUTHKIT_TRUSTED_ORIGINS="http://localhost:3000,http://localhost:3001"

# Your MongoDB connection string
# DATABASE_URL="mongodb://localhost:27017/authkit-local-dev"
AUTHKIT_DATABASE_URL="mongodb+srv://$MONGO_USER:$MONGO_PASSWORD@$SERVER_ADDRESS/$DB_NAME"

# GitHub OAuth App credentials
AUTHKIT_GITHUB_CLIENT_ID=<id/>
AUTHKIT_GITHUB_CLIENT_SECRET=<secret/>

# Google OAuth
AUTHKIT_GOOGLE_CLIENT_ID=<id/>
AUTHKIT_GOOGLE_CLIENT_SECRET=<secret/>
```

### 3️⃣ Run Database Migrations

```bash
pnpm prisma migrate dev
```

### 4️⃣ Start the Development Server

```bash
pnpm dev
```

The app will be available at http://localhost:3000.

## 🔑 Authentication Workflow Steps

1. **User Registration**:
   - Test the creation of a new user account.
   - Validate input fields (e.g., email format, password strength).
   - Ensure that duplicate registrations are handled correctly.

2. **Email Verification** (if applicable):
   - Test the sending of verification emails.
   - Verify that the email contains the correct verification link.
   - Ensure that the verification process updates the user's status.

3. **User Login**:
   - Test successful login with valid credentials.
   - Validate error handling for incorrect credentials.
   - Ensure that the session or token is created upon successful login.

4. **Session Management**:
   - Test session creation and expiration.
   - Validate that users can log out and that sessions are invalidated.

5. **Password Reset**:
   - Test the request for a password reset.
   - Verify that the reset email is sent with the correct link.
   - Ensure that the password can be successfully reset.

6. **Access Control**:
   - Test that authenticated users can access protected routes.
   - Validate that unauthenticated users are redirected or denied access.

7. **Token Refresh** (if using JWT or similar):
   - Test the token refresh process.
   - Ensure that expired tokens are handled correctly.

8. **Account Management**:
   - Test updating user profile information.
   - Validate changes to sensitive information like email or password.


## 🔗 Live Demo
Check out the live version: [AuthKit](https://authkit.vuer.ai/)



