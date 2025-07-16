"use client";

import { auth } from "@/lib/auth";
import { useEffect, useState } from "react";
import { Toaster } from "sonner";

interface AuthProviderProps {
  children: React.ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [isInitialized, setIsInitialized] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    // Initialize auth
    auth
      .then(() => {
        setIsInitialized(true);
      })
      .catch((err) => {
        console.error("Failed to initialize auth:", err);
        setError(err);
      });
  }, []);

  // If there's an error, show a minimal error page
  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="max-w-md w-full space-y-8 p-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900">
              Authentication Error
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              We're having trouble connecting to our authentication service. Please try again later.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="mt-4 px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
            >
              Retry
            </button>
          </div>
        </div>
      </div>
    );
  }

  // While initializing, show a loading state
  if (!isInitialized) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  // Once initialized, render children
  return (
    <>
      <Toaster richColors position="top-right" />
      {children}
    </>
  );
} 