import Image from 'next/image';

const About = () => {
	return (
		<section className="content">
			<h2 className="section-title">Обо мне</h2>
			<p>
				Меня зовут Дарья, я фронтенд-разработчик, специализируюсь на
				создании современных и удобных веб-приложений с использованием
				React и Next.js. Постоянно совершенствую свои навыки, слежу за
				трендами в индустрии и стремлюсь создавать продукты, которые
				приносят пользу людям. Открыта для новых проектов и интересных
				задач.
			</p>
			
			<div className='about__img-wrapper'>
				<Image src="https://images.unsplash.com/photo-1619597455322-4fbbd820250a"
					fill
					alt="Image"
					priority
					sizes='(max-width:768px) 100vw, (max-width:1200px) 600px, 800px'
				/>
			</div>
		</section>
	);
};

export default About;
