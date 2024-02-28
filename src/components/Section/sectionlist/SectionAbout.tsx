import { sectionProps } from './types';
import React from 'react';
import AboutSlider from '../../Sliders/AboutSlider';
import SectionHero from '@/components/Section/SectionHero';
const team = [
	{
		img: '',
		name: 'Ayhan',
		position: 'Full-stack Developer',
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

export default function SectionAbout(props: sectionProps) {
	return <></>;
	return (
		<SectionHero
			id="section-about"
			center
			orientation="vertical"
			className="items-center min-h-lvh pt-20"
		>
			<h4 className="text-center">About us</h4>
			<AboutSlider data={team} />
		</SectionHero>
	);
}
