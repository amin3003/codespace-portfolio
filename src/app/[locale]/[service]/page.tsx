import SectionArea from '@/components/Section/SectionArea';
import PathBreadcrumbs from '@/components/PathBreadcrumbs/PathBreadcrumbs';
import { capitalize } from '@azrico/string';
import Service from '@/data/Service';
import { useTranslations } from 'next-intl';
import ThreeCanvas from '@/components/Three/ThreeCanvas';
import StarPage from '@/components/Three/StarPage';
import OrbitPage from '@/components/Three/OrbitPage';
import SubServiceBlock from '@/components/Service/SubServiceBlock';
import { array_first, wrap_array } from '@azrico/object';
import ServiceSolutionArea from './ServiceSolutionArea';
import ServicePackagesArea from './ServicePackagesArea';
import ServiceMainArea from './ServiceMainArea';

/**
 * Page for each service
 * render service details based on currentServiceName parameter
 * @param props
 * @returns
 */
export default function PageService(props: any) {
	const currentServiceName = props.params.service;
	const currentService = Service.get_single(currentServiceName);

	
	//service not found. return null
	if (!currentService) return null;
	const service_style = { '--servicecolor': currentService.color } as React.CSSProperties;
	return (
		<>
			<ThreeCanvas>
				<StarPage />
				<OrbitPage start={1} />
			</ThreeCanvas>
			<PathBreadcrumbs absolute />
			<div className="px-[5%] pt-12" style={service_style}>
				<ServiceMainArea currentService={currentService} />
				<ServiceSolutionArea currentService={currentService} />
				<ServicePackagesArea currentService={currentService} />
			</div>
		</>
	);
}
