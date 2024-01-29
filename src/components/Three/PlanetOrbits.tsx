import React from 'react';
import { Circle, Ring, Sphere } from '@react-three/drei';
import { BlockProperties } from '@c/shared/Blocks';
import state from '@c/shared/Store';
import { useFrame } from '@react-three/fiber';
import { math_lerp, math_roundTo } from '@azrico/math';
import '@c/shared/CustomMaterial';
type planetType = {
	orbitRadius: number;
	offset?: number;
	size: number;
	factor: number;
	color?: string;
};
export default function PlanetOrbits(props: {
	block: BlockProperties;
	planets: planetType[];
	side: 'left' | 'right';
	showOrbits?: boolean;
}) {
	const lastScroll = React.useRef<number>();
	const lerpedScroll = React.useRef<number>();
	const planetRefList = React.useRef<any[]>([]);
	const lightRef = React.useRef<any>();

	useFrame(() => {
		lastScroll.current = state.top.current;
		const newLerped = math_lerp(lerpedScroll.current || 0, lastScroll.current, 0.01);
		if (!lerpedScroll.current || Math.abs(lerpedScroll.current - newLerped) > 0.1) {
			lerpedScroll.current = newLerped;
			calculateOrbitPositions();
		}
	});

	const sideMul = props.side === 'left' ? -1 : 1;
	const x0 = (props.block.canvasWidth / 2) * sideMul;
	const y0 = 0;
	const z0 = 0;

	function calculateOrbitPositions() {
		if (!lerpedScroll.current || planetRefList.current.length < props.planets.length)
			return;
		const scrollRadians = (lerpedScroll.current * Math.PI) / 180.0;

		let maxDist = 0;
		for (let index = 0; index < props.planets.length; index++) {
			const planet = props.planets[index];
			const itemref = planetRefList.current[index];
			//start at pi/2 - offset (up position)
			const scrollFactored =
				Math.PI / 2 - scrollRadians * (planet.factor || 1) - (planet.offset || 0);

			//add x0 y0 to the final positon so we start relative to origin
			const finalX = x0 + planet.orbitRadius * Math.cos(scrollFactored);
			const finalY = y0 + planet.orbitRadius * Math.sin(scrollFactored);
			const finalZ = z0;

			if (planet.orbitRadius > maxDist) maxDist = planet.orbitRadius;
			itemref.position.set(finalX, finalY, finalZ);
		}
		lightRef.current.distance = maxDist + 50;
	}

	return (
		<>
			<pointLight
				ref={lightRef}
				castShadow
				position={[x0, y0, z0 + 50]}
				intensity={10}
				decay={0.1}
				color="white"
			/>

			{props.planets.map((planet, i) => {
				return (
					<React.Fragment key={i}>
						{props.showOrbits && (
							<Ring
								args={[planet.orbitRadius, planet.orbitRadius + 1, 64]}
								position={[x0, y0, z0 - 1]}
							>
								<meshStandardMaterial transparent opacity={0.4} color={'white'} />
							</Ring>
						)}
						<Sphere
							receiveShadow
							ref={(ref) => (planetRefList.current[i] = ref)}
							scale={[planet.size, planet.size, planet.size]}
						>
							<meshLambertMaterial
								transparent
								opacity={0.8}
								color={planet.color || 'hotpink'}
							/>
						</Sphere>
					</React.Fragment>
				);
			})}
		</>
	);
}
