"use client"

import { HTMLAttributes } from "react"
import { useAccount, useSignMessage } from "wagmi"

import { useUser } from "@/lib/hooks/use-user"
import { siweLogin } from "../action/siwe-login"
import { cn } from "@/lib/utils/cn"
import Button from "@/components/ui/button"

interface ButtonSIWELoginProps extends HTMLAttributes<HTMLButtonElement> {
  label?: string
  disabled?: boolean
}
export const ButtonSIWELogin = ({
  className,
  label = "Sign-In With Ethereum",
  disabled,
  children,
  ...props
}: ButtonSIWELoginProps) => {
  const { mutateUser } = useUser()
  const { isPending, signMessageAsync } = useSignMessage()
  const { address, chain } = useAccount()

  const handleCreateMessage = async () => {
    try {
      if (!address || !chain?.id) return
      await siweLogin({ address, chainId: chain?.id, signMessageAsync })
      await mutateUser()
    } catch (error) {
      console.error(error)
    }
  }
  const classes = cn("relative", className)
  const labelClasses = cn({
    "opacity-0": isPending,
  })

  return (
    <Button
      variant="primary"
      className={classes}
      disabled={disabled}
      type="button"
      onClick={() => void handleCreateMessage()}
      {...props}
    >
      {isPending && (
        <span className="absolute left-1/2 top-1/2 inline-block h-5 w-5 -translate-x-1/2 -translate-y-1/2" />
      )}
      <span className={labelClasses}>{children || label || "Logout"}</span>
    </Button>
  )
}