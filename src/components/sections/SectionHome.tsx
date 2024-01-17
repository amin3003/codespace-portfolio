import { Text } from "@c/shared/Text";
import { math_lerp } from "@azrico/math";
import { Block, useBlock, BlockProperties } from "@c/shared/Blocks";
import { Html } from "@react-three/drei";
import { sectionProps } from "./types";

export default function SectionHome(props: sectionProps) {
  return (
		<Block {...props} factor={0.9}>
			<Text color="white" size={props.block.wModifier} position={[0, 0, 0]}>
				{'Chiz ' + '<Tech/>'}
			</Text>

			<Html
				zIndexRange={[0, 0]}
				className="flex content-center justify-center"
				style={{ width: props.block.canvasWidth }}
				position={[-props.block.canvasWidth / 2, -90, 0]}
			>
				{/* <div className="ml-[15%] mr-[15%] text-2xl">
					<code>
						HOME TEXT HOME TEXT HOME TEXT HOME TEXTHOME TEXTHOME TEXT HOME TEXTHOME TEXT
					</code>
				</div> */}

				{/* Browser mockup */}

				<div className="mockup-browser border border-base-300">
					<div className="mockup-browser-toolbar">
						<div className="input border border-base-300">https://daisyui.com</div>
					</div>
					<div className="flex justify-center px-4 py-16 border-t border-base-300">
						Hello!
					</div>
				</div>

				{/* Code mockup */}
				{/* 
        <div className="mockup-code text-2xl">
          <pre data-prefix="$">
            <code>npm i daisyui</code>
          </pre>
          <pre data-prefix=">" className="text-warning">
            <code>installing...</code>
          </pre>
          <pre data-prefix=">" className="text-success">
            <code>Done!</code>
          </pre>
          <pre data-prefix="#" className="text-neutral-content">
            <code>Done!</code>
          </pre>
        </div> */}
			</Html>
		</Block>
	);
}
