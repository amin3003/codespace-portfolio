import 'swiper/css';
import SectionArea from '@/components/Section/SectionArea';
import ThreeCanvas from '@/components/Three/ThreeCanvas'; 
import StarPage from '@/components/Three/StarPage';
import ServiceList from '@/components/Service/ServiceList'; 
import PathBreadcrumbs from '@/components/PathBreadcrumbs/PathBreadcrumbs';

const services = [
	{
		url: 'webdesign',
		title: 'Web design',
		features: ['AdobeXD File', 'Responsive design'],
		desc: 'we design your responsive website',
	},
	{
		url: 'webdev',
		title: 'Web developement',
		features: ['SEO Standard'],
		desc: 'we develop a responsive website for your bussiness',
	},
	{
		url: 'startup',
		best: true,
		title: 'Startup Package',
		features: ['AdobeXD Design', 'Dark and light theme', '4 Pages static website'],
		desc: 'All in one package. let us handle all your needs',
	},
	{
		url: 'media',
		title: 'Media management',
		features: ['Instagram', 'Facebook', 'Discord'],
		desc: 'we manage your social networks to increase your visibility',
	},
];
export default function PageServices() {
	return (
		<div className="px-[10%]">
			<ThreeCanvas>
				<StarPage />
			</ThreeCanvas>
			<SectionArea bigtitle
				title="Services"
				orientation="vertical"
				className="flex h-[130lvh] justify-between gap-2 flex-col"
			>
				<ServiceList services={services} />
			</SectionArea>
		</div>
	);
}
