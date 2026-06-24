import Image from 'next/image';
import style from './style.module.css';
import Link from 'next/link';

const PortfolioCard = ({id, title, description, image }) => {
	return (
		<article className={style.card}>
			<Link
				href={`/portfolio/${id}`}
				className={style.card__link}
				aria-label="Подробнее о проекте"
			></Link>
			<figure className={style['card__image-wrapper']}>
				<Image
					src={image}
					fill
					alt={title}
					sizes="(max-width: 768px) 100vw, 50vw"
					quality={100}
					className={`
						${style['card__image']}
						${id === '02' ? style.secondCard : ''}
						${id === '03' ? style.thirdImage : ''}
						${id === '04' ? style.fourthImage : ''}
					`}
				/>
			</figure>
			<h3 className={style.card__title}>{title}</h3>
			<p className={style.card__description}>{description}</p>
		</article>
	);
};

export default PortfolioCard;
