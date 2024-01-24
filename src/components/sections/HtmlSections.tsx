import React from 'react';
import SectionAbout from './list/SectionAbout';
import SectionSteps from './list/SectionSteps';
import SectionHome from './list/SectionHome';

export default function HtmlSections(props: any) {
	const sections = [SectionHome, SectionSteps, SectionAbout, null, null];
	return (
		<div id="content-container" className="z-[10000]">
			{sections.map((SectionRender, index) => {
				return (
					//use dvh to avoid resize when vh is changed on mobile
					<section className="min-h-100lvh" key={index} id={'page' + index}>
						{SectionRender != null && <SectionRender key={index} index={index} />}
					</section>
				);
			})}
		</div>
	);
}
