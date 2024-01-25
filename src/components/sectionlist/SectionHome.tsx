import { sectionProps } from './types';
import React from 'react';
import MockupSite from '@c/MockupSite/MockupSite';

export default function SectionHome(props: sectionProps) {
	return (
		<div id="section-home" className="flex flex-col p-4 h-lvh">
			<div className="flex flex-row items-center justify-center p-1 gap-12">
				<div className="flex flex-col p-1 text-center">
					<h2 className="my-0 leading-tight md:leading-snug lg:leading-relaxed md:my-12">
						Crafting standout <span className="text-primary">Websites</span> and
						<br /> mastering <span className="text-primary">social media</span> for
						businesses
					</h2>
					<h4>we bring your brand to life online, making every click count</h4>
				</div>
				<div className="hidden md:block">
					<MockupSite />
				</div>
			</div>

			<a className="btn btn-ghost mx-auto flex flex-row gap-6" href="#section-skills">
				<i className="bi bi-arrow-down"></i>
			</a>
		</div>
	);
}
