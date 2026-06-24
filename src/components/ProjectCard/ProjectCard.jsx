import Image from "next/image";
import Link from "next/link";
import { GoArrowUpRight } from 'react-icons/go';
import styles from "./style.module.css";

const ProjectCard = ({
	id,
	image,
	title,
	fullDescription,
	ctaLabel,
	ctaHref,
}) => {
	return (
		<article className={styles['project-card']}>
			<div className={styles['project-card__media']}>
				<figure className={styles['project-card__device']}>
					{image ? (
						<Image
							src={image}
							alt={title ?? ''}
							fill
							className={`
								${styles['project-card__image']}
								${id === '02' ? styles.secondImage : ''}
								${id === '03' ? styles.thirdImage : ''}
							`}
							sizes="(max-width: 1024px) 100vw, 900px"
						/>
					) : (
						<div
							className={
								styles['project-card__image-placeholder']
							}
							aria-hidden="true"
						>
							<div
								className={
									styles['project-card__placeholder-screen']
								}
							/>
							<div
								className={
									styles['project-card__placeholder-stand']
								}
							/>
						</div>
					)}
				</figure>
			</div>
			<div className={styles['project-card__content']}>
				{title && (
					<h3 className={styles['project-card__title']}>{title}</h3>
				)}
				{fullDescription && (
					<p className={styles['project-card__description']}>
						{fullDescription}
					</p>
				)}
				{ctaLabel && ctaHref ? (
					<Link
						href={ctaHref}
						className={styles['project-card__cta']}
						target="_blank"
						rel="noopener noreferrer"
					>
						{ctaLabel}
						<GoArrowUpRight />
					</Link>
				) : null}
			</div>
		</article>
	);
};

export default ProjectCard;
