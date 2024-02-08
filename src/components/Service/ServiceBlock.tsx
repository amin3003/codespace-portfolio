import Service from "@/data/Service";
import Link from "@src/navigation";
import { string_truncate } from '@azrico/string';
import { useTranslations } from 'next-intl';

export default function ServiceBlock(props: { service: Service }) {
	const r = props.service;
	const translate_service = useTranslations('service.' + r.getID());
	const translate_feature = useTranslations('service.feature');
	const translate_shared = useTranslations('service.shared');
	const topFeatures = r.subservice_all_features.slice(0, 3);

	return (
		<div className="indicator h-full">
			{r.isBest && (
				<span className="indicator-item indicator-center badge badge-primary">
					{'Best Value'}
				</span>
			)}
			<div className="flex glass card w-[300px] md:w-[240px] h-full bg-base-100 ">
				<div className="card-body content-center py-3 px-0 flex">
					<h4 className="card-title text-center justify-center text-nowrap mb-4 px-5">
						{translate_service('title')}
					</h4>
					<ul className=" flex-1 px-5">
						<p className="text-[14px] w-max">{translate_shared('popularfeatures')} :</p>
						{topFeatures.map((feature, i: number) => {
							return (
								<li
									key={i}
									className="w-max flex text-[17px] items-center justify-center gap-2 my-3 mb-0"
								>
									<i className="bi bi-check-circle-fill" />
									{translate_feature(String(feature))}
								</li>
							);
						})}
					</ul>
					<div className="divider mx-3 my-0"></div>
					<p className="px-5 mt-0 text-[15px] text-justify">
						{string_truncate(translate_service('long_desc'), 100, true)}
					</p>
					<Link className="flex align-middle justify-center" href={`/${r.url}`}>
						<button className="btn btn-ghost text-secondary self-center">
							Learn more
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
}
