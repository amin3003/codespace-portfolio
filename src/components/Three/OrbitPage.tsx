'use client';
import React from 'react';
import { Canvas } from '@react-three/fiber';
import { useBlock, Block, BlockProperties } from '@c/shared/Blocks';
import PlanetOrbits from '@/components/Three/PlanetOrbits';
import StarsComponent from '@/components/Three/StarSection';
import { Vector3 } from 'three';
import useRef from 'react';
import ThreeCanvas from '@c/Three/ThreeCanvas';

export default function OrbitPage(props: { start?: number }) {
	const block = useBlock();
	const startingIndex = props.start ?? 2.5;
	return (
		<>
			<Block index={startingIndex}>
				<SolarSystem block={block} />
			</Block>
			<Block index={startingIndex + 2}>
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
		</>
	);
}
function SolarSystem(props: { block: BlockProperties }) {
	const b = props.block;
	const sizeFactor = 60;
	const distanceFactor = b.mobile ? 500 : b.tablet ? 700 : 900;
	return (
		<PlanetOrbits
			showOrbits
			block={props.block}
			planets={[
				{
					orbitRadius: distanceFactor * 0.4,
					size: sizeFactor * 0.382, //venus
					factor: 0.05,
					color: '#b3053f',
				},
				{
					orbitRadius: distanceFactor * 0.7,
					size: sizeFactor * 0.93, //mercury
					factor: -0.15,
					color: 'gray',
				},
				{
					orbitRadius: distanceFactor * 1,
					size: sizeFactor * 1, //earth
					factor: 0.11,
					offset: -Math.PI / 2,
					color: '#4287f5',
				},
			]}
			side="left"
		/>
	);
}
