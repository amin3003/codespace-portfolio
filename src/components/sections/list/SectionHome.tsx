import { Text } from '@c/shared/Text';
import { math_lerp } from '@azrico/math';
import { Block, useBlock, BlockProperties } from '@c/shared/Blocks';
import { Html, Sphere } from '@react-three/drei';
import { sectionProps } from '../types';
import THREE from 'three';
import React from 'react';
import StarsComponent from '@/components/Three/StarsContainer';
import MockupSite from '@c/MockupSite/MockupSite';
import Typewriter from 'typewriter-effect';

export default function SectionHome(props: sectionProps) {
	return (
		<div id="section-home" className="flex flex-col p-4">
			<div className="flex flex-row items-center justify-center p-4 gap-12">
				<div className="flex flex-col p-8">
					<h1>Code spase</h1>
					<span>Bussiness soultion. grow your bussiness to the moon</span>
					<span> grow your bussiness to the moon</span>
				</div>
				<div>
					<MockupSite />
				</div>
			</div>

			<a className="btn btn-ghost mx-auto flex flex-row gap-6" href="#section-service">
				<i className="bi bi-arrow-down"></i>

				<p>Discover more</p>
				<i className="bi bi-arrow-down"></i>
			</a>
		</div>
	);
}
