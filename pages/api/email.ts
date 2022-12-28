import sgMail from "@sendgrid/mail";
import { NextRequest, NextResponse } from "next/server";

const handler = (req: NextRequest, res: NextResponse) => {
	//@ts-ignore  pridej typ pro NextRequest
	const { email } = req.body;

	sgMail.setApiKey(process.env.NEXT_PUBLIC_SENDGRID_API_KEY ?? "");

	const msg = {
		to: email,
		from: "taborpisarky@gmail.com", // Change to your verified sender
		subject: "Sending with SendGrid is Fun",
		text: "and easy to do anywhere, even with Node.js",
		html: "<strong>and easy to do anywhere, even with Node.js</strong>",
		template_id: "d-8cab7a2e32be48cda3c3138c79d9c2a1",
	};

	sgMail
		.send(msg)
		.then(() => {
			console.log("Email sent");
		})
		.catch(error => {
			console.error(error);
		});
};

export default handler;
