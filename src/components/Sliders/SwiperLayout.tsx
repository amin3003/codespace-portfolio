'use client';
import { wrap_array } from '@azrico/object';
import clsx from 'clsx';
import React from 'react';

export default function SwiperLayout(props: { content: any; className?: string }) {
	return (
		<div
			className={clsx(
				'w-full flex gap-6 snap-x snap-proximity overflow-x-auto pb-14',

				props.className
			)}
		>
			<div className="snap-center shrink-0 w-1 sm:w-4 md:w-4" />
			{wrap_array(props.content).map((r: any, i: any) => {
				return (
					<div key={i} className="snap-center shrink-0">
						{r}
					</div>
				);
			})}
			<div className="snap-center shrink-0 w-1 sm:w-4 md:w-4" />
		</div>
	);
}
