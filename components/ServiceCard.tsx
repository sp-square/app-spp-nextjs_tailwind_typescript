import { FunctionComponent } from 'react';
import { IService } from '../type';

const ServiceCard: FunctionComponent<{ service: IService }> = ({
	service: { Icon, description, title },
}) => {
	return (
		<div className="grid grid-flow-row-dense grid-cols-6">
			<div className="flex items-center justify-center">
				<Icon className="w-8 h-8" />
			</div>
			<div className="col-span-5 py-2">
				<h4 className="font-semibold font-Montserrat dark:text-pink-lePois">
					{title}
				</h4>
				<p
					className="py-1 lg:pr-2"
					dangerouslySetInnerHTML={{ __html: description }}
				/>
			</div>
		</div>
	);
};

export default ServiceCard;
