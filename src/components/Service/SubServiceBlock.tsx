import Service from '@/data/Service';
import SubService from '@/data/SubService';
import Feature from '@/data/Feature';
import { capitalize } from '@azrico/string';
import Link from '@src/navigation';
import clsx from 'clsx';
import { useLocale, useTranslations } from 'next-intl';
/* -------------------------------------------------------------------------- */
export default function SubServiceBlock(props: {
	index: number;
	service: Service;
	subservice: SubService;
}) {
	const locale = useLocale();
	const { service, subservice } = props;

	const translate_service = useTranslations('service.' + service.getID());
	const translate_feature = useTranslations('service.feature');
	const translate_shared = useTranslations('service.shared');

	/* -------------------------------------------------------------------------- */
	const subservice_style = {
		'--subservicecolor': subservice.color,
	} as React.CSSProperties;

	const allFeatures = subservice.all_features;
	const sub_id = `reserve-${subservice.id}`;
	return (
		<div
			id={sub_id}
			className="indicator w-[300px] md:w-[240px] h-full"
			style={subservice_style}
		>
			<div
				className={clsx(
					`card card-compact rounded-none bg-base-200 `,
					`border-t-2 w-full h-full border-[--subservicecolor]`
				)}
			>
				<div className="card-body content-center flex">
					<div className="flex-1 flex flex-col gap-6">
						<div className="h-[150px] flex flex-col">
							<b className="card-title text-center justify-center">
								{translate_shared(subservice.title)}
							</b>
							<p className="flex flex-1 flex-col gap-1 text-center py-3">
								<span>{translate_shared('starting-from')}</span>

								<b className="text-3xl">{Service.getPrice(subservice.price, locale)}</b>
							</p>
							<div className="divider"></div>
						</div>
						<ul className="gap-2 flex-col flex flex-1">
							{allFeatures.map((feature: Feature, i: number) => {
								return (
									<li key={i} className="flex flex-row gap-2">
										{feature.isAvailable ? (
											<i className="bi bi-check text-green-400" />
										) : (
											<i className="bi bi-x text-red-500" />
										)}
										<b>{translate_feature(String(feature))}</b>
									</li>
								);
							})}
						</ul>
						<button
							data-subserviceid={subservice.id}
							id={`link-${subservice.id}`}
							className="link link-hover text-center justify-center text-primary"
						>
							{translate_shared('reserve')}
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}
