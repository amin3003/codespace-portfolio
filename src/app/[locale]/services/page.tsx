import 'swiper/css';
import SectionArea from '@/components/Section/SectionArea';
import ThreeCanvas from '@/components/Three/ThreeCanvas'; 
import StarPage from '@/components/Three/StarPage';
import ServiceList from '@/components/Service/ServiceList';
import PathBreadcrumbs from '@/components/PathBreadcrumbs/PathBreadcrumbs';
import Service from '@/data/Service';
import ServiceBlock from '@/components/Service/ServiceBlock';
export default function PageServices() {
	const services = Service.get_list();
	return (
		<>
			<ThreeCanvas>
				<StarPage />
			</ThreeCanvas>
			<div className="px-[10%]">
				<SectionArea
					title="Services"
					orientation="vertical"
					className="flex h-[150lvh] justify-between gap-2 flex-col"
				>
					<div className="flex flex-col md:flex-row gap-4 justify-center">
						{services.map((r, i) => {
							return <ServiceBlock service={r} key={i} />;
						})}
					</div>
				</SectionArea>
			</div>
		</>
	);
}
