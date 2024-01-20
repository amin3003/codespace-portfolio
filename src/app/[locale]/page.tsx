import React from 'react';
import { Canvas } from '@react-three/fiber';
import { useBlock } from '@c/shared/Blocks';
import state from '@c/shared/Store';
import ThreeContent from './ThreeContent';
import SidebarContent from '@/components/SidebarContent/SidebarContent';

export default function PageIndex() {
	const { sections, pages } = state;

	return (
		<div className="drawer">
			<input id="my-drawer" type="checkbox" className="drawer-toggle" />
			<div className="drawer-content flex flex-col">
				<ThreeContent />

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
			<div className="drawer-side z-[40000]">
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
