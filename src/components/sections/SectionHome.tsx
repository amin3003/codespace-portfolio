import { Text } from '@c/shared/Text';
import { math_lerp } from '@azrico/math';
import { Block, useBlock, BlockProperties } from '@c/shared/Blocks';
import { Html, Sphere } from '@react-three/drei';
import { sectionProps } from './types';
import THREE from 'three';
import React from 'react';
import StarsComponent from '@c/StarsContainer/StarsContainer';
import Typewriter from 'typewriter-effect';

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

			<Html
				zIndexRange={[0, 0]}
				className="content-center justify-center align-center flex flex-col"
				style={{ width: props.block.canvasWidth }}
				position={[-props.block.canvasWidth / 2, 0, 0]}
			>
				<div className="m-auto justify-center">
					<Typewriter
						options={{
							delay: 60,
							deleteSpeed: 40,

							strings: [
								'Take your ideas to the spase',
								'Your bussiness among the stars',
								'We will fly you to the moon',
							],
							autoStart: true,
							loop: true,
						}}
					/>
				</div>
				<div className="m-auto">
					{/* Browser mockup */}

					<div className="flex flex-col gap-4 w-52">
						<div className="skeleton h-32 w-full"></div>
						<div className="skeleton h-4 w-28"></div>
						<div className="skeleton h-4 w-full"></div>
						<div className="skeleton h-4 w-full"></div>
					</div>
					<div className="mockup-browser border border-base-300 h-[300px] m-4">
						<div className="mockup-browser-toolbar">
							<div className="input border border-base-300">https://yourwebsite.com</div>
						</div>
						<div className="flex justify-center px-4 py-16 border-t border-base-300"></div>
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
