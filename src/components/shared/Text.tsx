 
import Three from 'three';
import React, { useCallback, useRef } from 'react';
import { extend, useFrame, useLoader } from '@react-three/fiber';
import { Vector3 } from 'three';
import { useAsset } from 'use-asset';
import { math_lerp } from '@azrico/math';
import state from '@c/shared/Store';
import './CustomMaterial';
import { FontLoader } from 'three/addons/loaders/FontLoader.js';
import { Text as troikaText } from 'troika-three-text';
import { Sphere } from '@react-three/drei';
// Register Text as a react-three-fiber element
extend({ Text: troikaText });

function Text(props: any) {
	const textRef = useRef<any>();
	const materialRef = useRef<any>();

	const font = useLoader(FontLoader, '/fonts/Philosopher.json');

	const final_size = props.size / 15;
	/* -------------------------------------------------------------------------- */
	let last = state.top.current;
	useFrame(() => {
		materialRef.current.shift = math_lerp(
			materialRef.current.shift,
			(state.top.current - last) / 7,
			0.1
		);
		last = state.top.current;
	});
	React.useEffect(() => {
		if (textRef.current) {
			textRef.current.sync();
		}
	}, []);

	const opts = React.useMemo(() => {
		return {
			font: font,
			fontSize: 1.3, //minimum of 0.1
			maxWidth: 300,
			lineHeight: 1,
			letterSpacing: 0,
			textAlign: 'justify',
			materialType: 'MeshPhongMaterial',
		};
	}, [font]);

	return (
		<group position={props.position || [0, 0, 0]} scale={[final_size, final_size, 0.1]}>
			<text
				ref={textRef}
				{...opts}
				text={props.children}
				anchorX="center"
				anchorY="middle"
			>
				{/*@ts-ignore*/}
				<customMaterial ref={materialRef} color={props.color} transparen t opacity={1} />
			</text>
		</group>
	);
}

const MultilineText = ({
	text,
	size = 1,
	lineHeight = 1,
	position = [0, 0, 0],
	...props
}: any) =>
	text.split('\n').map((text: string, index: number) => (
		<Text
			key={index}
			size={size}
			{...props}
			position={[position[0], position[1] - index * lineHeight, position[2]]}
		>
			{text}
		</Text>
	));

export { Text, MultilineText };
export default Text;