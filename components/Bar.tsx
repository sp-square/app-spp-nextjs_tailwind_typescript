import { FunctionComponent, useEffect } from 'react';
import { useAnimation, motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ISkill } from '../type';

const Bar: FunctionComponent<{
	data: ISkill;
}> = ({ data: { Icon, name, shortDesc, level } }) => {
	const controls = useAnimation();
	const [ref, inView] = useInView();

	useEffect(() => {
		if (inView) {
			controls.start('final');
		}
	}, [controls, inView]);

	const variants = {
		initial: {
			width: 0,
		},
		final: {
			width: level,
			transition: {
				duration: 0.4,
				type: 'spring',
				damping: 10,
				stiffness: 100,
			},
		},
	};

	return (
		<div className="my-2 text-white bg-gray-100 rounded-full dark:bg-dark-200">
			<motion.div
				ref={ref}
				className="flex items-center px-4 py-1 rounded-full bg-gradient-to-l to-blue-lePois from-green-awardCeremony"
				style={{ width: level }}
				variants={variants}
				initial="initial"
				animate={controls}
			>
				<Icon className="mr-3 " />
				{name}
			</motion.div>
		</div>
	);
};

export default Bar;
