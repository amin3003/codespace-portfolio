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
import { array_first } from '@azrico/object';

/**
 * Page for each service
 * render service details based on currentServiceName parameter
 * @param props
 * @returns
 */
export default function PageService(props: any) {
	const currentServiceName = props.params.service;
	const currentService = Service.get_single(currentServiceName);
	const translate_path = useTranslations('path');

	//service not found. return null
	if (!currentService) return null;
	const service_style = { '--servicecolor': currentService.color } as React.CSSProperties;

	return (
		<>
			<ThreeCanvas>
				<StarPage />
				<OrbitPage />
			</ThreeCanvas>
			<PathBreadcrumbs absolute />
			<div className="px-[4%]" style={service_style}>
				{/* main page */}
				<SectionArea center className="min-h-lvh pt-24">
					<div className="flex flex-col">
						<h3 className="m-0">
							{capitalize(translate_path(String(currentService.url)))}
						</h3>
						<h3 className="m-0">Marketing software</h3>
						<p>{currentService.long_desc}</p>
					</div>
				</SectionArea>
				<div className="min-h-lvh">
					{/* solution page */}
					<h3 className="m-0 text-center">{currentService.solution_header}</h3>
					<SectionArea mirror className="py-24" image={<div>test</div>}>
						<div className="flex flex-col">
							<h4 className="">{currentService.solution_title}</h4>
							{currentService.solution_texts.map((r, i) => (
								<p className="opacity-90" key={i}>
									{r}
								</p>
							))}
						</div>
					</SectionArea>
					{/* popular features */}
					<h3 className="m-0 text-center">Popular Features</h3>
					<div className="flex flex-row justify-center gap-4 p-4">
						{currentService.popular_features.map((r, i) => {
							return (
								<div key={i} className="card glass flex-1 max-w-[400px]">
									<div className="card-body flex">
										<b className="card-title">{r.title}</b>
										<p className="">{r.text}</p>
									</div>
								</div>
							);
						})}
					</div>
				</div>
				{/* packages */}
				<SectionArea
					center
					orientation="vertical"
					className="flex flex-wrap min-h-lvh justify-between"
				>
					<h2 className="text-center">Packages</h2>
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
