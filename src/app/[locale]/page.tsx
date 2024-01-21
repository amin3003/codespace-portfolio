import React from 'react';
import { Canvas } from '@react-three/fiber';
import { useBlock } from '@c/shared/Blocks';
import state from '@c/shared/Store';
import AllSections from '@/components/sections/AllSections';
import SidebarContent from '@/components/SidebarContent/SidebarContent';
import { useTranslations } from 'next-intl';

export default function PageIndex() {
	const { sections, pages } = state;
	const t = useTranslations('main');

	return (
		<>
			<AllSections titles={['', t('spaseservices'), t('spaseteam')]} />

			{Array(pages)
				.fill(0)
				.map((r, index) => {
					return (
						<div
							key={index}
							id={'page' + index}
							//use dvh to avoid resize when vh is changed on mobile
							style={{ height: `100lvh` }}
						/>
					);
				})}
		</>
	);
}
