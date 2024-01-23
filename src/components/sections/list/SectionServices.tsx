'use client';
import { sectionProps } from '../types';
import ServicesSlider from '../../swiper/ServicesSlider';

export default function SectionServices(props: sectionProps) {
	const Services = [
		{
			name: 'Venus Package',
			desc: 'Sit ullamco veniam mollit duis duis officia sint ad officia nostrud in ipsum. Adipisicing ad ipsum ea nostrud mollit eu laboris sint ad nulla.',
		},
		{
			name: 'Apollo Package',
			desc: 'Sit ullamco veniam mollit duis duis officia sint ad officia nostrud in ipsum. Adipisicing ad ipsum ea nostrud mollit eu laboris sint ad nulla.',
		},
		{
			name: 'The Sun Package',
			desc: 'Sit ullamco veniam mollit duis duis officia sint ad officia nostrud in ipsum. Adipisicing ad ipsum ea nostrud mollit eu laboris sint ad nulla.',
		},
		{
			name: 'The Sun Package',
			desc: 'Sit ullamco veniam mollit duis duis officia sint ad officia nostrud in ipsum. Adipisicing ad ipsum ea nostrud mollit eu laboris sint ad nulla.',
		},
		{
			name: 'The Sun Package',
			desc: 'Sit ullamco veniam mollit duis duis officia sint ad officia nostrud in ipsum. Adipisicing ad ipsum ea nostrud mollit eu laboris sint ad nulla.',
		},
	];
	return (
		<div
			id="section-service"
			className="flex flex-col justify-center content-center text-center"
		>
			<h1>{'Services'}</h1>
			<div className="flex flex-col justify-center px-7">
				<ServicesSlider data={Services} />
			</div>
		</div>
	);
}
