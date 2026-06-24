'use client';
import { useState } from 'react';
import toast from 'react-hot-toast';

import Form from 'next/form';
import styles from './style.module.css';

const ContactForm = () => {
	const [status, setStatus] = useState({ type: 'idle', message: '' });

	// toast('Сообщение успешно отправлено!');
	// toast.success('Successfully created!');
	// toast.error('This is an error!');

	// Функция обработчик отправки формы
	const handleSubmit = async (event) => {
		event.preventDefault();
		setStatus({ type: 'loading', message: 'Отправляем сообщение...' });

		try {
			// Получаем данные из формы
			const form = event.currentTarget;
			const formData = new FormData(form);
			const payload = Object.fromEntries(formData.entries());

			// POST запрос на внутренний API
			const response = await fetch('/api/contact', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(payload),
			});

			if (!response.ok) {
				const errorData = await response.json().catch(() => null);
				throw new Error(
					errorData?.message ?? 'Не удалось отправить сообщение',
				);
			}

			// Ответ от API
			const data = await response.json();
			console.log(data);

			setStatus({
				type: 'success',
				message: 'Сообщение успешно отправлено!',
			});

			toast.success('Сообщение успешно отправлено!');
			form.reset();

			setTimeout(() => {
				setStatus({ type: 'idle', message: '' });
			}, 5000);
		} catch (error) {
			setStatus({
				type: 'error',
				message:
					error.message || 'Попробуйте отправить сообщение позже.',
			});

			toast.error('Попробуйте отправить сообщение позже.');

			setTimeout(() => {
				setStatus({ type: 'idle', message: '' });
			}, 5000);
		}
	};

	let statusClass = '';
	if (status.type === 'success') {
		statusClass = styles['contact-form__status--success'];
	} else if (status.type === 'error') {
		statusClass = styles['contact-form__status--error'];
	}

	return (
		<Form className={styles['contact-form']} onSubmit={handleSubmit}>
			<h3 className={styles['contact-form__title']}>Напишите мне</h3>

			{status.type !== 'idle' && (
				<p
					className={`${styles['contact-form__status']} ${statusClass}`}
				>
					{status.message}
				</p>
			)}

			<div className={styles['contact-form__group']}>
				<label
					className={styles['contact-form__label']}
					htmlFor="contact-name"
				>
					Имя
				</label>
				<input
					className={styles['contact-form__input']}
					type="text"
					id="contact-name"
					name="name"
					placeholder="Как к вам обращаться?"
					autoComplete="name"
					required
				/>
			</div>

			<div className={styles['contact-form__group']}>
				<label
					className={styles['contact-form__label']}
					htmlFor="contact-email"
				>
					E-mail
				</label>
				<input
					className={styles['contact-form__input']}
					type="email"
					id="contact-email"
					name="email"
					placeholder="you@example.com"
					autoComplete="email"
					required
				/>
			</div>

			<div className={styles['contact-form__group']}>
				<label
					className={styles['contact-form__label']}
					htmlFor="contact-messenger"
				>
					Telegram / WhatsApp
				</label>
				<input
					className={styles['contact-form__input']}
					type="text"
					id="contact-messenger"
					name="messenger"
					placeholder="@username или +7..."
					autoComplete="tel"
				/>
			</div>

			<div className={styles['contact-form__group']}>
				<label
					className={styles['contact-form__label']}
					htmlFor="contact-message"
				>
					Сообщение
				</label>
				<textarea
					className={styles['contact-form__textarea']}
					id="contact-message"
					name="message"
					placeholder="Расскажите о проекте, сроках и задачах"
					required
				/>
			</div>

			<div className={styles['contact-form__actions']}>
				<button
					type="reset"
					className={`${styles['contact-form__button']} ${styles['contact-form__button--reset']}`}
				>
					Сбросить
				</button>
				<button
					type="submit"
					disabled={status.type === 'loading'}
					className={`${styles['contact-form__button']} ${styles['contact-form__button--submit']}`}
				>
					{status.type === 'loading' ? 'Отправляем...' : 'Отправить'}
				</button>
			</div>
		</Form>
	);
};

export default ContactForm;
