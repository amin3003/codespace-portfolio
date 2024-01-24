import React from 'react';
import { Sphere, Stars } from '@react-three/drei';
import { BlockProperties } from '@c/shared/Blocks';
import '@c/shared/CustomMaterial';

export default function StarSection(props: {
	block: BlockProperties;
	count: number;
	size?: number;
}) {
	const starSize = props.size || 1;
	const particleCount = props.count || 10;

	/* ------------- a set of random numbers for each stars position ------------ */
	const starPosList = React.useMemo(() => {
		return new Array(particleCount).fill(0).map((r) => {
			return [Math.random(), Math.random(), -10] as any;
		});
	}, [particleCount]);

	/* --------------------- resize based on current screen --------------------- */
	const starFinalPosList = React.useMemo(() => {
		return starPosList.map((r) => {
			return [
				(r[0] * props.block.viewportWidth - props.block.viewportWidth / 2) * 0.9,
				(r[1] * props.block.viewportHeight - props.block.viewportHeight / 2) * 0.9,
				r[2],
			] as any;
		});
	}, [starPosList, props.block.viewportWidth, props.block.viewportHeight]);

	return React.useMemo(
		() =>
			starFinalPosList.map((r, i) => {
				return (
					<React.Fragment key={i}>
						<mesh
							position={r}
							// scale={[starSize, starSize * 20, starSize]}
						>
							<Stars
								radius={starSize}
								depth={50}
								count={4}
								factor={3}
								saturation={0}
								fade
								speed={1}
							/>
							{/* <meshStandardMaterial transparent opacity={0.1} color={'white'} /> */}
						</mesh>
						{/* <Sphere
							key={'s2-' + i}
							position={r}
							scale={[starSize * 20, starSize, starSize]}
						>
							<meshStandardMaterial transparent opacity={0.1} color={'white'} />
						</Sphere> */}
					</React.Fragment>
				);
			}),
		[starFinalPosList, starSize]
	);
}
