import { IronSessionOptions } from "iron-session"
import type { SiweMessage } from "siwe"

declare module "iron-session" {
  interface IronSessionData {
    nonce: string
    siwe: SiweMessage
    isAdmin: boolean
  }
}

// This is the secret used to encrypt the session cookie
export const NEXTAUTH_SECRET = process.env.NEXTAUTH_SECRET

// See: /api/siwe/logout
export const SERVER_SESSION_SETTINGS: IronSessionOptions = {
  cookieName: "eth-wallet",
  password:
    process.env.NEXTAUTH_SECRET ?? "2888213817hsdhashdiqwhe12y8917298371jsdhakjhsdakw",
  cookieOptions: {
    secure: process.env.NODE_ENV == "production",
  },
}