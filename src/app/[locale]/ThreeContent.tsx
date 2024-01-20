'use client';
import React from 'react';
import { Canvas } from '@react-three/fiber';
import { useBlock } from '@c/shared/Blocks';
import state from '@c/shared/Store';
import SidebarContent from '@c/SidebarContent/SidebarContent';
import { func } from 'three/examples/jsm/nodes/Nodes.js';

const SectionHome = React.lazy(() => import('@c/sections/SectionHome'));
const SectionServices = React.lazy(() => import('@c/sections/SectionServices'));
const SectionAbout = React.lazy(() => import('@c/sections/SectionAbout'));

function LocalSections() {
	const block = useBlock();
	const sections = [SectionHome, SectionServices, SectionAbout];

	return sections.map((SectionRender, index) => {
		return <SectionRender key={index} index={index} block={block} />;
	});
}
export default function ThreeContent() {
	return (
		<>
			<div id="content-container" className="fixed top-0 bottom-0 left-0 right-0">
				<Canvas linear orthographic camera={{ zoom: state.zoom, position: [0, 0, 100] }}>
					<React.Suspense fallback={null}>
						<LocalSections />
					</React.Suspense>
				</Canvas>
			</div>
		</>
	);
}
