import Service from '@/data/Service';
import Link from '@src/navigation';
export default function ServiceBlock(props: { service: Service }) {
	const r = props.service;

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
					<div className="divider"></div>
					<ul className="py-2 flex-1">
						{r.features.map((feature, i: number) => {
							return (
								<li key={i}>
									<i className="bi bi-check">{feature.title}</i>
								</li>
							);
						})}
					</ul>

					<Link scroll={false} href={`services/${r.url}`}>
						<div className="card-actions justify-center">
							<button className="btn btn-ghost text-secondary">Learn more</button>
						</div>
					</Link>
				</div>
			</div>
		</div>
	);
}
