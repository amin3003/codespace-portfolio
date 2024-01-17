import { Text } from '@c/shared/Text';
import { math_lerp } from '@azrico/math';
import { Block, useBlock, BlockProperties } from '@c/shared/Blocks';
import { Html, Sphere } from '@react-three/drei';
import { sectionProps } from './types';
import THREE from 'three';
import React from 'react';
import StarsComponent from '@c/StarsContainer/StarsContainer';

 

export default function SectionHome(props: sectionProps) {
	return (
		<Block {...props} factor={0.9}>
			<StarsComponent {...props} count={16} />
			<Text
				color="white"
				size={props.block.wModifier}
				position={[0, props.block.canvasHeight / 5, 0]}
			>
				{'<Code/> Spase'}
			</Text>
			<Text
				color="white"
				size={props.block.wModifier / 4}
				position={[0, props.block.canvasHeight / 5 - 100, 0]}
			>
				{'take your ideas to the spase !'}
			</Text>

			<Html
				zIndexRange={[0, 0]}
				className="flex content-center justify-center"
				style={{ width: props.block.canvasWidth }}
				position={[-props.block.canvasWidth / 2, 0, 0]}
			>
				{/* Browser mockup */}
				<div className="mockup-browser border border-base-300 h-[400px]">
					<div className="mockup-browser-toolbar">
						<div className="input border border-base-300">https://yourwebsite.com</div>
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
