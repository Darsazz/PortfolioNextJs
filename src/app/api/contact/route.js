import { NextResponse } from 'next/server';
import sendContactEmail from '@lib/mail/sendContactEmail';
import sendContactTelegram from '@lib/telegram/sendContactTelegram';

export async function POST (request) {
	try{
		//Получение данных
		const body = await request.json();
		const { name, email, messenger, message } = body ?? {};

		//Проверка данных
		if (!name || !email || !message) {
		return NextResponse.json({
				success: false,
				message: 'Пожалуйста, заполните обязательные поля.',
			}, {
				status: 400
			});
		}

		// Отправка email и Telegram
		await Promise.all([
			sendContactEmail({ name, email, messenger, message }),
		 	sendContactTelegram({ name, email, messenger, message })
		])


		//Ответ
		return NextResponse.json({
			message: `Hello, ${name}! Your email is ${email}.`,
		});
	} catch (error){
		console.error('Contact form error:', error)
		return NextResponse.json(
			{
				success: false,
				message: "Не удалось отправить сообщение. Попробуйте позже."
			},
			{ status: 500 },
		)
	}


}


export async function GET(request) {
	const { searchParams } = new URL(request.url);

	const name = searchParams.get('name') || 'Guest';
	const age = searchParams.get('age') || 'unknown';

	return NextResponse.json({
		message: `Hello, ${name}! Your age is ${age}.`,
	});
}
