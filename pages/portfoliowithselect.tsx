import { Combobox } from '@headlessui/react';
import { NextPage } from 'next';
import { useState } from 'react';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data';

const projectTypes = [
	'All',
	'Blog',
	'Business Website',
	'Personal Website',
	'Data Visualization',
	'Template',
];

const Portfolio: NextPage = () => {
	const [selectedProjectType, setSelectedProjectType] = useState<string>(
		projectTypes[0]
	);
	const [queryProjectType, setQueryProjectType] = useState<string>('');

	const filteredProjectTypes =
		queryProjectType === ''
			? projectTypes
			: projectTypes.filter((projectType) =>
					projectType.toLowerCase().includes(queryProjectType.toLowerCase())
			  );

	return (
		<div
			className="px-5 py-2 my-auto overflow-y-scroll"
			style={{ height: '80vh' }}
		>
			{/* Combobox for project types */}
			<div className="">
				<Combobox value={selectedProjectType} onChange={setSelectedProjectType}>
					<Combobox.Input
						onChange={(event) => setQueryProjectType(event.target.value)}
					/>
					<Combobox.Options>
						{filteredProjectTypes.map((filteredProjectType) => (
							<Combobox.Option
								key={filteredProjectType}
								value={filteredProjectType}
							>
								{filteredProjectType}
							</Combobox.Option>
						))}
					</Combobox.Options>
				</Combobox>
			</div>

			{/* Filtered Project Cards */}
			<div className="relative grid grid-cols-12 gap-4 my-3">
				{projects.map((project, idx) => (
					<div
						className="col-span-12 p-2 bg-gray-200 rounded-lg md:col-span-6 dark:bg-dark-200"
						key={idx}
					>
						<ProjectCard project={project} />
					</div>
				))}
			</div>
		</div>
	);
};

export default Portfolio;
