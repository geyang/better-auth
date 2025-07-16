"use client"

import { Button } from "@/components/ui/button"
import { SiGoogle } from "react-icons/si"
import { authClient } from "@/lib/auth-client"
import { signInWithGoogle, signUpWithGoogle } from '@/actions/authAction';

interface GoogleButtonProps {
  className?: string
  showIcon?: boolean
  variant?: "default" | "outline" | "secondary" | "ghost" | "link"
  size?: "default" | "sm" | "lg" | "icon"
}

export function GoogleSignInButton({
  className,
  showIcon = true,
  variant = "outline",
  size = "default"
}: GoogleButtonProps) {
  return (
    <Button
      variant={variant}
      size={size}
      className={`flex items-center justify-center ${className}`}
      onClick={signInWithGoogle}
    >
      {showIcon && <SiGoogle className="mr-2 h-5 w-5" />}
      Sign in with Google
    </Button>
  )
}

export function GoogleSignUpButton({
  className,
  showIcon = true,
  variant = "outline",
  size = "default"
}: GoogleButtonProps) {
  return (
    <Button
      variant={variant}
      size={size}
      className={`flex items-center justify-center ${className}`}
      onClick={signUpWithGoogle}
    >
      {showIcon && <SiGoogle className="mr-2 h-5 w-5" />}
      Sign up with Google
    </Button>
  )
} 