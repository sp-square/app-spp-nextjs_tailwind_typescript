import { IProject, IProjectTypeOption, IService, ISkill } from './type';
import { BsGraphUp, BsCircleFill } from 'react-icons/bs';
import { FaServer } from 'react-icons/fa';
import { GiSpiderWeb } from 'react-icons/gi';
import { RiComputerLine, RiDashboardFill } from 'react-icons/ri';
import { VscVariableGroup } from 'react-icons/vsc';

export const services: IService[] = [
	{
		title: 'Frontend Development',
		description:
			'Build scalable SPAs with <b>React.js</b> and <b>Next.js</b>, and styling using popular CSS frameworks such as <b>TailwindCSS</b>, <b>Styled-Components</b>, <b>Material-UI</b>, <b>Bootstrap</b> or custom styling.',
		Icon: RiComputerLine,
	},
	{
		title: 'Backend Development',
		description:
			'Handle database, server, APIs and CMS using <b>SQL</b>, <b>NoSQL</b>, <b>GraphQL</b>, <b>Firebase</b>, <b>Sanity</b>, <b>Express</b>, templating languages.',
		Icon: FaServer,
	},
	{
		title: 'Data Analysis',
		description:
			'Perform data cleaning, transformation, and modelling in <b>Jupyter Notebooks</b> using <b>Pandas</b> among other Python libraries, to discover useful information and support decision-making.',
		Icon: RiDashboardFill,
	},
	{
		title: 'Data Visualization',
		description:
			'Build dashboards and other graphical representations of information and data using <b>Tableau</b> and JavaScript libraries such as <b>D3.js</b>, <b>Plotly.js</b>, and <b>Leaflet.js</b>.',
		Icon: BsGraphUp,
	},
	{
		title: 'Web Crawling',
		description:
			'Perform data harvesting from the web using the web crawling framework <b>Scrapy</b>, the web-based automation tool <b>Selenium</b> and the Python library <b>Beautiful Soup</b>.',
		Icon: GiSpiderWeb,
	},
	{
		title: 'Machine Learning',
		description:
			'Build predictive and classification models with supervised and unsupervised learning methods using Python libraries including <b>Statsmodels</b>, <b>Scikit-learn</b>, and <b>TensorFlow</b>.',
		Icon: VscVariableGroup,
	},
];

export const languages: ISkill[] = [
	{
		Icon: BsCircleFill,
		name: 'Python',
		shortDesc:
			'Python is an interpreted, object-oriented, high-level programming language. It is a general-purpose language and can be used in a wide range of applications, including data science, software and web development, and automation.',
		level: '80%',
	},
	{
		Icon: BsCircleFill,
		name: 'JavaScript',
		shortDesc:
			'JavaScript is a lightweight, interpreted, or just-in-time compiled programming language that is used both on the client-side and server-side to make web pages interactive.',
		level: '90%',
	},
	{
		Icon: BsCircleFill,
		name: 'TypeScript',
		shortDesc:
			'TypeScript is a strongly typed programming language developed and maintained by Microsoft. It is a strict syntactical superset of JavaScript and adds optional static typing to the language.',
		level: '65%',
	},
	{
		Icon: BsCircleFill,
		name: 'SQL',
		shortDesc:
			'SQL is the standard programming language used to interface with relational databases. Relational databases model data as records in rows and tables with logical links between them.',
		level: '80%',
	},
	{
		Icon: BsCircleFill,
		name: 'GraphQL',
		shortDesc:
			'GraphQL is an open-source data query and manipulation language for APIs, and a runtime for fulfilling queries with existing data.',
		level: '70%',
	},
	{
		Icon: BsCircleFill,
		name: 'R',
		shortDesc:
			'R is a programming language for statistical computing and graphics that is generally used to clean, analyze, and graph data.',
		level: '50%',
	},
];

export const frameworks: ISkill[] = [
	{
		Icon: BsCircleFill,
		name: 'Next.js',
		shortDesc:
			'Next.js is an open-source web development framework built on top of Node.js enabling React based web applications functionalities such as server-side rendering and generating static websites.',
		level: '80%',
	},
	{
		Icon: BsCircleFill,
		name: 'React.js',
		shortDesc:
			'React is a declarative, efficient, and flexible JavaScript library for building user interfaces.',
		level: '90%',
	},
	{
		Icon: BsCircleFill,
		name: 'Redux.js',
		shortDesc:
			'Redux is an open-source JavaScript library for managing and centralizing application state.',
		level: '85%',
	},
	// {
	// 	Icon: BsCircleFill,
	// 	name: 'Recoil.js',
	// 	shortDesc: 'Recoil is a state management library for React.',
	// 	level: '85%',
	// },
	// {
	// 	Icon: BsCircleFill,
	// 	name: 'Webpack',
	// 	shortDesc:
	// 		'Webpack is a free and open-source module bundler for JavaScript. It is made primarily for JavaScript, but it can transform front-end assets such as HTML, CSS, and images if the corresponding loaders are included.',
	// 	level: '75%',
	// },
	{
		Icon: BsCircleFill,
		name: 'jQuery',
		shortDesc:
			'jQuery is a JavaScript library designed to simplify HTML DOM tree traversal and manipulation, as well as event handling, CSS animation, and Ajax.',
		level: '90%',
	},
	{
		Icon: BsCircleFill,
		name: 'Bootstrap',
		shortDesc:
			'Bootstrap is a free and open-source CSS framework directed at responsive, mobile-first front-end web development. It contains HTML, CSS and JavaScript-based design templates for typography, forms, buttons, navigation, and other interface components.',
		level: '90%',
	},
	// {
	// 	Icon: BsCircleFill,
	// 	name: 'Materialize CSS',
	// 	shortDesc:
	// 		'Materialize CSS is a UI component library which is created with CSS, JavaScript and HTML.',
	// 	level: '90%',
	// },
	{
		Icon: BsCircleFill,
		name: 'Tailwind CSS',
		shortDesc:
			'Tailwind CSS is basically a utility-first CSS framework for rapidly building custom user interfaces.',
		level: '90%',
	},
	{
		Icon: BsCircleFill,
		name: 'Apache Spark',
		shortDesc:
			'Apache Spark is a data processing framework that can quickly perform processing tasks on very large data sets, and can also distribute data processing tasks across multiple computers, either on its own or in tandem with other distributed computing tools.',
		level: '50%',
	},
	// {
	// 	Icon: BsCircleFill,
	// 	name: 'Selenium',
	// 	shortDesc: 'Selenium is an open-source web-based automation tool.',
	// 	level: '50%',
	// },
	{
		Icon: BsCircleFill,
		name: 'D3.js',
		shortDesc:
			'D3.js is a JavaScript library for producing dynamic, interactive data visualizations in web browsers.',
		level: '60%',
	},
	{
		Icon: BsCircleFill,
		name: 'Leaflet.js',
		shortDesc:
			'Leaflet is an open source JavaScript library used to build web mapping applications.',
		level: '60%',
	},
];

export const tools: ISkill[] = [
	{
		Icon: BsCircleFill,
		name: 'Constant Contact',
		shortDesc:
			'Constant Contact is an email marketing tool used to create email marketing templates, automate and manage campaigns, build contact lists, and nurture customer relationships.',
		level: '80%',
	},
	{
		Icon: BsCircleFill,
		name: 'Mailchimp',
		shortDesc:
			'Mailchimp is a marketing automation platform designed and developed for businesses using email to reach out to their target markets.',
		level: '80%',
	},
	{
		Icon: BsCircleFill,
		name: 'Photoshop',
		shortDesc:
			'Adobe Photoshop is a photo editing, image creation and graphic design software.',
		level: '50%',
	},
	{
		Icon: BsCircleFill,
		name: 'Tableau',
		shortDesc:
			'Tableau is a visual analytics engine that makes it easier to create interactive visual analytics in the form of dashboards.',
		level: '50%',
	},
];

export const platforms: ISkill[] = [
	{
		Icon: BsCircleFill,
		name: 'FatCow',
		shortDesc:
			'FatCow is a web hosting brand owned by Newfold Digital and was acquired in 2005. They offer a full spectrum of web hosting services from shared hosting to VPS servers to domains with unique branding.',
		level: '90%',
	},
	{
		Icon: BsCircleFill,
		name: 'Firebase',
		shortDesc:
			'Firebase is a Backend-as-a-Service (Baas). Firebase is categorized as a NoSQL database program, which stores data in JSON-like documents.',
		level: '70%',
	},
	{
		Icon: BsCircleFill,
		name: 'GitHub',
		shortDesc: 'GitHub is a Git repository hosting service',
		level: '90%',
	},
	{
		Icon: BsCircleFill,
		name: 'Heroku',
		shortDesc:
			'Heroku is a platform as a service (PaaS) that enables developers to build, run, and operate applications entirely in the cloud.',
		level: '90%',
	},
	{
		Icon: BsCircleFill,
		name: 'HostGator',
		shortDesc:
			'HostGator is a Houston-based provider of shared, reseller, virtual private server, and dedicated web hosting',
		level: '90%',
	},
	{
		Icon: BsCircleFill,
		name: 'Mapbox',
		shortDesc:
			'Mapbox is a mapping and location cloud platform for developers.',
		level: '70%',
	},
	{
		Icon: BsCircleFill,
		name: 'Sanity.io',
		shortDesc:
			'Sanity.io is a platform for structured content. It comes with an open-source editing environment called Sanity Studio and a real-time hosted data store.',
		level: '80%',
	},
	{
		Icon: BsCircleFill,
		name: 'Vercel',
		shortDesc:
			'Vercel is a platform for frontend frameworks and static sites, built to integrate with your headless content, commerce, or database.',
		level: '85%',
	},
	{
		Icon: BsCircleFill,
		name: 'Weebly',
		shortDesc:
			'Weebly is an easy-to-use online platform for building websites.',
		level: '95%',
	},
];

export const projects: IProject[] = [
	{
		name: 'VEGRUM',
		description:
			'Moderated blog app to write and read about plant-based lifestyle and its impact on current environmental issues. Vegrum also includes a recipe finder and a restaurant finder',
		imagePath: '/images/projects/vegrum-logo-full-color.png',
		deployedUrl: 'https://vegrum.com',
		githubUrl: 'Private',
		lastUpdated: 'April 2022',
		cloud: ['GitHub', 'Sanity.io', 'Vercel'],
		type: ['Blog', 'Full-Stack'],
		categories: ['JS', 'Full-Stack'],
		technologies: [
			'CSS',
			'HTML',
			'JavaScript',
			'Next.js',
			'Node',
			'React',
			'Sanity.io',
			'Tailwind CSS',
			'TypeScript',
			'Vercel',
		],
	},
	{
		name: 'CouCouGram',
		description: 'Private Instagram-like app for friends and family.',
		imagePath: '/images/projects/coucougram_logo-txt.png',
		deployedUrl: 'https://coucougram.com',
		githubUrl: 'Private',
		lastUpdated: 'April 2022',
		cloud: ['Firebase', 'GitHub', 'Vercel'],
		type: ['Blog', 'Full-Stack', 'Progressive Web App'],
		categories: ['JS', 'Full-Stack'],
		technologies: [
			'CSS',
			'Firebase',
			'HTML',
			'JavaScript',
			'Next.js',
			'Node',
			'React',
			'Recoil',
			'Tailwind CSS',
			'Vercel',
		],
	},
	{
		name: 'ideal3.com',
		description:
			'Website built for ideal3, an international specialty claims and risk management company.',
		imagePath: '/images/projects/screenshot-ideal3.png',
		deployedUrl: 'https://ideal3.com',
		githubUrl: 'Private',
		lastUpdated: 'March 2022',
		cloud: ['HostGator'],
		type: ['Business Website', 'Frontend'],
		categories: ['JS', 'Frontend'],
		technologies: ['CSS', 'Heroku', 'HTML', 'JavaScript', 'Node', 'Webpack'],
	},
	{
		name: 'drbwilliamson.com',
		description: 'Website built for a clinical psychology private practice.',
		imagePath: '/images/projects/screenshot-drbwilliamson.png',
		deployedUrl: 'https://drbwilliamson.com',
		githubUrl: 'None',
		lastUpdated: 'November 2021',
		cloud: ['FatCow'],
		type: ['Business Website', 'Frontend'],
		categories: ['Frontend'],
		technologies: ['Weebly'],
	},
	{
		name: 'Visualizing World Happiness',
		description:
			'Interactive choropleth map, charts, and data table built based on the 2019 World Happiness Report, a landmark survey of the state of global happiness produced by the United Nations Sustainable Development Solutions Network.',
		imagePath: '/images/projects/screenshot-world-happiness.png',
		deployedUrl: 'https://petitspoissons.github.io/world-happiness',
		githubUrl: 'https://github.com/PetitsPoissons/world-happiness',
		lastUpdated: 'July 2021',
		cloud: ['GitHub'],
		type: ['Frontend', 'Data Visualization'],
		categories: ['Data Viz', 'Frontend', 'Python', 'JS'],
		technologies: [
			'Bootstrap',
			'CSS',
			'D3.js',
			'HTML',
			'JavaScript',
			'Leaflet.js',
			'Mailchimp',
			'Mapbox',
			'Python',
		],
	},
];
