import { NextResponse } from "next/server";
import { SiweMessage } from "siwe";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { statement, address } = body;

    const siweMessage = new SiweMessage(statement);
    const response = await siweMessage.verify(address);

    if (response.success) {
      console.log(response);
      return NextResponse.json(response, { status: 200 });
    }

    return NextResponse.json({ message: "something happend" });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "something went wrong!" });
  }
}
