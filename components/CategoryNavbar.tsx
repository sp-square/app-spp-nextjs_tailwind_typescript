import { FunctionComponent } from 'react';
import { Category } from '../type';

export const NavItem: FunctionComponent<{
	value: Category | 'All';
	filterByCategory: Function;
	activeCategory: string;
}> = ({ value, filterByCategory, activeCategory }) => {
	let liClassName =
		'cursor-pointer hover:text-green-awardCeremony sm:text-sm  dark:hover:text-pink-lePois';
	if (activeCategory === value) {
		liClassName +=
			' text-green-awardCeremony font-semibold dark:text-pink-lePois';
	}
	return (
		<li className={liClassName} onClick={() => filterByCategory(value)}>
			{value}
		</li>
	);
};

const CategoryNavbar: FunctionComponent<{
	filterByCategory: Function;
	activeCategory: string;
}> = (props) => {
	return (
		<nav className="flex px-5 py-2 space-x-3 overflow-x-auto list-none">
			<NavItem value="All" {...props} />
			<NavItem value="Python" {...props} />
			<NavItem value="JS" {...props} />
			<NavItem value="Frontend" {...props} />
			<NavItem value="Full-Stack" {...props} />
			<NavItem value="PWA" {...props} />
			<NavItem value="Data Viz" {...props} />
			<NavItem value="Other" {...props} />
		</nav>
	);
};

export default CategoryNavbar;
