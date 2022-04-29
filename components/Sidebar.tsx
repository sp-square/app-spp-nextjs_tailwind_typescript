import { useTheme } from 'next-themes';
import {
	AiFillGithub,
	AiFillLinkedin,
	AiOutlineDownload,
} from 'react-icons/ai';
import { GoLocation } from 'react-icons/go';

import Image from 'next/image';

const Sidebar = () => {
	const { theme, setTheme } = useTheme();

	const toggleTheme = () => {
		setTheme(theme === 'light' ? 'dark' : 'light');
	};

	return (
		<div className="my-3 font-Montserrat">
			<Image
				src="/images/profilePic.png"
				alt="Profile Picture"
				className="mx-auto rounded-full"
				height={128}
				width={128}
				quality="100"
			/>
			<h3 className="my-4 text-4xl font-bold tracking-wider font-BilboSwashCaps text-gray-lePois dark:text-blue-lePois">
				Sandrine Poissonnet
			</h3>
			<p className="px-2 py-1 my-3">Web Developer | ML Engineer</p>

			{/* Social icons */}
			<div className="flex justify-around w-9/12 mx-auto mt-8 mb-5 text-gray-lePois md:w-full">
				<a href="https://github.com/PetitsPoissons" className="cursor-pointer">
					<AiFillGithub className="w-8 h-8" />
				</a>

				<a
					href="https://www.linkedin.com/in/sandrinepoissonnet"
					className="cursor-pointer"
				>
					<AiFillLinkedin className="w-8 h-8" />
				</a>

				<a href="https://www.vegrum.com" className="cursor-pointer">
					<Image
						src="/images/vegrum-logo-earth.png"
						alt="Logo for VEGRUM"
						className="w-10 h-10"
						height={36}
						width={36}
						quality="100"
					/>
				</a>
			</div>

			{/* Address */}
			<div
				className="py-4 my-5 bg-gray-100 dark:bg-dark-200"
				style={{ marginLeft: '-1rem', marginRight: '-1rem' }}
			>
				<div className="flex items-center justify-center space-x-2">
					<GoLocation />
					<span>Los Angeles, California, USA</span>
				</div>
				<p className="my-2">spoisson@gmail.com</p>
				<p className="my-2">(+1) 310.351.2676</p>
			</div>

			{/* Buttons */}
			<button
				className="w-8/12 px-5 py-2 my-2 text-white rounded-full bg-gradient-to-r from-gray-lePois to-blue-lePois focus:outline-none"
				onClick={() => window.open('mailto:spoisson@gmail.com')}
			>
				Email me
			</button>

			<a
				className="flex items-center justify-center w-8/12 px-5 py-2 mx-auto my-2 text-white rounded-full bg-gradient-to-b from-blue-lePois to-green-awardCeremony focus:outline-none"
				href="/docs/resume.pdf"
				download="resume.pdf"
			>
				<AiOutlineDownload className="w-6 h-6 mr-2" />
				Resume
			</a>

			<button
				className="w-8/12 px-5 py-2 my-2 text-white rounded-full bg-gradient-to-l from-green-awardCeremony to-green-lePois"
				onClick={toggleTheme}
			>
				Toggle Theme
			</button>
		</div>
	);
};

export default Sidebar;
