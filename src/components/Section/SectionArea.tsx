import Image from 'next/image';

export default function SectionArea(props: {
	id?: string;
	children: any;
	image?: any;
	orientation?: 'vertical' | 'horizontal';
	title?: string | number;
	className?: string;
	center?: boolean;
	mirror?: boolean;
	width?: number;
	height?: number;
	imageClass?: any;
}) {
	const flexColClass = 'flex-col';
	const flexRowClass = 'flex-row';
	const isVertical = props.orientation === 'vertical'; 
	const forcedFlexClass =
		props.orientation == null ? '' : isVertical ? ` ${flexColClass}` : ` ${flexRowClass}`;
	return (
		<section
			id={props.id || undefined}
			className={
				'flex gap-8 ' +
				(props.className || '') +
				(props.center ? ' text-center' : '') +
				/* -------------------------- class for orientation ------------------------- */
				(forcedFlexClass || ` ${flexColClass}  md:${flexRowClass} text md:text-start`) +
				/* --------------------------- class for text size -------------------------- */
				''
			}
		>
			<div
				data-forcedFlexClass={forcedFlexClass}
				className={
					'flex  flex-[3] md:gap-6 ' +
					(forcedFlexClass || 'flex-col md:flex-row') +
					` ${props.mirror ? 'order-last' : 'order-first'}`
				}
			>
				<h1 className={'opacity-20 select-none my-0 md:my-0 md:text-center text-[300px]'}>
					{props.title}
				</h1>
				<div className={!isVertical ? 'md:ml-[-100px] md:mt-[150px]' : ''}>
					{props.children}
				</div>
			</div>
			<div
				className={`m-2 flex-[2] content-center justify-center hidden lg:flex ${props.imageClass} `}
			>
				{typeof props.image === 'string' ? (
					<figure>
						<Image
							src={`/images/${props.image}.webp`}
							width={props.width}
							height={props.height}
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
