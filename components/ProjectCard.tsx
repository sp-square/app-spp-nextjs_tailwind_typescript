import { FunctionComponent, useState } from 'react';
import { motion } from 'framer-motion';
import { AiFillGithub, AiFillProject } from 'react-icons/ai';
import { MdClose } from 'react-icons/md';
import { IProject } from '../type';
import { fadeInUp, stagger } from '../animations';

import Image from 'next/image';

const ProjectCard: FunctionComponent<{
	project: IProject;
	showDetail: Number | null;
	setShowDetail: (id: Number | null) => void;
}> = ({
	project: {
		id,
		name,
		description,
		imagePath,
		deployedUrl,
		githubUrl,
		lastUpdated,
		cloud,
		type,
		technologies,
	},
	showDetail,
	setShowDetail,
}) => {
	return (
		<>
			<Image
				src={imagePath}
				alt={name}
				className="cursor-pointer"
				onClick={() => setShowDetail(id)}
				width="300"
				height="200"
				layout="responsive"
			/>
			<p className="my-2">{name}</p>
			{showDetail === id && (
				<div className="absolute top-0 left-0 z-10 grid w-full h-auto p-2 text-black bg-gray-100 rounded-lg md:p-10 md:grid-cols-2 gap-x-12 dark:text-white dark:bg-dark-100">
					<motion.div variants={stagger} initial="initial" animate="final">
						<motion.div
							variants={fadeInUp}
							className="border-2 dark:border-blue-lePois border-gray-lePois"
						>
							<Image
								src={imagePath}
								alt={name}
								width="300"
								height="200"
								layout="responsive"
							/>
						</motion.div>
						<motion.div
							className="flex justify-center space-x-3"
							variants={fadeInUp}
						>
							<a
								href={githubUrl}
								className="flex items-center px-4 py-2 space-x-3 text-lg bg-gray-200 dark:bg-dark-200"
							>
								<AiFillGithub />
								<span className="">GitHub</span>
							</a>
							<a
								href={deployedUrl}
								className="flex items-center px-4 py-2 space-x-3 text-lg bg-gray-200 dark:bg-dark-200"
							>
								<AiFillProject />
								<span className="">Project</span>
							</a>
						</motion.div>
					</motion.div>

					<motion.div variants={stagger} initial="initial" animate="final">
						<motion.h2
							className="mb-3 text-xl font-medium md:text-2xl"
							variants={fadeInUp}
						>
							{name}
						</motion.h2>
						<motion.h3 className="mb-3 font-medium" variants={fadeInUp}>
							{description}
						</motion.h3>
						<motion.div
							className="flex flex-wrap mt-5 space-x-2 text-sm tracking-wider"
							variants={fadeInUp}
						>
							{technologies.map((technology) => (
								<span
									key={technology}
									className="px-2 py-1 my-1 bg-gray-200 rounded-md dark:bg-dark-200"
								>
									{technology}
								</span>
							))}
						</motion.div>
					</motion.div>

					<button
						className="absolute p-1 bg-gray-200 rounded-full top-3 right-3 dark:bg-dark-200 focus:outline-none"
						onClick={() => setShowDetail(null)}
					>
						<MdClose size={30} />
					</button>
				</div>
			)}
		</>
	);
};

export default ProjectCard;
