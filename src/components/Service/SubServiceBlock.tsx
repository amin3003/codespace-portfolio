import Service, { SubService } from '@/data/Service';
import Feature from '@/data/Feature';
import { capitalize } from '@azrico/string';
import Link from '@src/navigation';
import clsx from 'clsx';
import { useLocale, useTranslations } from 'next-intl';
export default function SubServiceBlock(props: {
	index: number;
	service: Service;
	subservice: SubService;
}) {
	const locale = useLocale();

	const translate_service = useTranslations('service');

	const service = props.service;
	const subservice = props.subservice;
	/* -------------------------------------------------------------------------- */
	const subservice_style = {
		'--subservicecolor': subservice.color,
	} as React.CSSProperties;

	const allFeatures = subservice.all_features;

	return (
		<div className="indicator w-full h-full" style={subservice_style}>
			<div
				className={clsx(
					`card card-compact rounded-none bg-base-200 `,
					`border-t-2 w-full h-full border-[--subservicecolor]`
				)}
			>
				<div className="card-body content-center flex">
					<div className="flex-1 flex flex-col gap-6">
						<div className="h-[150px] flex flex-col">
							<b className="card-title text-center justify-center">{subservice.title}</b>
							<p className="flex flex-1 flex-col gap-1 text-center py-3">
								<span>{capitalize(translate_service('starting from'))}</span>

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
										<b>{feature.title}</b>
									</li>
								);
							})}
						</ul>
						<Link
							href={'/services'}
							className="link link-hover text-center justify-center text-primary"
						>
							Contact us
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}
