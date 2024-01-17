import { Text } from "@c/shared/Text";
import { math_lerp } from "@azrico/math";
import { Block, useBlock, BlockProperties } from "@c/shared/Blocks";
import Plane from '@c/shared/Plane';
import { Html } from '@react-three/drei';
import { sectionProps } from './types';
import { useEffect } from 'react';
import StarsComponent from '@c/StarsContainer/StarsContainer';

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
	];

	return (
		<>
			<Block {...props} factor={1.6}>
				<Plane
					rotation={[0, 0, 0.06]}
					position={[0, -props.block.canvasHeight / 2.7, -1]}
				/>
				<Plane
					rotation={[0, 0, -0.06]}
					position={[0, -props.block.canvasHeight / 2 - 100, -1]}
				/>
			</Block>
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
					<div className="carousel gap-3 carousel-center justify-center mx-[10%]">
						{Services.map((r, i) => {
							return (
								<div
									key={i}
									id={`serviceitem${i + 1}`}
									className="carousel-item card w-[300px] h-[400px] bg-base-100 shadow-xl"
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
								<a key={i} href={`#serviceitem${i + 1}`} className="btn btn-xs">
									{i + 1}
								</a>
							);
						})}
					</div>
				</Html>
			</Block>
		</>
	);
}
