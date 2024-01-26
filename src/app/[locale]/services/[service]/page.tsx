import 'swiper/css';
import SectionArea from '@/components/Section/SectionArea';
import PathBreadcrumbs from '@/components/PathBreadcrumbs/PathBreadcrumbs';
import { capitalize } from '@azrico/string';

/**
 * Page for each service
 * render service details based on currentSerice parameter
 * @param props
 * @returns
 */
export default function PageService(props: any) {
	const currentService = props.params.service;
	return (
		<div className="px-[10%]">
			<PathBreadcrumbs absolute />
			<SectionArea
				title={capitalize(String(currentService))}
				orientation="vertical"
				className="flex h-[130lvh] justify-between gap-2 flex-col"
			>
				aaa
			</SectionArea>
		</div>
	);
}
