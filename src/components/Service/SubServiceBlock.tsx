import { Feature, SubService } from '@/data/Service';
import { capitalize } from '@azrico/string';
import Link from '@src/navigation';
import clsx from 'clsx';
import { useTranslations } from 'next-intl';
export default function SubServiceBlock(props: {
	index: number;
	subservice: SubService;
}) {
	const translate_service = useTranslations('service');

	const subservice = props.subservice;
	const subservice_style = {
		'--subservicecolor': subservice.color,
	} as React.CSSProperties;

	return (
		<div className="indicator" style={subservice_style}>
			<div
				className={clsx(
					`card card-compact rounded-none bg-base-200 `,
					`border-t-2 w-[220px] min-h-[430px] border-[--subservicecolor]`
				)}
			>
				<div className="card-body content-center flex">
					<div className="flex-1 flex flex-col gap-6">
						<div className="h-[150px] flex flex-col">
							<b className="card-title text-center justify-center">{subservice.title}</b>
							<p className="flex flex-1 flex-col gap-1 text-center py-3">
								<span>{capitalize(translate_service('starting from'))}</span>
								<b className="text-3xl">{subservice.price}</b>
							</p>
							<div className="divider"></div>
						</div>
						<ul className="gap-2 flex-1">
							{subservice.features.map((feature: Feature, i: number) => {
								return (
									<li key={i}>
										<i className="bi bi-check"></i>
										<b>{capitalize(translate_service(feature.title))}</b>
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
