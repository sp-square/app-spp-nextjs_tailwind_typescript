export const fadeInUp = {
	initial: {
		opacity: 0,
		y: 60,
	},
	final: {
		opacity: 1,
		y: 0,
	},
};

export const stagger = {
	initial: {},
	final: {
		transition: {
			staggerChildren: 0.1,
		},
	},
};

export const fadeInOut = {
	initial: {
		opacity: 0,
	},
	final: {
		opacity: 1,
		transition: {
			delay: 0.1,
			duration: 0.1,
		},
	},
	exit: {
		opacity: 0,
		transition: {
			delay: 0.1,
			ease: 'easeInOut',
		},
	},
};
