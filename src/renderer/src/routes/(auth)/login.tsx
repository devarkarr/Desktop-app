import LoginPage from '@renderer/features/auth/login'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/(auth)/login')({
  component: LoginPage
})
