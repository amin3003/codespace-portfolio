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
		<div className="flex flex-col items-center justify-center">
			<h3 className="">Code spase</h3>
			<div className="m-auto flex flex-row">
				<MockupSite />
			</div>
		</div>
	);
}
