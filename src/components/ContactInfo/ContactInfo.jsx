import styles from './style.module.css';

const ContactInfo = () => {
	return (
		<div className={styles['contact-page__info']}>
			<h2 className="section-title">Контакты</h2>

			<p>
				Свяжитесь со мной удобным способом. Я всегда открыт для новых
				проектов, сотрудничества и интересных предложений.
			</p>

			<ul className={styles['contact-page__info-list']}>

				<li className={styles['contact-page__info-item']}>
					<strong>Email</strong>
					<a href="https://mail.google.com/mail/?view=cm&fs=1&to=sazonovad79@gmail.com">
						sazonovad79@gmail.com
					</a>
				</li>


				<li className={styles['contact-page__info-item']}>
					<strong>Телефон</strong>
					<a href="tel:+77058152527">
						+7 (705) 815-25-27
					</a>
				</li>


				<li className={styles['contact-page__info-item']}>
					<strong>Telegram</strong>
					<a
						href="https://t.me/darsazz"
						target="_blank"
						rel="noopener noreferrer"
					>
						@darsazz
					</a>
				</li>


				<li className={styles['contact-page__info-item']}>
					<strong>GitHub</strong>
					<a
						href="https://github.com/darsazz"
						target="_blank"
						rel="noopener noreferrer"
					>
						github.com/darsazz
					</a>
				</li>

			</ul>
		</div>
	);
}

export default ContactInfo;
