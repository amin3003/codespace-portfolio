import { Text } from '@c/shared/Text';
import { math_lerp } from '@azrico/math';
import { Block, useBlock, BlockProperties } from '@c/shared/Blocks';
import { Html } from '@react-three/drei';
import { sectionProps } from './types';

export default function SectionAbout(props: sectionProps) {
	const team = [
		{
			img: '',
			name: 'Ayhan',
			position: 'Back-end',
			desc: 'It by the readable at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution',
			social: {
				gitHub: '',
				instagram: '',
				telegram: '',
			},
		},
	];
	return (
		<Block {...props} factor={2.5}>
			<Text color="white" size={props.block.wModifier}>
				{'Chiz ' + '<About/>'}
			</Text>
			<Html
				className="flex flex-row gap-4 p-4 justify-between"
				style={{ width: props.block.canvasWidth }}
				position={[-props.block.canvasWidth / 2, -90, 0]}
			>
				{team.map((r, index) => {
					return (
						<div key={index} className="card w-56 bg-base-100 shadow-xl">
							<div className="card-body content-center justify-center ">
								<div className="avatar justify-center">
									<div className="w-24 rounded-full ">
										<img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
									</div>
								</div>
								<h2 className="card-title justify-center">{r.name}</h2>
								<h3 className="flex justify-center text-secondary">{r.position}</h3>
								<p className="flex text-justify text-sm">{r.desc}</p>
								<div className="card-actions justify-center">
								
								</div>
							</div>
						</div>
					);
				})}
			</Html>
		</Block>
	);
}
