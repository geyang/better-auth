"use client"

import { Button } from "@/components/ui/button"
import { SiGithub } from "react-icons/si"
import { signInWithGitHub, signUpWithGitHub } from '@/actions/authAction';

interface GitHubButtonProps {
  className?: string
  showIcon?: boolean
  variant?: "default" | "outline" | "secondary" | "ghost" | "link"
  size?: "default" | "sm" | "lg" | "icon"
}

export function GitHubSignInButton({
  className,
  showIcon = true,
  variant = "outline",
  size = "default"
}: GitHubButtonProps) {
  return (
    <Button
      variant={variant}
      size={size}
      className={`flex items-center justify-center ${className}`}
      onClick={signInWithGitHub}
    >
      {showIcon && <SiGithub className="mr-2 h-5 w-5" />}
      Sign in with GitHub
    </Button>
  )
}

export function GitHubSignUpButton({
  className,
  showIcon = true,
  variant = "outline",
  size = "default"
}: GitHubButtonProps) {
  return (
    <Button
      variant={variant}
      size={size}
      className={`flex items-center justify-center ${className}`}
      onClick={signUpWithGitHub}
    >
      {showIcon && <SiGithub className="mr-2 h-5 w-5" />}
      Sign up with GitHub
    </Button>
  )
} 