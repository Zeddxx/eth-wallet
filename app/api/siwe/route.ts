import { NextResponse } from "next/server";
import { SiweMessage } from "siwe";

export async function POST(request: Request) {
  const body = await request.json();
  const { statement, address } = body;
  try {
    const siweMessage = new SiweMessage({
      address,
      statement,
      domain: 'localhost',
      uri: "https://localhost:3000/login",
      version: '1',
      chainId: 1
    });
    const result = siweMessage.prepareMessage();
    console.log(result);
    return NextResponse.json(result, { status: 200 });
  } catch (error) {
    console.log("Error", error);
    return NextResponse.json("Error", { status: 500 });
  }
}
