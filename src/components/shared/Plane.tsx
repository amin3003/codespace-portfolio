import React, { createContext, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import './CustomMaterial';
import { useBlock, Block } from '@/components/shared/Blocks';
import Text from '@/components/shared/Text';
import { math_lerp } from '@azrico/math';
import state from '@c/shared/Store';
import { Plane as PlaneDrei } from '@react-three/drei';

function Plane(props: any) {
	const block = useBlock();
	const planeRef = useRef<any>();

	let lastTop = state.top.current;
	useFrame(() => {
		// planeRef.current.position.y = math_lerp(
		// 	planeRef.current.position.y,
		// 	lastTop / 1.1,
		// 	0.1
		// );
		lastTop = state.top.current;
	});

	return (
		<PlaneDrei
			ref={planeRef}
			rotation={props.rotation || [0, 0, 0]}
			position={props.position || [0, 0, -1]}
			scale={[block.viewportWidth * 2, block.viewportHeight * 1.1, 1]}
		>
			{/* @ts-ignore */}
			<customMaterial color={'black'} transparent opacity={1} />
		</PlaneDrei>
	);
}
export default Plane;

// const Plane2 = forwardRef(
// 	({ color = 'white', shift = 1, opacity = 1, args, map, ...props }: any, ref) => {
// 		const { viewportHeight, offsetFactor } = useBlock();
// 		const material = useRef();
// 		let last = state.top.current;
// 		useFrame(() => {
// 			const { pages, top } = state;
// 			if (material.current == null) {
// 				return;
// 			}
// 			material.current.scale = math_lerp(
// 				material.current.scale,
// 				offsetFactor - top.current / ((pages - 1) * viewportHeight),
// 				0.1
// 			);
// 			material.current.shift = math_lerp(
// 				material.current.shift,
// 				((top.current - last) / shift) * 1.5,
// 				0.1
// 			);
// 			last = top.current;
// 		});
// 		return (
// 			<mesh ref={ref} {...props}>
// 				<planeBufferGeometry args={args} />
// 				<customMaterial
// 					ref={material}
// 					color={color}
// 					map={map}
// 					transparent
// 					opacity={opacity}
// 				/>
// 			</mesh>
// 		);
// 	}
// );
// export default Plane;
