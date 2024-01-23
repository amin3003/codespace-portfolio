import React from 'react';
import SectionAbout from './SectionAbout';
import SectionServices from './SectionServices';
import SectionHome from './SectionHome';

// const SectionHome = React.lazy(() => import('@c/sections/SectionHome'));
// const SectionServices = React.lazy(() => import('@c/sections/SectionServices'));

export default function HtmlSections(props: any) {
	const sections = [SectionHome, SectionServices, SectionAbout];
	return sections.map((SectionRender, index) => {
		return (
			<div
				key={index}
				id={'page' + index}
				//use dvh to avoid resize when vh is changed on mobile
				style={{ height: `100lvh` }}
			>
				<SectionRender key={index} index={index} />
			</div>
		);
	});
}
