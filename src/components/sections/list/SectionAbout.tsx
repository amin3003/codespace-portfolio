'use client';
import { Text } from '@c/shared/Text';
import { math_lerp } from '@azrico/math';
import { Block, useBlock, BlockProperties } from '@c/shared/Blocks';
import { Html } from '@react-three/drei';
import { sectionProps } from '../types';
import React from 'react';
import AboutSlider from '../../swiper/AboutSlider';
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
		<div id="section-about" className="flex flex-col items-center justify-center h-lvh">
			<h1>About</h1>
			<div className="flex flex-col px-12">
				<AboutSlider data={team} />
			</div>
		</div>
	);
}
