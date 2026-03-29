"use client"

import dynamic from "next/dynamic"

const LoginForm = dynamic(
  () => import("@/components/login-form").then((mod) => mod.LoginForm),
  {
    ssr: false,
    loading: () => <div className="min-h-[520px] rounded-xl border bg-card" />,
  }
)

export function LoginFormEntry() {
  return <LoginForm />
}
