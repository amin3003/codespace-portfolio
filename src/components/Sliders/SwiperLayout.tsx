'use client';
 
import { wrap_array } from '@azrico/object';
import clsx from 'clsx';

export default function SwiperLayout(props: { content: any; className?: string }) {
	return (
		<div className={clsx('snap-x snap-mandatory flex overflow-x-auto', 'gap-6 p-6')}>
			<div className="snap-center shrink-0" />
			{wrap_array(props.content).map((r: any, i: any) => {
				return (
					<div key={i} className="snap-center shrink-0 min-w-[200px]">
						{r}
					</div>
				);
			})}
			<div className="snap-center shrink-0" />
		</div>
	);
}
