# Next Auth Starter 🚀

Next Auth Starter is a Next.js 15 boilerplate with built-in authentication using **BetterAuth**. It supports **Google Login** and **BetterAuth credentials**, providing a solid foundation for any Next.js project requiring authentication.

## ✨ Features

- 🔐 **Authentication with BetterAuth**
- 🔑 **Google OAuth Login**
- 🎨 **Modern UI with Tailwind CSS & ShadCN**
- 🗄️ **Database integration with Prisma & PostgreSQL**
- ⚡ **Optimized with Next.js 15 App Router**

## 🛠️ Tech Stack

- **Framework:** Next.js 15
- **Auth Provider:** BetterAuth (Credentials & Google Login)
- **Database:** PostgreSQL with Prisma ORM
- **Styling:** Tailwind CSS, ShadCN

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

## 🚀 Getting Started

### 1️⃣ Install Dependencies

```bash
pnpm install
```

### 2️⃣ Set Up Environment Variables
Create a .env file and add the necessary credentials:

```bash
# Secret key for BetterAuth (Use a strong, random secret)
BETTER_AUTH_SECRET=<your_better_auth_secret>

# The base URL of your application (Update this for production)
BETTER_AUTH_URL=http://localhost:3000  # Change this to your production domain in deployment

# PostgreSQL Database Connection URL (Use environment variables in production)
DATABASE_URL="postgresql://<username>:<password>@<host>/<database_name>?sslmode=require"

# Google OAuth Credentials (Required for social login)
GOOGLE_CLIENT_ID=<your_google_client_id>
GOOGLE_CLIENT_SECRET=<your_google_client_secret>
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

## 🔗 Live Demo
Check out the live version: [Auth Starter](https://better-auth-livid.vercel.app/)


# Built by Aayush Ghimire

