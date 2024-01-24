'use client';
import SectionArea from '../Section/SectionArea';
import { sectionProps } from './types';

export default function SectionSteps(props: sectionProps) {
	return (
		<div id="steps" className="flex flex-col px-[10%]">
			<SectionArea title={1}>
				<h3>Use our services</h3>
				<p>Fly your bussiness to the moon</p>
			</SectionArea>
			<SectionArea title={2}>
				<h3>Website design and developement</h3>
				<p>we design your ideal website</p>
			</SectionArea>
			<SectionArea title={3}>
				<h3>Social Media management</h3>
				<p>Grow your bussiness in multiple platforms</p>
				<p>This helps your bussiness in many ways</p>
			</SectionArea>
			<SectionArea title={4}>
				<h3>Support</h3>
				<p>Fly your bussiness to the moon</p>
			</SectionArea>
		</div>
	);
}
