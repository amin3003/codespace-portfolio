import { Text } from '@c/shared/Text';
import { math_lerp } from '@azrico/math';
import { Block, useBlock, BlockProperties } from '@c/shared/Blocks';
import { Html } from '@react-three/drei';
import { sectionProps } from './types';

export default function SectionHome(props: sectionProps) {
	return (
		<Block {...props} factor={1}>
			<Text color="white" size={props.block.wModifier} position={[0, 0, 0]}>
				{'Chiz ' + '<Tech/>'}
			</Text>

			<Html
				className="flex content-center"
				style={{ width: props.block.canvasWidth }}
				position={[-props.block.canvasWidth / 2, -90, 0]}
			>
				<div className="ml-[15%] mr-[15%] text-2xl">
					<code>
						HOME TEXT HOME TEXT HOME TEXT HOME TEXTHOME TEXTHOME TEXT HOME TEXTHOME TEXT
					</code>
				</div>
			</Html>
		</Block>
	);
}
