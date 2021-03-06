import { IconType } from 'react-icons';

export interface IService {
	title: string;
	description: string;
	Icon: IconType;
}

export interface ISkill {
	name: string;
	shortDesc: string;
	level: string;
	Icon: IconType;
}

export interface IProject {
	id: Number;
	name: string;
	description: string;
	imagePath: string;
	deployedUrl: string;
	githubUrl: string;
	lastUpdated: string;
	cloud: Cloud[];
	type: Type[];
	categories: Category[];
	technologies: Technology[];
}

export type Cloud =
	| 'FatCow'
	| 'Firebase'
	| 'GitHub'
	| 'Heroku'
	| 'HostGator'
	| 'Sanity.io'
	| 'Vercel';

export type Category =
	| 'Python'
	| 'JS'
	| 'Frontend'
	| 'Full-Stack'
	| 'PWA'
	| 'Data Viz'
	| 'Other';

export type Type =
	| 'Backend'
	| 'Blog'
	| 'Business Website'
	| 'Dashboard'
	| 'Data Visualization'
	| 'Frontend'
	| 'Full-Stack'
	| 'Game'
	| 'Machine Learning'
	| 'Personal Website'
	| 'Progressive Web App'
	| 'Template'
	| 'Web Scraper';

export type Technology =
	| 'Bootstrap'
	| 'CSS'
	| 'D3.js'
	| 'Express'
	| 'Firebase'
	| 'Framer Motion'
	| 'GraphQL'
	| 'Heroku'
	| 'HTML'
	| 'JavaScript'
	| 'jQuery'
	| 'Leaflet.js'
	| 'Mailchimp'
	| 'Mapbox'
	| 'Materialize CSS'
	| 'Mongo'
	| 'MySQL'
	| 'Next.js'
	| 'Node'
	| 'PostgreSQL'
	| 'Python'
	| 'React'
	| 'Recoil'
	| 'Sanity.io'
	| 'Tailwind CSS'
	| 'TypeScript'
	| 'Vercel'
	| 'Webpack'
	| 'Weebly';
