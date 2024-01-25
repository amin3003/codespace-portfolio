'use client';
import { sectionProps } from './types';
import React from 'react';
import AboutSlider from '../swiper/AboutSlider';
import SectionArea from '@/components/Section/SectionArea';
export default function SectionAbout(props: sectionProps) {
	const team = [
		{
			img: '',
			name: 'Ayhan',
			position: 'Back-end Developer',
			desc: 'It by the readable at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution',
			social: {
				gitHub: '',
				instagram: '',
				telegram: '',
			},
		},
		{
			img: '',
			name: 'Emin',
			position: 'Front-end Developer',
			desc: 'It by the readable at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution',
			social: {
				gitHub: '',
				instagram: '',
				telegram: '',
			},
		},
		{
			img: '',
			name: 'Reza',
			position: 'UI/UX Designer ',
			desc: 'It by the readable at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution',
			social: {
				gitHub: '',
				instagram: '',
				telegram: '',
			},
		},
	];
	return (
		<SectionArea
			id="section-about"
			title=""
			center
			orientation="vertical"
			className="min-h-[100lvh]"
		>
			<h2>About</h2>
			<AboutSlider data={team} />
		</SectionArea>
	);
}
