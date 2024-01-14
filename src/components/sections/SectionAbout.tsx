import { Text } from '@c/shared/Text';
import { math_lerp } from '@azrico/math';
import { Block, useBlock, BlockProperties } from '@c/shared/Blocks';
import { Html } from '@react-three/drei';

export default function SectionAbout(props: { block: BlockProperties }) {
	return (
		<>
			<Text color="#d40749" size={props.block.wModifier}>
				Chiz about
			</Text>
			<Html style={{ width: props.block.canvasWidth / 2 }} position={[0, -50, 0]}>
				<p>contact us now</p>
			</Html>
		</>
	);
}
