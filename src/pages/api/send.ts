export const prerender = false;

import type { APIRoute } from "astro";
import { Resend } from "resend";

const resend = new Resend(import.meta.env.RESEND_API_KEY);

export const POST: APIRoute = async ({ request }) => {
  try {
    const { email, asunto, mensaje } = await request.json();

    const send = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: [import.meta.env.EMAIL_TO],
      subject: `Nuevo mensaje: ${asunto}`,
      html: `
        <h2>Nuevo mensaje desde el Portafolio</h2>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Asunto:</strong> ${asunto}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${mensaje}</p>
      `,
    });

    return new Response(JSON.stringify({ message: send.data }), {
      status: 200,
    });
  } catch (error: any) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
    });
  }
};
