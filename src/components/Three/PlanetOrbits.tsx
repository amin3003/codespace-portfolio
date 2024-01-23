import React from 'react';
import { Circle, Ring, Sphere } from '@react-three/drei';
import { BlockProperties } from '@c/shared/Blocks';
import state from '@c/shared/Store';
import { useFrame } from '@react-three/fiber';
import { math_lerp, math_roundTo } from '@azrico/math';
import '@c/shared/CustomMaterial';
import { AmbientLight } from 'three';
type planetType = { radius: number; size: number; factor: number; color?: string };
export default function PlanetOrbits(props: {
	block: BlockProperties;
	planets: planetType[];
	side: 'left' | 'right';
	showOrbits?: boolean;
}) {
	const lastScroll = React.useRef<number>();
	const lerpedScroll = React.useRef<number>();
	const planetRefList = React.useRef<any[]>([]);

	useFrame(() => {
		lastScroll.current = state.top.current;
		const newLerped = math_lerp(lerpedScroll.current || 0, lastScroll.current, 0.01);
		if (newLerped != lerpedScroll.current) {
			lerpedScroll.current = newLerped;
			calculateOrbitPositions();
		}
	});

	const sideMul = props.side === 'left' ? -1 : 1;
	const x0 = (props.block.canvasWidth / 2) * sideMul;
	const y0 = 0;

	function calculateOrbitPositions() {
		if (!lerpedScroll.current) return;
		const scrollRadians = (lerpedScroll.current * Math.PI) / 180.0;

		for (let index = 0; index < props.planets.length; index++) {
			const planet = props.planets[index];
			const itemref = planetRefList.current[index];
			//start at 2pi (up position)
			const scrollFactored = Math.PI / 2 - scrollRadians * (planet.factor || 1);

			//add x0 y0 to the final positon so we start relative to origin
			itemref.position.set(
				x0 + planet.radius * Math.cos(scrollFactored),
				y0 + planet.radius * Math.sin(scrollFactored),
				0
			);
		}
	}

	return (
		<>
			{props.planets.map((planet, i) => {
				return (
					<React.Fragment key={i}>
						{props.showOrbits && (
							<Ring args={[planet.radius, planet.radius + 1, 64]} position={[x0, y0, -1]}>
								<meshStandardMaterial transparent opacity={0.1} color={'white'} />
							</Ring>
						)}

						<Circle
							ref={(ref) => (planetRefList.current[i] = ref)}
							scale={[planet.size, planet.size, 4]}
						>
							<meshStandardMaterial
								transparent
								opacity={0.5}
								color={planet.color || 'hotpink'}
							/>
						</Circle>
					</React.Fragment>
				);
			})}
		</>
	);
}
