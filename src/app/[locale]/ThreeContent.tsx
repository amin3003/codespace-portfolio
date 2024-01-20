import React from 'react';
import { Canvas } from '@react-three/fiber';
import { useBlock } from '@c/shared/Blocks';
import state from '@c/shared/Store';
import SidebarContent from '@c/SidebarContent/SidebarContent';

const SectionHome = React.lazy(() => import('@c/sections/SectionHome'));
const SectionServices = React.lazy(() => import('@c/sections/SectionServices'));
const SectionAbout = React.lazy(() => import('@c/sections/SectionAbout'));

export default function Content() {
	const block = useBlock();
	const sections = [SectionHome, SectionServices, SectionAbout];

	return (
		<>
			{sections.map((SectionRender, index) => {
				return <SectionRender key={index} index={index} block={block} />;
			})}
		</>
	);
}
