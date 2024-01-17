import { Text } from "@c/shared/Text";
import { math_lerp } from "@azrico/math";
import { Block, useBlock, BlockProperties } from "@c/shared/Blocks";
import Plane from '@c/shared/Plane';
import { Html } from '@react-three/drei';
import { sectionProps } from './types';
import { useEffect } from 'react';

export default function SectionServices(props: sectionProps) {
	const Services = [
		{
			name: 'Gold Membership ',
			desc: 'Sit ullamco veniam mollit duis duis officia sint ad officia nostrud in ipsum. Adipisicing ad ipsum ea nostrud mollit eu laboris sint ad nulla.',
		},
		{
			name: 'Silver Membership ',
			desc: 'Sit ullamco veniam mollit duis duis officia sint ad officia nostrud in ipsum. Adipisicing ad ipsum ea nostrud mollit eu laboris sint ad nulla.',
		},
		{
			name: 'Pro Membership ',
			desc: 'Sit ullamco veniam mollit duis duis officia sint ad officia nostrud in ipsum. Adipisicing ad ipsum ea nostrud mollit eu laboris sint ad nulla.',
		},
		{
			name: 'Pro Super Membership ',
			desc: 'Sit ullamco veniam mollit duis duis officia sint ad officia nostrud in ipsum. Adipisicing ad ipsum ea nostrud mollit eu laboris sint ad nulla.',
		},
		{
			name: 'Gold Membership ',
			desc: 'Sit ullamco veniam mollit duis duis officia sint ad officia nostrud in ipsum. Adipisicing ad ipsum ea nostrud mollit eu laboris sint ad nulla.',
		},
	];

	return (
		<Block {...props} factor={1.35}>
			<Text color="white" size={props.block.wModifier * 0.8}>
				{'Spase Services'}
			</Text>

			<Html
				zIndexRange={[0, 0]}
				className="flex flex-col p-7 overflow-hidden"
				style={{ width: props.block.canvasWidth }}
				position={[-props.block.canvasWidth / 2, -50, 0]}
			>
				<div className="carousel gap-4 carousel-center justify-center">
					{Services.map((r, i) => {
						return (
							<div
								key={i}
								id={`serviceitem${i + 1}`}
								className="carousel-item card w-[300px] h-[500px] bg-base-100 shadow-xl"
							>
								<div className="card-body">
									<h2 className="card-title">{r.name}</h2>
									<p>{r.desc}</p>
									<div className="card-actions justify-end">
										<button className="btn btn-primary">Buy Now</button>
									</div>
								</div>
							</div>
						);
					})}
				</div>
				<div className="flex justify-center w-full py-2 gap-2">
					{Services.map((r, i) => {
						return (
							<a href={`#serviceitem${i + 1}`} className="btn btn-xs">
								{i + 1}
							</a>
						);
					})}
				</div>
			</Html>
		</Block>
	);
}
