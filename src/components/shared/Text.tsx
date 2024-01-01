 
import Three from "three"
import React, { useCallback, useRef } from "react"
import { extend, useFrame } from "@react-three/fiber"
import {Vector3} from 'three'
import { useAsset } from "use-asset"
import {math_lerp} from "@azrico/math"
import state from "@c/shared/Store"
import './CustomMaterial'
 
import { Text as troikaText } from "troika-three-text";
// Register Text as a react-three-fiber element
extend({ Text:troikaText });


function Text(props: any) {
	//const data = useLoader(Three.FontLoader, font)
	//const geom = useAsset(() => new Promise((res) => res(new TextGeometry(children, { font: data, size: 1, height, curveSegments: 32 }))), [children])

	const ref = useRef<any>();
	let last = state.top.current;
	useFrame(() => {
		ref.current.shift = math_lerp(
			ref.current.shift,
			(state.top.current - last) / 50,
			0.1
		);
		last = state.top.current;
	});
	const opts = React.useMemo(() => {
		return {
			font: 'Philosopher',
			fontSize: 1,
			maxWidth: 300,
			lineHeight: 1,
			letterSpacing: 0,
			textAlign: 'justify',
			materialType: 'MeshPhongMaterial',
		};
	}, []);

	return (
		<group position={props.position}>
			<text {...opts} text={props.children} anchorX="center" anchorY="middle">
				{/*@ts-ignore*/}
				<customMaterial ref={ref} color={props.color} transparent opacity={1} />
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
