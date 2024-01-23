import React from 'react';
import SectionAbout from './list/SectionAbout';
import SectionServices from './list/SectionServices';
import SectionHome from './list/SectionHome';
 
export default function HtmlSections(props: any) {
	const sections = [SectionHome, SectionServices, SectionAbout, null, null];
	return (
		<div id="content-container" className="z-[10000]">
			{sections.map((SectionRender, index) => {
				return (
					<section
						key={index}
						id={'page' + index}
						//use dvh to avoid resize when vh is changed on mobile
						style={{ height: `100lvh` }}
					>
						{SectionRender != null && <SectionRender key={index} index={index} />}
					</section>
				);
			})}
		</div>
	);
}
