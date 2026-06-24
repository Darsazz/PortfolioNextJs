"use client";
import { useParams, notFound } from 'next/navigation';
import portfolioData from '@data/portfolioData';
import ProjectCard from '@components/ProjectCard/ProjectCard';

const Project = () => {
	const { id } = useParams();
	const project = portfolioData.find((project) => project.id === id);

	if (!project) {
		notFound();
	}

	return (
		<section className="content">
			<ProjectCard {...project} />
		</section>
	);
};

export default Project;
