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
import { useLocale } from 'next-intl';

export default function ServiceMainArea(props: { currentService: Service }) {
	const currentService = props.currentService;

	const translate_service = useTranslations('service.' + currentService.getID());

	return (
		<SectionArea center className="min-h-lvh pt-12">
			<div className="flex flex-col gap-2">
				<h3 className="m-0">{translate_service('title')}</h3>
				<AccodionArea currentService={currentService} />
			</div>
		</SectionArea>
	);
}
function AccodionArea(props: { currentService: Service }) {
	const currentService = props.currentService;
	const locale = useLocale();

	const translate_service = useTranslations('service.' + currentService.getID());
	const translate_feature = useTranslations('service.feature');
	const translate_shared = useTranslations('service.shared');

	return (
		<>
			<div className="collapse bg-base-200 glass">
				<input type="radio" name="service-accodion" defaultChecked />
				<div className="collapse-title text-xl font-medium">
					{translate_shared('description')}
				</div>
				<div className="collapse-content">
					{wrap_array(currentService.long_desc).map((r, i) => (
						<p key={i} className="flex flex-row gap-2">
							{r}
						</p>
					))}
				</div>
			</div>
			<div className="collapse bg-base-200 glass">
				<input type="radio" name="service-accodion" />
				<div className="collapse-title text-xl font-medium">
					{translate_shared('pricing-overview')}
				</div>
				<div className="collapse-content">
					<ul role="list" className="marker:text-primary list-disc pl-4">
						{currentService.subservices.map((r, i) => {
							return (
								<li key={i}>
									<div className="flex-row flex">
										<b className="w-32">{translate_service('title')}</b>
										<p>{Service.getPrice(r.price, locale)}</p>
									</div>
								</li>
							);
						})}
					</ul>
					<a href="#packages">
						<p className="flex flex-row gap-2 p-4">
							{translate_shared('see-packages')}
							<i className="bi bi-arrow-right-circle-fill" />
						</p>
					</a>
				</div>
			</div>
			<div className="collapse bg-base-200 glass">
				<input type="radio" name="service-accodion" />
				<div className="collapse-title text-xl font-medium">
					{translate_shared('features')}
				</div>
				<div className="collapse-content">
					<ul role="list" className="marker:text-primary list-disc pl-4">
						{currentService.features.map((r, i) => {
							return <li key={i}>{translate_service(String(r))}</li>;
						})}
					</ul>
				</div>
			</div>
		</>
	);
}
