import React from 'react';
import state from '@c/shared/Store';
import HtmlSections from '@/components/sections/HtmlSections';
import ThreeSections from '@/components/sections/ThreeSections';

export default function PageIndex() {
	const { sections, pages } = state;

	return (
		<>
			<ThreeSections /> 
			<HtmlSections />
		</>
	);
}
