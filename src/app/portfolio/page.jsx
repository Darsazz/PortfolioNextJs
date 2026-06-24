import PortfolioCard from "@components/PortfolioCard/PortfolioCard";
import portfolioData from "@data/portfolioData";

const Portfolio = () => {

	console.log(portfolioData);

	return (
		<section className="content">
			<h2 className="section-title">Портфолио</h2>
			<p>
				Здесь представлены мои работы по frontend-разработке. Каждый
				проект отражает мой опыт в создании современных и удобных
				веб-приложений с использованием React и Next.js.
			</p>
			<div className="portfolio-grid">
				{portfolioData.map((item) => (
					<PortfolioCard key={item.id} {...item} />
				))}
			</div>
		</section>
	);
}

export default Portfolio;
