'use client';
import React from 'react';
import { Canvas } from '@react-three/fiber';
import { useBlock } from '@c/shared/Blocks';
import state from '@c/shared/Store';
import ThreeContent from './ThreeContent';

export default function Index() {
	const { sections, pages } = state;

	return (
		<>
			<div id="content-container" className="fixed top-0 bottom-0 left-0 right-0">
				<Canvas linear orthographic camera={{ zoom: state.zoom, position: [0, 0, 100] }}>
					<React.Suspense fallback={null}>
						<ThreeContent />
					</React.Suspense>
				</Canvas>
			</div>
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
