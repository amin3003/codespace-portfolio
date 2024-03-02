import clsx from 'clsx';

export function GlassTextBehind(
	props: Partial<{
		id?: string;
		center: boolean;
		dynamicTitleSize: boolean;
		dynamicMargin: boolean;
		title: string;
		children: any;
	}>
) {
	return (
		<div id={props.id || undefined}>
			<h1
				className={clsx(
					'opacity-20 select-none !leading-none !m-0 !p-0',
					props.center && 'text-center',
					props.dynamicTitleSize ? 'text-[min(20vw,260px)]' : 'text-[260px]'
				)}
			>
				{props.title}
			</h1>
			<div
				className={
					props.title != null
						? clsx(
								props.dynamicMargin
									? 'mt-[-5vw] md:mt-[-100px] lg:mt-[-160px]'
									: 'mt-[-160px]'
						  )
						: ''
				}
			>
				{props.children}
			</div>
		</div>
	);
}
