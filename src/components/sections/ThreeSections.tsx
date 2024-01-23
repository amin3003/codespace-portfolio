'use client';
import React from 'react';
import { Canvas } from '@react-three/fiber';
import { useBlock, Block } from '@c/shared/Blocks';
import state from '@c/shared/Store';
import PlanetOrbits from '@/components/Three/PlanetOrbits';
import StarsComponent from '@/components/Three/StarsContainer';
import { Sky, Stars } from '@react-three/drei';

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

	return (
		<>
			<ambientLight intensity={4} />
			<Block index={0.2}>
				<StarsComponent block={block} count={20} />
			</Block>
			<Block index={1.2}>
				<StarsComponent block={block} count={8} size={1.5} />
				<PlanetOrbits
					showOrbits
					block={block}
					planets={[
						{ radius: 70, size: 25, factor: 0.05, color: '#b3053f' },
						{ radius: 170, size: 8, factor: -0.15, color: '#f5b042' },
						{ radius: 290, size: 58, factor: 0.15, color: '#4287f5' },
					]}
					side="left"
				/>
			</Block>
			<Block index={2.5}>
				<StarsComponent block={block} count={16} size={1.5} />
				<PlanetOrbits
					showOrbits
					block={block}
					planets={[
						{ radius: 80, size: 25, factor: 0.2, color: '#b3053f' },
						{ radius: 190, size: 8, factor: -0.1, color: '#ffaaff' },
					]}
					side="right"
				/>
			</Block>
			<Block index={3}>
				<StarsComponent block={block} count={16} size={1} />
			</Block>
		</>
	);
}
