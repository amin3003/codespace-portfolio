import React from 'react';
import { Sphere } from '@react-three/drei';
import { BlockProperties } from '@c/shared/Blocks';

export default function StarsContainer(props: { block: BlockProperties; count: number }) {
	const particleCount = props.count || 10;

	/* ------------- a set of random numbers for each stars position ------------ */
	const starPosList = React.useMemo(() => {
		return new Array(particleCount).fill(0).map((r) => {
			return [Math.random(), Math.random(), 0] as any;
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
						<Sphere key={'s1-' + i} position={r} scale={[1, 3, 1]}></Sphere>
						<Sphere key={'s2-' + i} position={r} scale={[2, 1, 1]}></Sphere>
					</React.Fragment>
				);
			}),
		[starFinalPosList]
	);
}
