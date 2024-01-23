import React from 'react';
import { Canvas } from '@react-three/fiber';
import { useBlock } from '@c/shared/Blocks';
import state from '@c/shared/Store';
import HtmlSections from '@/components/sections/HtmlSections';
import ThreeSections from '@/components/sections/ThreeSections';
import SidebarContent from '@/components/SidebarContent/SidebarContent';
import { useTranslations } from 'next-intl';

export default function PageIndex() {
	const { sections, pages } = state;

	return (
		<>
			<HtmlSections />
			<ThreeSections />
		</>
	);
}
