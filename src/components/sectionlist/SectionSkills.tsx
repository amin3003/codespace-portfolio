import { sectionProps } from './types';
import React from 'react';
import MockupSite from '@c/MockupSite/MockupSite';

const skillsList = ['website dev', 'd', 'a', 'x', 'x'];
export default function SectionSkills(props: sectionProps) {
	return (
		<div id="section-skills" className="flex flex-col p-4 h-lvh">
			<div className="flex flex-row items-center justify-center p-4 gap-12">
				<div className="flex flex-col p-8 text-center">
					<h2>Your powerhouse.</h2>
					<h4>all the skills you need. in one place</h4>
				</div>
			</div>
			<div className="flex flex-row justify-center gap-9">
				{skillsList.map((r, i) => {
					return (
						<div key={i} className="card w-40 aspect-square bg-base-100 shadow-xl">
							<figure>
								<img
									src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
									alt="Shoes"
								/>
							</figure>
							<div className="card-body">
								<h2 className="card-title">Shoes!</h2>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
}
