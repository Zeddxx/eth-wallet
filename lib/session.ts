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
// It should be at least 32 characters long
export const NEXTAUTH_SECRET = process.env.NEXTAUTH_SECRET

// The httpOnly cookie option is not working so we are using
// a hack to remove the cookie from the browser
// See: /api/siwe/logout
export const SERVER_SESSION_SETTINGS: IronSessionOptions = {
  cookieName: "eth-wallet",
  password:
    process.env.NEXTAUTH_SECRET ?? "2888213817hsdhashdiqwhe12y8917298371jsdhakjhsdakw",
  cookieOptions: {
    secure: process.env.NODE_ENV == "production",
  },
}