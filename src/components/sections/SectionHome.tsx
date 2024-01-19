import { Text } from '@c/shared/Text';
import { math_lerp } from '@azrico/math';
import { Block, useBlock, BlockProperties } from '@c/shared/Blocks';
import { Html, Sphere } from '@react-three/drei';
import { sectionProps } from './types';
import THREE from 'three';
import React from 'react';
import StarsComponent from '@c/StarsContainer/StarsContainer';
import MockupSite from '@c/MockupSite/MockupSite';
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
				position={[-props.block.canvasWidth / 2, props.block.canvasHeight / 15, 0]}
			>
				 
				<div className="m-auto flex flex-row"> 
					<MockupSite />
				</div>

			 
			</Html>
		</Block>
	);
}
