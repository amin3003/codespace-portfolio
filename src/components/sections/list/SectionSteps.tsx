'use client';
import { sectionProps } from '../types';
import ServicesSlider from '../../swiper/ServicesSlider';

export default function SectionSteps(props: sectionProps) {
	return (
		<div id="section-service" className="flex flex-col p-7">
			<StepSection index={1}>
				<h3>Use our services</h3>
				<h4>Fly your bussiness to the moon</h4>
			</StepSection>
			<StepSection index={2}>
				<h3>Website design and developement</h3>
				<h4>Fly your bussiness to the moon</h4>
			</StepSection>
			<StepSection index={3}>
				<h3>social Media management</h3>
				<h4>Fly your bussiness to the moon</h4>
			</StepSection>
			<StepSection index={4}>
				<h3>Support</h3>
				<h4>Fly your bussiness to the moon</h4>
			</StepSection>
		</div>
	);
}
function StepSection(props: { children: any; index?: number }) {
	return (
		<div className="relative h-[80lvh]">
			<h1 className="absolute top-1 left-1 m-0 opacity-40 text-[100px] ">
				{props.index || 1}
			</h1>
			<div className="py-12 px-24"> {props.children}</div>
		</div>
	);
}
