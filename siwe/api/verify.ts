import { IronSessionData, getIronSession } from "iron-session";
import { SiweMessage } from "siwe";

import { SERVER_SESSION_SETTINGS } from "@/lib/session";

export async function POST(req: Request) {
  try {
    const res = new Response(JSON.stringify({ ok: true }));
    const session = await getIronSession<IronSessionData>(
      req,
      res,
      SERVER_SESSION_SETTINGS
    );
    const { message, signature } = await req.json();
    const siweMessage = new SiweMessage(message);
    const fields = await siweMessage.verify(signature);
    if (fields.data.nonce !== session.nonce)
      return new Response(JSON.stringify({ message: "Invalid nonce." }), {
        status: 422,
      });
    session.siwe = fields.data;

    await session.save();

    return res;
  } catch (e) {
    const errorMessage = e instanceof Error ? e.message : String(e);
    console.error(errorMessage);
    return new Response(JSON.stringify({ ok: false }));
  }
}
