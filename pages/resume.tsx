import { useEffect } from 'react';
import { useAnimation, motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { fadeInUp, fadeInOut } from '../animations';
import Head from 'next/head';
import Education from '../components/Education';
import Experience from '../components/Experience';
import TechnicalSkills from '../components/TechnicalSkills';

const Resume = () => {
	const controls = useAnimation();
	const [ref, inView] = useInView();

	useEffect(() => {
		if (inView) {
			controls.start('final');
		}
	}, [controls, inView]);

	return (
		<>
			<Head>
				<title>Sandrine Poissonnet - Resume</title>
			</Head>
			<motion.div
				className="mb-5"
				variants={fadeInOut}
				initial="initial"
				animate="final"
				exit="exit"
			>
				<div className="px-5 py-2 overflow-y-scroll" style={{ height: '80vh' }}>
					<motion.div
						className="my-5"
						variants={fadeInUp}
						initial="initial"
						animate="final"
					>
						<h4 className="my-3 text-2xl font-bold font-Montserrat">
							Experience
						</h4>
						<Experience />
					</motion.div>
					<hr className="my-4 border border-pink-lePois" />
					<motion.div
						ref={ref}
						className="pb-3"
						variants={fadeInUp}
						initial="initial"
						animate={controls}
					>
						<h4 className="my-3 text-2xl font-bold font-Montserrat">
							Education
						</h4>
						<Education />
					</motion.div>
					<hr className="my-4 border border-pink-lePois" />
					<div className="my-5">
						<h4 className="my-3 text-2xl font-bold font-Montserrat">
							Technical Skills
						</h4>
						<TechnicalSkills />
					</div>
				</div>
			</motion.div>
		</>
	);
};

export default Resume;
