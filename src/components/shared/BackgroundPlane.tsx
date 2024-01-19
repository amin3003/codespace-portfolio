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

	//// let lastTop = state.top.current;
	//// useFrame(() => {
	//// 	planeRef.current.position.y = math_lerp(
	//// 		planeRef.current.position.y,
	//// 		lastTop / 1.1,
	//// 		0.1
	//// 	);
	//// 	lastTop = state.top.current;
	//// });

	return (
		<PlaneDrei
			ref={planeRef}
			rotation={props.rotation || [0, 0, 0]}
			position={props.position || [0, 0, -1]}
			scale={[block.viewportWidth * 2, block.viewportHeight * 1.1, 1]}
		>
			{/* @ts-ignore */}
			<customMaterial
				color={props.color || '#1a1a1a'}
				opacity={props.opacity || 1}
				transparent
			/>
		</PlaneDrei>
	);
}
export default BackgroundPlane;
 