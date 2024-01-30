import Service from '@/data/Service';
import Link from '@src/navigation';
export default function ServiceBlock(props: { service: Service }) {
	const r = props.service;

	const topFeatures = r.features.slice(0, 5);
	return (
		<div className="indicator">
			{r.isBest && (
				<span className="indicator-item indicator-center badge badge-primary">
					{'Best Value'}
				</span>
			)}

			<div className="flex glass card w-[270px] bg-base-100 ">
				<div className="card-body content-center flex">
					<b className="card-title text-center justify-center text-nowrap">{r.title}</b>
					<div className="divider p-0 m-0"></div>
					<ul className="py-1 px-4 flex-1 list-disc">
						{topFeatures.map((feature, i: number) => {
							return <li key={i}>{feature.title}</li>;
						})}
						<li>...</li>
					</ul>
					<Link className="flex align-middle justify-center" href={`services/${r.url}`}>
						<button className="btn btn-ghost text-secondary self-center">
							Learn more
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
}
