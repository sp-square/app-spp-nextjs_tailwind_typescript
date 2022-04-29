import { ThemeProvider } from 'next-themes';
import '../styles/globals.css';
import { AnimatePresence } from 'framer-motion';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import { Router } from 'next/router';

function MyApp({ Component, pageProps, router }) {
	return (
		<ThemeProvider attribute="class">
			<div className="grid grid-cols-12 gap-6 px-5 my-10 lg:px-48 sm:px-20 md:px-32">
				<div className="col-span-12 p-4 text-center bg-white dark:bg-dark-500 xl:col-span-3 lg:col-span-4 rounded-2xl shadow-customLight dark:shadow-customDark">
					<Sidebar />
				</div>
				<div className="flex flex-col col-span-12 bg-white lg:col-span-8 xl:col-span-9 rounded-2xl dark:bg-dark-500 shadow-customLight dark:shadow-customDark">
					<Navbar />
					<AnimatePresence exitBeforeEnter>
						<Component {...pageProps} key={router.route} />
					</AnimatePresence>
				</div>
			</div>
		</ThemeProvider>
	);
}

export default MyApp;
