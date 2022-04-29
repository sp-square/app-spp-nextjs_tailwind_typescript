import { useState, useEffect, FunctionComponent } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const NavItem: FunctionComponent<{
	activeItem: string;
	setActiveItem: Function;
	name: string;
	route: string;
}> = ({ activeItem, name, route, setActiveItem }) => {
	return activeItem !== name ? (
		<Link href={route}>
			<a>
				<span
					className="hover:text-gray-lePois font-Montserrat dark:hover:text-pink-lePois"
					onClick={() => setActiveItem(name)}
				>
					{name}
				</span>
			</a>
		</Link>
	) : null;
};

const Navbar = () => {
	const [activeItem, setActiveItem] = useState<string>('');

	const { pathname } = useRouter();

	useEffect(() => {
		if (pathname === '/') setActiveItem('About');
		if (pathname === '/portfolio') setActiveItem('Portfolio');
		if (pathname === '/resume') setActiveItem('Resume');
	}, [pathname]);

	return (
		<div className="flex justify-between px-5 py-3 my-3">
			<span className="text-xl font-bold border-b-2 font-Montserrat text-gray-lePois border-pink-lePois dark:text-blue-lePois">
				{activeItem}
			</span>
			<div className="flex space-x-5 text-lg">
				<NavItem
					activeItem={activeItem}
					setActiveItem={setActiveItem}
					name="About"
					route="/"
				/>
				<NavItem
					activeItem={activeItem}
					setActiveItem={setActiveItem}
					name="Portfolio"
					route="/portfolio"
				/>
				<NavItem
					activeItem={activeItem}
					setActiveItem={setActiveItem}
					name="Resume"
					route="/resume"
				/>
			</div>
		</div>
	);
};

export default Navbar;
