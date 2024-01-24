import { sectionProps } from './types';
import React from 'react';
import MockupSite from '@c/MockupSite/MockupSite';

export default function SectionHome(props: sectionProps) {
	return (
		<div id="section-home" className="flex flex-col p-4 h-lvh">
			<div className="flex flex-row items-center justify-center p-4 gap-12">
				<div className="flex flex-col p-8">
					<h1>Code spase</h1>
					<span>Bussiness soultion. grow your bussiness to the moon</span>
					<span> grow your bussiness to the moon</span>
				</div>
				<div>
					<MockupSite />
				</div>
			</div>

			<a className="btn btn-ghost mx-auto flex flex-row gap-6" href="#steps">
				<i className="bi bi-arrow-down"></i>
			</a>
		</div>
	);
}
