import sgMail from "@sendgrid/mail";
import { NextRequest, NextResponse } from "next/server";

const handler = (req: NextRequest, res: NextResponse) => {
	//@ts-ignore  pridej typ pro NextRequest
	const { email } = req.body;

	sgMail.setApiKey(process.env.NEXT_PUBLIC_SENDGRID_API_KEY ?? "");

	const msg = {
		to: email,
		from: "pavel.zaplet25@gmail.com", // Change to your verified sender
		subject: "Sending with SendGrid is Fun",
		text: "and easy to do anywhere, even with Node.js",
		html: "<strong>and easy to do anywhere, even with Node.js</strong>",
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
