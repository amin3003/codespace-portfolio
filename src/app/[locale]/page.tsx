import React from 'react';
import state from '@c/shared/Store';
import ThreeSections from '@/components/sectionlist/ThreeSections';
import SectionAbout from '@/components/sectionlist/SectionHome';
import SectionSteps from '@/components/sectionlist/SectionSteps';
import SectionHome from '@/components/sectionlist/SectionHome';

export default function PageIndex() {
	const { sections, pages } = state;
	const list_sections = [SectionHome, SectionSteps, SectionAbout, null, null];
	return (
		<>
			<div id="content-container" className="z-[10000]">
				{list_sections.map((SectionRender, index) => {
					return (
						//use dvh to avoid resize when vh is changed on mobile
						<section className="min-h-100lvh" key={index} id={'page' + index}>
							{SectionRender != null && <SectionRender key={index} index={index} />}
						</section>
					);
				})}
			</div>
		</>
	);
}
