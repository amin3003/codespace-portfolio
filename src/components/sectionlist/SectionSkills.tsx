import { sectionProps } from './types';
import React from 'react';
import MockupSite from '@c/MockupSite/MockupSite';

const skillsList = [
	{ text: 'Website Design' },
	{ text: 'Website Development' },
	{ text: 'Media Management' },
	{ text: 'SEO' },
	{ text: 'Content Marketing' },
];
export default function SectionSkills(props: sectionProps) {
	const colorVariants = [
		'shadow-[pink]',
		'shadow-[orange]',
		'shadow-[purple]',
		'shadow-[cyan]',
		'shadow-[green]',
	];
	return (
		<div id="section-skills" className="flex flex-col p-4 min-h-lvh">
			<div className="flex flex-row items-center justify-center p-4 gap-12">
				<div className="flex flex-col p-8 text-center">
					<h2>Your spase station</h2>
					<h4>
						all the skills you need to take your business to spase. in one spase station
					</h4>
				</div>
			</div>
			<div className={`flex flex-wrap justify-center gap-9`}>
				{skillsList.map((r, i) => {
					return (
						<div
							key={i}
							className={
								`card w-32 md:w-44 aspect-square bg-base-100 align-middle justify-center text-center` +
								` ${colorVariants[i]} shadow-sm ` +
								` p-1 md:p-7`
							}
						>
							<h4 className="text-center">{r.text}</h4>
						</div>
					);
				})}
			</div>
		</div>
	);
}
