import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: process.env.GMAIL_SMTP_USER,
    pass: process.env.GMAIL_SMTP_PASSWORD,
  },
});

export default async function sendContactEmail({ name, email, messenger, message }) {
	const mailOptions = {
		from: `"${name}" <${process.env.GMAIL_SMTP_USER}>`,
		to: process.env.CONTACT_RECIPIENT ?? process.env.GMAIL_SMTP_USER,
		subject: 'Новая заявка с контактной формы (next-portfolio)',
		text: [
			`Имя: ${name}`,
			`Email: ${email}`,
			`Telegram / WhatsApp: ${messenger || 'не указано'}`,
			'',
			`Сообщение:`,
			message,
		].join('\n'),
		html: `
			<table style="width:100%;max-width:520px;font-family:Arial,sans-serif;border-collapse:collapse;">
				<tr>
					<td style="padding:16px 20px;background-color:#02141a;color:#d7f2eb;border-bottom:1px solid rgba(255,255,255,0.08);">
						<h2 style="margin:0;font-size:20px;">Новая заявка с сайта</h2>
					</td>
				</tr>
				<tr>
					<td style="padding:20px;background-color:#031d24;color:#f1f9f6;">
						<p style="margin:0 0 12px;"><strong>Имя:</strong> ${name}</p>
						<p style="margin:0 0 12px;"><strong>Email:</strong> ${email}</p>
						<p style="margin:0 0 20px;"><strong>Telegram / WhatsApp:</strong> ${
							messenger || 'не указано'
						}</p>
						<div style="padding:16px;background:rgba(0,0,0,0.25);border-radius:12px;">
							<p style="margin:0;white-space:pre-line;">${message}</p>
						</div>
					</td>
				</tr>
			</table>
		`,
	};

	const info = await transporter.sendMail(mailOptions);
	console.log(info);
}
