import { NextPage } from 'next';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Head from 'next/head';
import ProjectCard from '../components/ProjectCard';
import CategoryNavbar from '../components/CategoryNavbar';
import { projects } from '../data';
import { Category } from '../type';
import { fadeInUp, stagger, fadeInOut } from '../animations';

const Portfolio: NextPage = () => {
	const [selectedProjects, setSelectedProjects] = useState(projects);
	const [activeCategory, setActiveCategory] = useState('All');
	const [showDetail, setShowDetail] = useState<Number | null>(null);

	const filterByCategory = (category: Category | 'All') => {
		if (category === 'All') {
			setSelectedProjects(projects);
			setActiveCategory(category);
			return;
		}

		const filteredProjects = projects.filter((project) =>
			project.categories.includes(category)
		);
		setSelectedProjects(filteredProjects);
		setActiveCategory(category);
	};

	return (
		<>
			<Head>
				<title>Sandrine Poissonnet - Portfolio</title>
			</Head>
			<motion.div
				className="mb-5"
				variants={fadeInOut}
				initial="initial"
				animate="final"
				exit="exit"
			>
				<CategoryNavbar
					filterByCategory={filterByCategory}
					activeCategory={activeCategory}
				/>
				<div
					className="px-5 py-2 my-auto overflow-y-scroll"
					style={{ height: '80vh' }}
				>
					{/* Filtered Project Cards */}
					<motion.div
						className="relative grid grid-cols-12 gap-4 my-3"
						variants={stagger}
						initial="initial"
						animate="final"
					>
						{selectedProjects.map((project, idx) => (
							<motion.div
								className="col-span-12 p-2 bg-gray-200 rounded-lg md:col-span-6 dark:bg-dark-200"
								key={idx}
								variants={fadeInUp}
							>
								<ProjectCard
									project={project}
									showDetail={showDetail}
									setShowDetail={setShowDetail}
								/>
							</motion.div>
						))}
					</motion.div>
				</div>
			</motion.div>
		</>
	);
};

export default Portfolio;
