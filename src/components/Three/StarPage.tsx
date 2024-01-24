'use client';
import React from 'react';
import { Canvas } from '@react-three/fiber';
import { useBlock, Block, BlockProperties } from '@c/shared/Blocks';
import state from '@c/shared/Store';
import PlanetOrbits from '@/components/Three/PlanetOrbits';
import StarsComponent from '@/components/Three/StarSection';
import { Vector3 } from 'three';
import useRef from 'react';
import ThreeCanvas from '@c/Three/ThreeCanvas';
/**
 * 6 sections of stars
 * @param props 
 * @returns 
 */
export default function StarPage(props: any) {
	const block = useBlock(); 
	return (
		<>
			{[0, 1, 2, 3, 4, 5].map((r, i) => {
				return (
					<Block key={i} index={i}>
						<StarsComponent block={block} count={16} size={1} />
					</Block>
				);
			})}
		</>
	);
}
