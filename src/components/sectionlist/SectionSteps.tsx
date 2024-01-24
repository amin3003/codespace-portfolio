'use client';
import SectionArea from '../Section/SectionArea';
import { sectionProps } from './types';

export default function SectionSteps(props: sectionProps) {
	return (
		<div id="steps" className="flex flex-col px-[10%]">
			<SectionArea title={1}>
				<h3>Use our services</h3>
				<h4>Fly your bussiness to the moon</h4>
			</SectionArea>
			<SectionArea title={2}>
				<h3>Website design and developement</h3>
				<h4>we design your ideal website</h4>
			</SectionArea>
			<SectionArea title={3}>
				<h3>Social Media management</h3>
				<h4>Grow your bussiness in multiple platforms</h4>
				<h4>This helps your bussiness in many ways</h4>
			</SectionArea>
			<SectionArea title={4}>
				<h3>Support</h3>
				<h4>Fly your bussiness to the moon</h4>
			</SectionArea>
		</div>
	);
}
