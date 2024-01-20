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
		<div className="drawer">
			<input id="my-drawer" type="checkbox" className="drawer-toggle" />
			<div className="drawer-content flex flex-col">
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
			</div>
			<div className="md:hidden drawer-side z-[40000]">
				<label
					htmlFor="my-drawer"
					aria-label="close sidebar"
					className="drawer-overlay"
				></label>
				<SidebarContent />
			</div>
		</div>
	);
}
