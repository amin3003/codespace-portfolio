import 'swiper/css';
import SectionArea from '@/components/Section/SectionArea';
import PathBreadcrumbs from '@/components/PathBreadcrumbs/PathBreadcrumbs';
import { capitalize } from '@azrico/string';
import Service from '@/data/Service';
import { useTranslations } from 'next-intl';
import ThreeCanvas from '@/components/Three/ThreeCanvas';
import StarPage from '@/components/Three/StarPage';
import OrbitPage from '@/components/Three/OrbitPage';
import SubServiceBlock from '@/components/Service/SubServiceBlock';

/**
 * Page for each service
 * render service details based on currentSerice parameter
 * @param props
 * @returns
 */
export default function PageService(props: any) {
	const currentServiceName = props.params.service;
	const currentService = Service.get_single(currentServiceName);
	const translate_path = useTranslations('path');

	if (!currentService) return null;

	return (
		<>
			<ThreeCanvas>
				<StarPage />
				<OrbitPage />
			</ThreeCanvas>
			<div className="px-[4%]">
				<SectionArea
					title={capitalize(translate_path(String(currentService.url)))}
					orientation="vertical"
					className="flex min-h-lvh justify-between gap-2 flex-col"
				>
					<div className="flex flex-col">
						<h3>Marketing software</h3>
						<p>{currentService.long_desc}</p>
					</div>
				</SectionArea>
				<SectionArea
					title={'Packages'}
					orientation="vertical"
					className="flex min-h-lvh justify-between flex-col"
				>
					<div className={`flex flex-wrap justify-center gap-2`}>
						{currentService.subservices.map((r, i) => {
							return <SubServiceBlock index={i} key={i} subservice={r} />;
						})}
					</div>
				</SectionArea>
			</div>
		</>
	);
}
