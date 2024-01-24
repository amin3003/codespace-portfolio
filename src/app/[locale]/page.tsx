import React from 'react';
import state from '@c/shared/Store';
import SectionAbout from '@/components/sectionlist/SectionAbout';
import SectionSteps from '@/components/sectionlist/SectionSteps';
import SectionHome from '@/components/sectionlist/SectionHome';
import ThreeCanvas from '@c/Three/ThreeCanvas';
import StarPage from '@c/Three/StarPage';
import OrbitPage from '@c/Three/OrbitPage';
export default function PageIndex() {
	const { sections, pages } = state;
	const list_sections = [SectionHome, SectionSteps, SectionAbout];
	return (
		<>
			<ThreeCanvas>
				<OrbitPage />
				<StarPage />
			</ThreeCanvas>
			<div id="content-container" className="z-[10000]">
				{list_sections.map((SectionRender, index) => {
					return (
						//use dvh to avoid resize when vh is changed on mobile
						<section
							className="min-h-100lvh overflow-x-hidden"
							key={index}
							id={'page' + index}
						>
							{SectionRender != null && <SectionRender key={index} index={index} />}
						</section>
					);
				})}
			</div>
		</>
	);
}
