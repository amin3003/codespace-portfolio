import 'swiper/css';
import SectionArea from '@/components/Section/SectionArea';
import ThreeCanvas from '@/components/Three/ThreeCanvas'; 
import StarPage from '@/components/Three/StarPage';
import Service from '@/data/Service';
import ServiceBlock from '@/components/Service/ServiceBlock';
export default function PageServices() {
	const services = Service.get_list();
	const title = <p className="text-[19vw] text-center">Services</p>;
	return (
		<>
			<ThreeCanvas>
				<StarPage />
			</ThreeCanvas>
			<div className="px-[3%]">
				<SectionArea title={title} orientation="vertical" className="min-h-lvh">
					<div className="flex flex-wrap justify-center gap-6">
						{services.map((r, i) => {
							return <ServiceBlock service={r} key={i} />;
						})}
					</div>
				</SectionArea>
			</div>
		</>
	);
}
