import ServiceBlock from './ServiceBlock';

export default function ServiceList(props: { services: any[] }) {
	return (
		<div className="flex flex-col md:flex-row gap-4 justify-center">
			{props.services.map((r, i) => {
				return <ServiceBlock service={r} key={i} />;
			})}
		</div>
	);
}
