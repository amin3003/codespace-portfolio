'use client';
import React from 'react';
import { Canvas } from '@react-three/fiber';
import { useBlock, Block } from '@c/shared/Blocks';
import state from '@c/shared/Store';
import PlanetOrbits from '@/components/Three/PlanetOrbits';
import StarsComponent from '@/components/Three/StarsContainer';

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
	const components = [StarsComponent, PlanetOrbits];

	return (
		<>  
			<Block index={0}>
				<StarsComponent block={block} count={16} />
			</Block>
			<Block index={0.8}>
				<PlanetOrbits
					showOrbits
					block={block}
					planets={[
						{ radius: 70, size: 25, factor: 0.1, color: 'orange' },
						{ radius: 170, size: 8, factor: -0.3, color: '#ffaaff' },
						{ radius: 290, size: 58, factor: 0.3, color: 'red' },
					]}
					side="left"
				/>
			</Block>
			<Block index={2.5}>
				<PlanetOrbits
					showOrbits
					block={block}
					planets={[
						{ radius: 70, size: 25, factor: 0.1, color: 'orange' },
						{ radius: 170, size: 8, factor: -0.3, color: '#ffaaff' },
						{ radius: 290, size: 58, factor: 0.3, color: 'red' },
					]}
					side="right"
				/>
			</Block>
		</>
	);
}
