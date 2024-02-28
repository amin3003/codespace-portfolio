import Service from '@/data/Service';
import SubServiceBlock from '@/components/Service/SubServiceBlock';
import SwiperLayout from '@/components/Sliders/SwiperLayout';
import { useTranslations } from 'next-intl';
import SubServiceModal from '@/components/Service/SubServiceModal';
import { capitalize } from '@azrico/string';
export default function ServicePackagesArea(props: { currentService: Service }) {
	const currentService = props.currentService;

	const translate_shared = useTranslations('service.shared');

	return (
		<section
			id="packages"
			className="flex flex-col flex-wrap min-h-lvh justify-center align-middle pb-32"
		>
			<h2 className="text-center">{capitalize(translate_shared('packages'))}</h2>

			<SwiperLayout
				className={'pt-8'}
				content={currentService.subservices.map((r, i) => {
					return (
						<SubServiceBlock index={i} key={i} service={currentService} subservice={r} />
					);
				})}
			/>
			<SubServiceModal currentService={currentService} />
		</section>
	);
}
