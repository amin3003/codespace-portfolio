import { Text } from '@c/shared/Text';
import { math_lerp } from '@azrico/math';
import { Block, useBlock, BlockProperties } from '@c/shared/Blocks';
import { Html } from '@react-three/drei';
import { sectionProps } from './types';

export default function SectionServices(props: sectionProps) {
	return (
		<Block {...props} factor={1}>
			<Text color="white" size={props.block.wModifier}>
				{'Chiz ' + '<Services/>'}
			</Text>

			<Html
				className="flex flex-row gap-4 p-7 justify-between w-full"
				style={{ width: props.block.canvasWidth }}
				position={[-props.block.canvasWidth / 2, -50, 0]}
			>
				{[1, 2, 3].map((r, i) => {
					return (
						<div key={i} className="card w-96 bg-base-100 shadow-xl">
							<div className="card-body">
								<h2 className="card-title">Shoes!</h2>
								<p>If a dog chews shoes whose shoes does he choose?</p>
								<div className="card-actions justify-end">
									<button className="btn btn-primary">Buy Now</button>
								</div>
							</div>
						</div>
					);
				})}
			</Html>
		</Block>
	);
}
