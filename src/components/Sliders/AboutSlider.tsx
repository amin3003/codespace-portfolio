import SwiperLayout from './SwiperLayout';
import clsx from 'clsx';

export default function AboutSlider(props: { data: any[]; className?: string }) {
	return (
		<SwiperLayout
			className={props.className}
			content={props.data.map((r: any, index: any) => {
				return (
					<div key={index} className={clsx('flex card cad-compact border-2 bg-base-100')}>
						<div className="card-body content-center justify-center ">
							<div className="avatar justify-center">
								<div className="w-24 rounded-full "></div>
							</div>
							<h3 className="card-title justify-center">{r.name}</h3>

							<p className="flex justify-center text-secondary">{r.position}</p>

							<p className="flex text-justify text-sm">{r.desc}</p>
							<div className="card-actions justify-center"></div>
						</div>
					</div>
				);
			})}
		/>
	);
}
