import { Text } from "@c/shared/Text";
import { math_lerp } from "@azrico/math";
import { Block, useBlock, BlockProperties } from "@c/shared/Blocks";
import { Html } from "@react-three/drei";
import { sectionProps } from "./types";
import { useEffect } from "react";
import ServicesSlider from "../swiper/ServicesSlider";
import BackgroundPlane from '@/components/shared/BackgroundPlane';

export default function SectionServices(props: sectionProps) {
	const Services = [
		{
			name: 'Venus Package',
			desc: 'Sit ullamco veniam mollit duis duis officia sint ad officia nostrud in ipsum. Adipisicing ad ipsum ea nostrud mollit eu laboris sint ad nulla.',
		},
		{
			name: 'Apollo Package',
			desc: 'Sit ullamco veniam mollit duis duis officia sint ad officia nostrud in ipsum. Adipisicing ad ipsum ea nostrud mollit eu laboris sint ad nulla.',
		},
		{
			name: 'The Sun Package',
			desc: 'Sit ullamco veniam mollit duis duis officia sint ad officia nostrud in ipsum. Adipisicing ad ipsum ea nostrud mollit eu laboris sint ad nulla.',
		},
		{
			name: 'The Sun Package',
			desc: 'Sit ullamco veniam mollit duis duis officia sint ad officia nostrud in ipsum. Adipisicing ad ipsum ea nostrud mollit eu laboris sint ad nulla.',
		},
		{
			name: 'The Sun Package',
			desc: 'Sit ullamco veniam mollit duis duis officia sint ad officia nostrud in ipsum. Adipisicing ad ipsum ea nostrud mollit eu laboris sint ad nulla.',
		},
	];
	return (
		<>
			<Block {...props} factor={1.6}>
				<BackgroundPlane
					opacity={0.5}
					rotation={[0, 0, 0.06]}
					position={[0, -props.block.canvasHeight / 2.7, -1]}
				/>
				<BackgroundPlane
					opacity={0.5}
					rotation={[0, 0, -0.06]}
					position={[0, -props.block.canvasHeight / 2.7, -1]}
				/>
			</Block>
			<Block {...props} factor={1.35}>
				<Text color="white" size={props.block.wModifier * 0.5}>
					{'Spase Services'}
				</Text>

				<Html
					zIndexRange={[0, 0]}
					className="flex flex-col justify-center p-7"
					style={{ width: props.block.canvasWidth }}
					position={[-props.block.canvasWidth / 2, -50, 0]}
				>
					<ServicesSlider data={Services} />
				</Html>
			</Block>
		</>
	);
}
