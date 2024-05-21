import { NextResponse } from "next/server";
import { generateNonce } from "siwe";

export async function GET(req: Request) {
  try {
    const nonce = generateNonce();
    return NextResponse.json(nonce, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "something went wrong!" });
  }
}
