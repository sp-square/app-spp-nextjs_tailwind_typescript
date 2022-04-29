import Bar from './Bar';
import { languages, frameworks } from '../data';

const TechnicalSkills = () => {
	return (
		<div className="grid md:gap-6 md:grid-cols-2">
			<div>
				<h5 className="my-1 text-xl font-semibold font-Montserrat">
					Programming Languages
				</h5>
				<div className="my-2">
					{languages.map((language) => (
						<Bar key={language.name} data={language} />
					))}
				</div>
			</div>
			<div>
				<h5 className="my-1 text-xl font-semibold font-Montserrat">
					Frameworks &amp; Libraries
				</h5>
				<div className="my-2">
					{frameworks.map((tool) => (
						<Bar key={tool.name} data={tool} />
					))}
				</div>
			</div>
		</div>
	);
};

export default TechnicalSkills;
