'use client';
import React from 'react';
import { Canvas } from '@react-three/fiber';
import { useBlock, Block } from '@c/shared/Blocks';
import state from '@c/shared/Store';
import PlanetOrbits from '@/components/Three/PlanetOrbits';
import StarsComponent from '@/components/Three/StarsContainer';
import { Sky, Stars } from '@react-three/drei';
import { Vector3 } from 'three';
import useRef from 'react';

const camPos = new Vector3(0, 0, 100);
export default function ThreeSections(props: any) {
	return (
		<div id="three-container" className="fixed top-0 h-lvh w-lvw">
			<Canvas orthographic shadows camera={{ zoom: state.zoom, position: camPos }}>
				<ambientLight />
				<React.Suspense fallback={null}>
					<LocalSections {...props} />
				</React.Suspense>
			</Canvas>
		</div>
	);
}
function LocalSections(props: any) {
	const block = useBlock();
	const sizeFactor = 60;
	return (
		<>
			<Block index={2.5}>
				<PlanetOrbits
					showOrbits
					block={block}
					planets={[
						{
							orbitRadius: 170,
							size: sizeFactor * 0.382, //venus
							factor: 0.05,
							color: '#b3053f',
						},
						{
							orbitRadius: 470,
							size: sizeFactor * 0.93, //mercury
							factor: -0.15,
							color: 'gray',
						},
						{
							orbitRadius: 990,
							size: sizeFactor * 1, //earth
							factor: 0.11,
							offset: -Math.PI / 2,
							color: '#4287f5',
						},
					]}
					side="left"
				/>
			</Block>
			<Block index={4}>
				<PlanetOrbits
					showOrbits
					block={block}
					planets={[
						{
							orbitRadius: 180,
							size: 24,
							offset: Math.PI / 2,
							factor: 0.2,
							color: '#b3053f',
						},
						{
							orbitRadius: 490,
							size: 34,
							offset: Math.PI / 2,
							factor: 0.1,
							color: '#dafdda',
						},
					]}
					side="right"
				/>
			</Block>

			<Block index={0}>
				<StarsComponent block={block} count={20} />
			</Block>
			<Block index={1}>
				<StarsComponent block={block} count={8} size={1.5} />
			</Block>
			<Block index={2}>
				<StarsComponent block={block} count={16} size={1.5} />
			</Block>
			<Block index={3}>
				<StarsComponent block={block} count={16} size={1} />
			</Block>
			<Block index={4}>
				<StarsComponent block={block} count={16} size={1} />
			</Block>
		</>
	);
}
