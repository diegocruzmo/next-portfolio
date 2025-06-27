import { Resend } from "resend";
import { EmailTemplate } from "@/components/EmailTemplate";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const dataForm = await req.json();
    try {
      const data = await resend.emails.send({
        from: "Portfolio Diego Cruz <onboarding@resend.dev>",
        to: ["diegocruzska@gmail.com"],
        subject: "Portfolio Diego Cruz",
        react: EmailTemplate({
          name: dataForm.name,
          email: dataForm.email,
          message: dataForm.message,
        }),
        text: "Diego Cruz",
      });

      return Response.json(data);
    } catch (error) {
      return Response.json({ error });
    }
  } catch (error) {
    return Response.json({ error });
  }
}
