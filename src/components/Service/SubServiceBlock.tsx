import { SubService } from '@/data/Service';
import Link from '@src/navigation';
export default function SubServiceBlock(props: {
	index: number;
	subservice: SubService;
}) {
	const r = props.subservice;

	const shadowVariants = [
		'border-red-300',
		'border-blue-300',
		'border-pink-300',
		'border-green-300',
	];
	return (
		<div className="indicator">
			<div
				className={`bg-base-100 flex border-t-4 w-[260px] ${shadowVariants[props.index]}`}
			>
				<div className="card-body content-center flex">
					<div className="flex-1">
						<b className="card-title text-center justify-center">{r.name}</b>
						<p className="text-center justify-center">{r.price}</p>
						<ul className="pt-2 gap-2">
							{r.features.map((feature: string, i: number) => {
								return (
									<li key={i}>
										<i className="bi bi-check"></i>
										<b>{feature}</b>
									</li>
								);
							})}
						</ul>
					</div>
					<div className="divider"></div>
				</div>
			</div>
		</div>
	);
}
