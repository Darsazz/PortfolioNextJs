import ButtonMainPage from "../components/ButtonMainPage";


export const metadata = {
	title: 'Home',
	description:
		'Personal portfolio built with Next.js showcasing frontend projects',
	keywords: ['next.js', 'react', 'frontend developer', 'portfolio'],
};
export default function Home() {
	return (
		<section className="content">
			<h1>Изучаем Next JS</h1>
			<p>
				Next.js — это современный React-фреймворк, который позволяет
				создавать быстрые, масштабируемые и SEO-дружественные
				приложения.
			</p>
			<ButtonMainPage/>
		</section>
	);
}
