'use client';
import React, { createContext, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import './CustomMaterial';
import { useBlock, Block } from '@/components/shared/Blocks';
import Text from '@/components/shared/Text';
import { math_lerp } from '@azrico/math';
import state from '@c/shared/Store';
import { Plane as PlaneDrei } from '@react-three/drei';
function BackgroundPlane(props: any) {
	const block = useBlock();
	const planeRef = useRef<any>();

	const sizeFactor = props.size || 1.2;
	return (
		<PlaneDrei
			ref={planeRef}
			rotation={props.rotation || [0, 0, 0]}
			position={props.position || [0, 0, -1]}
			scale={[block.viewportWidth * 2, block.viewportHeight * sizeFactor, 1]}
		>
			{/* @ts-ignore */}
			<customMaterial
				color={props.color || 'rgb(67, 0, 70)'}
				opacity={props.opacity || 1}
				transparent
			/>
		</PlaneDrei>
	);
}
export default BackgroundPlane;
