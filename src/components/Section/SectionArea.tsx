export default function SectionArea(props: {
	id?: string;
	children: any;
	orientation?: 'vertical' | 'horizontal';
	title?: string | number;
	className?: string;
	center?: boolean;
}) {
	return (
		<section
			id={props.id || undefined}
			className={
				'min-h-[90lvh] flex ' +
				(props.className || '') +
				(props.center ? ' text-center' : '') +
				/* -------------------------- class for orientation ------------------------- */
				(props.orientation == undefined
					? //large
					  ' md:flex-row md:text-start' +
					  //mobile
					  ' flex-col text-center'
					: props.orientation === 'vertical'
					? ' flex-col'
					: ' flex-row') +
				/* --------------------------- class for text size -------------------------- */
				//large
				(' md:text-[30px]' +
					//mobile
					' text-[20px]')
			}
		>
			<h1 className={'!m-0 opacity-40 select-none'}>{props.title || 1}</h1>
			<div className="px-[2%] h-[100lvh]"> {props.children}</div>
		</section>
	);
}
