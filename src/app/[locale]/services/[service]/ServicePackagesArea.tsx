import SectionArea from '@/components/Section/SectionArea';
import Service from '@/data/Service';
import SubServiceBlock from '@/components/Service/SubServiceBlock';
import Link from '@/navigation';
export default function ServicePackagesArea(props: { currentService: Service }) {
	const currentService = props.currentService;

	return (
		<SectionArea
			id="packages"
			center
			orientation="vertical"
			className="flex flex-wrap min-h-lvh justify-between"
		>
			<h2 className="text-center">Packages</h2>
			<div className={`flex flex-wrap justify-center gap-8`}>
				{currentService.subservices.map((r, i) => {
					return <SubServiceBlock index={i} key={i} subservice={r} />;
				})}
			</div>
			<div className="flex flex-col gap-7 max-w-fit mx-auto py-7">
				<button className="btn btn-primary">Contact us</button>
				<Link href={'/services'} className="link link-hover">
					View other services
				</Link>
			</div>
		</SectionArea>
	);
}
