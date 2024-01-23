'use client';
import React from 'react';
import { Canvas } from '@react-three/fiber';
import { useBlock, Block } from '@c/shared/Blocks';
import state from '@c/shared/Store';
import StarsComponent from '@c/StarsContainer/StarsContainer';

export default function ThreeSections(props: any) {
	return (
		<div id="three-container" className="fixed top-0 h-lvh w-lvw">
			<Canvas linear orthographic camera={{ zoom: state.zoom, position: [0, 0, 100] }}>
				<React.Suspense fallback={null}>
					<LocalSections {...props} />
				</React.Suspense>
			</Canvas>
		</div>
	);
}
function LocalSections(props: any) {
	const block = useBlock();
	const components = [<StarsComponent key={0} block={block} count={16} />];
	return (
		<>
			{components.map((r, i) => {
				return (
					<Block key={i} offset={i} index={i}>
						{r}
					</Block>
				);
			})}
		</>
	);
}
