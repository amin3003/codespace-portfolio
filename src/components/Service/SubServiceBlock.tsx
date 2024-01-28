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
					`border-t-2 w-[230px] min-h-[330px] border-[--subservicecolor]`
				)}
			>
				<div className="card-body content-center flex">
					<div className="flex-1">
						<b className="card-title text-center justify-center">{subservice.title}</b>

						{subservice.price ? (
							<p className="flex flex-row gap-1 self-center justify-center">
								<span>{capitalize(translate_service('starting from'))}</span>
								<b>{subservice.price}</b>
							</p>
						) : (
							<p className="self-center text-center">Free</p>
						)}

						<div className="divider"></div>
						<ul className="pt-2 gap-2">
							{subservice.features.map((feature: Feature, i: number) => {
								return (
									<li key={i}>
										<i className="bi bi-check"></i>
										<b>{capitalize(translate_service(feature.title))}</b>
									</li>
								);
							})}
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
}
