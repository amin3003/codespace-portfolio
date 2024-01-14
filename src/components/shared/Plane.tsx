// import React, { forwardRef, useRef } from 'react';
// import { useFrame } from '@react-three/fiber';
// import './CustomMaterial';
// import { useBlock } from '@/components/shared/Blocks';
// import { math_lerp } from '@azrico/math';
// import state from '@c/shared/Store';
// const Plane = forwardRef(
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
