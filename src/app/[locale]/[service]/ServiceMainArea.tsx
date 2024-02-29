import SectionHero from '@/components/Section/SectionHero';
import Service from '@/data/Service';
import { useTranslations } from 'next-intl';
import { useLocale } from 'next-intl';

export default function ServiceMainArea(props: { currentService: Service }) {
	const currentService = props.currentService;

	const translate_service = useTranslations('service.' + currentService.getID());

	return (
		<div className="min-h-lvh pt-24 flex">
			<div className="max-w-[720px] flex flex-col gap-2">
				<h3 className="m-0">{translate_service('title')}</h3>
				<AccodionArea currentService={currentService} />
			</div>
			<div className="hidden md:flex"></div>
		</div>
	);
}
function AccodionArea(props: { currentService: Service }) {
	const currentService = props.currentService;
	const locale = useLocale();

	const translate_service = useTranslations('service.' + currentService.getID());
	const translate_feature = useTranslations('service.feature');
	const translate_shared = useTranslations('service.shared');
	const topFeatures = currentService.subservice_all_features.slice(0, 3);

	return (
		<>
			<div className="collapse bg-base-200 glass">
				<input type="radio" name="service-accodion" defaultChecked />
				<div className="collapse-title text-xl font-medium">
					{translate_shared('description')}
				</div>
				<div className="collapse-content">{translate_service('long_desc')}</div>
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
						{topFeatures.map((feat, i) => {
							return <li key={i}>{translate_feature(String(feat))}</li>;
						})}
					</ul>
				</div>
			</div>
		</>
	);
}
