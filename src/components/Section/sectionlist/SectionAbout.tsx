'use client';
import { sectionProps } from './types';
import React from 'react';
import AboutSlider from '../../swiper/AboutSlider';
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
			className="items-center min-h-[100lvh]"
		>
			<h2>About</h2>
			<div className="flex flex-col md:flex-row gap-4 justify-center items-center pb-48 md:pb-4">
				{team.map((r, i) => {
					return (
						<div key={i} className="flex glass card w-[300px] bg-base-100 ">
							<div className="card-body content-center justify-center ">
								<div className="avatar justify-center">
									<div className="w-24 rounded-full "></div>
								</div>
								<b className="card-title justify-center">{r.name}</b>
								<b className="flex justify-center text-primary">{r.position}</b>

								<p className="text-justify text-sm hidden md:flex">{r.desc}</p>
							</div>
						</div>
					);
				})}
			</div>
		</SectionArea>
	);
}
