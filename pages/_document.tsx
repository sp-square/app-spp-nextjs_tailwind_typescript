import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
	return (
		<Html lang="en">
			<Head>
				<meta
					name="description"
					content="Full-stack web developer and Machine Learning engineer's professional website"
				/>
				<meta
					name="keywords"
					content="Full-stack web developer, JavaScript, TypeScript, SQL, NoSQL, GraphQL, Python, Machine Learning, Data Science, Data Analysis, Data Visualization"
				/>
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
