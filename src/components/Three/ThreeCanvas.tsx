'use client';
import React from 'react';
import { Canvas } from '@react-three/fiber';
import { useBlock, Block, BlockProperties } from '@c/shared/Blocks';
import state from '@c/shared/Store';
import PlanetOrbits from '@/components/Three/PlanetOrbits';
import StarsComponent from '@/components/Three/StarSection';
import { Vector3 } from 'three';
import useRef from 'react';

const camPos = new Vector3(0, 0, 100);
export default function ThreeSections(props: any) {
	return (
		<div id="three-container" className="fixed top-0 h-lvh w-lvw">
			<Canvas orthographic shadows camera={{ zoom: state.zoom, position: camPos }}>
				<ambientLight />
				<React.Suspense fallback={null}>
					{props.children}
				</React.Suspense>
			</Canvas>
		</div>
	);
}
