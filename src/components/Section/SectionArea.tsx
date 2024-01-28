import Image from 'next/image';
import clsx from 'clsx';

export default function SectionArea(props: {
	id?: string;
	children: any;
	image?: any;
	orientation?: 'vertical' | 'horizontal';
	title?: any;
	className?: string;
	center?: boolean;
	dynamicMargin?: boolean;
	mirror?: boolean;
	width?: number;
	height?: number;
	imageClass?: any;
}) {
 
	const isAuto = props.orientation == null;
	const isVertical = props.orientation === 'vertical';

	const forcedFlexClass =
		props.orientation == null ? '' : isVertical ? ` flex-col` : ` flex-row`;
	return (
		<section
			id={props.id || undefined}
			className={
				'flex gap-8 ' +
				(props.className || '') +
				/* -------------------------- class for orientation ------------------------- */
				(forcedFlexClass || ` flex-col md:flex-row text md:text-start`) +
				/* --------------------------- class for text size -------------------------- */
				''
			}
		>
			<div
				className={clsx(
					'flex-[3] flex flex-col',
					`${props.mirror ? 'order-last' : 'order-first'}`
				)}
			>
				{props.title != null && (
					<h1
						className={clsx(
							'opacity-20 select-none !leading-none !m-0 !p-0 text-[260px]',
							props.center && 'text-center'
						)}
					>
						{props.title}
					</h1>
				)}

				<div
					className={
						props.title != null
							? clsx(
									props.dynamicMargin
										? 'mt-[-5vw] md:mt-[-100px] lg:mt-[-160px]'
										: 'mt-[-160px]',
									'md:pl-[50px]'
							  )
							: ''
					}
				>
					{props.children}
				</div>
			</div>
			<div
				className={clsx(
					'flex-[2] m-auto justify-center hidden md:flex',
					props.imageClass
				)}
			>
				{typeof props.image === 'string' ? (
					<figure>
						<Image
							src={`/images/${props.image}.webp`}
							width={props.width || 256}
							height={props.height || props.width || 256}
							alt="Image"
						/>
					</figure>
				) : props.image != null ? (
					props.image
				) : null}
			</div>
		</section>
	);
}
