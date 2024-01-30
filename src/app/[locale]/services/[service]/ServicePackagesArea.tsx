import SectionArea from '@/components/Section/SectionArea';
import Service from '@/data/Service';
import SubServiceBlock from '@/components/Service/SubServiceBlock';
import Link from '@/navigation';
import SwiperLayout from '@/components/Sliders/SwiperLayout';
export default function ServicePackagesArea(props: { currentService: Service }) {
	const currentService = props.currentService;

	return (
		<section
			id="packages"
			className="flex flex-wrap min-h-lvh justify-center align-middle"
		>
			<h2 className="text-center">Packages</h2>

			<SwiperLayout
				content={currentService.subservices.map((r, i) => {
					return (
						<SubServiceBlock index={i} key={i} service={currentService} subservice={r} />
					);
				})}
			/>
			<div className="flex flex-col gap-7 max-w-fit mx-auto py-7">
				<Link href={'/services'} className="link link-hover">
					View other services
				</Link>
			</div>
		</section>
	);
}
