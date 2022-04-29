import { NextPage } from 'next';
import { motion } from 'framer-motion';
import Head from 'next/head';
import ServiceCard from '../components/ServiceCard';
import { services } from '../data';
import { fadeInOut, fadeInUp, stagger } from '../animations';

const About: NextPage = () => {
	return (
		<>
			<Head>
				<title>Sandrine Poissonnet</title>
			</Head>
			<motion.div
				className="flex flex-col flex-grow px-6 pt-1"
				variants={fadeInOut}
				initial="initial"
				animate="final"
				exit="exit"
			>
				<h5 className="my-3 font-medium">
					I am a web developer and ML engineer addicted to coding and looking to
					put my passion to meaningful use. I have a Ph.D. in Management
					Information Systems and earned certificates in full-stack web
					development, data analysis &#38; visualization and data science
					applied to real estate. A self-starter and cheerleader at heart, I
					bring strong statistical, problem-solving and team-building skills, as
					well as reliability and determination to see projects through
					completion. My other interests include real estate and financial
					investments, graphic and interior design, long-distance running,
					ashtanga yoga and scuba-diving.
				</h5>
				<div
					className="flex-grow p-4 mt-5 bg-gradient-to-br from-gray-lePois to-green-lePois dark:bg-gradient-to-b dark:from-dark-100 dark:to-gray-lePois rounded-b-2xl"
					style={{ marginLeft: '-1.5rem', marginRight: '-1.5rem' }}
				>
					<h6 className="pb-1 my-3 text-xl font-bold tracking-wide text-white font-Montserrat">
						Services Offered
					</h6>
					<motion.div
						className="grid gap-6 pb-2 lg:grid-cols-2"
						variants={stagger}
						initial="initial"
						animate="final"
					>
						{services.map((service, idx) => (
							<motion.div
								key={idx}
								className="bg-gray-200 rounded-lg dark:bg-dark-200"
								variants={fadeInUp}
							>
								<ServiceCard service={service} />
							</motion.div>
						))}
					</motion.div>
				</div>
			</motion.div>
		</>
	);
};

export default About;
