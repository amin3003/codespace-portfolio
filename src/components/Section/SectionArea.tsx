export default function SectionArea(props: { children: any; title?: string | number }) {
	return (
		<section className="relative h-[80lvh]">
			<h1 className="absolute top-0 left-0 m-0 opacity-40 text-[200px] select-none">
				{props.title || 1}
			</h1>
			<div className="py-12 px-32"> {props.children}</div>
		</section>
	);
}
