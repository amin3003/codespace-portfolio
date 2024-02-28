import Image from "next/image";
import clsx from "clsx";
import { GlassTextBehind } from '../shared/GlassTextBehind';

export default function SectionArea(props: {
	id?: string;
	children: any;
	image?: any;
	orientation?: 'vertical' | 'horizontal';
	title?: any;
	className?: string;
	center?: boolean;
	dynamicMargin?: boolean;
	dynamicTitleSize?: boolean;
	mirror?: boolean;
	width?: number;
	height?: number;
	imageClass?: any;
	widthMain?: any;
}) {
	const isAuto = props.orientation == null;
	const isVertical = props.orientation === 'vertical';

	const forcedFlexClass =
		props.orientation == null ? '' : isVertical ? ` flex-col` : ` flex-row`;

	return (
		<section id={props.id || undefined} className={clsx('hero', props.className)}>
			<div
				className={clsx('hero-content h-full flex-col relative', 'lg:gap-8 lg:flex-row')}
			>
				<div className="flex-[5] z-20">
					<GlassTextBehind {...props}>{props.children}</GlassTextBehind>
				</div>
				<div
					className={clsx(
						`${props.mirror ? 'lg:order-first' : 'lg:order-last'}`,
						'flex-[3] p-5 opacity-30 lg:opacity-100 ',
						'absolute h-full max-w-[400px] right-[15px] z-10',
						'hidden md:flex lg:static'
					)}
				>
					{typeof props.image === 'string' ? (
						<figure className="m-auto">
							<Image
								src={`/images/${props.image}.webp`}
								width={props.width || 256}
								height={props.height || props.width || 256}
								alt={props.image}
							/>
						</figure>
					) : props.image != null ? (
						props.image
					) : null}
				</div>
			</div>
		</section>
	);
	return (
		<section
			className={
				'flex gap-8 ' +
				(props.className || '') +
				/* -------------------------- class for orientation ------------------------- */
				(forcedFlexClass || ` flex-col md:flex-row text md:text-start`) +
				/* --------------------------- class for text size -------------------------- */
				''
			}
		>
			<div className={clsx('flex-[3] flex flex-col w-full')}></div>
			<div></div>
		</section>
	);
}
