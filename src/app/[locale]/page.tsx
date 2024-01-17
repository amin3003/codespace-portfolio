"use client"
import ReactDOM from "react-dom";
import React, { Suspense, useEffect, useMemo } from "react";
import { Canvas, useLoader, useFrame } from "@react-three/fiber";
import { TextureLoader, LinearFilter } from "three";
import { Text } from "@c/shared/Text";
import { math_lerp } from "@azrico/math"; 
import { Block, useBlock } from "@c/shared/Blocks";
import state from "@c/shared/Store";
import { Html } from '@react-three/drei';
import SectionHome from '@c/sections/SectionHome';
import SectionServices from '@c/sections/SectionServices';
import SectionAbout from '@c/sections/SectionAbout';
import Plane from '@c/shared/Plane';
const sections = [SectionHome, SectionServices, SectionAbout];
function Content() {
	const block = useBlock();

	return (
		<>
			{sections.map((SectionRender, index) => {
				return <SectionRender key={index} index={index} block={block} />;
			})}
			<Block index={1} offset={1.5} factor={2}>
				<Plane rotation={[0, 0, 0.06]} position={[0, 0, -1]} />
				<Plane rotation={[0, 0, -0.06]} position={[0, 120, -1]} />
			</Block>
		</>
	);
}

export default function Index() {
	const { sections, pages } = state;

	return (
		<>
			<div className="fixed top-0 bottom-0 left-0 right-0 ">
				<Canvas
					linear
					// dpr={window.devicePixelRatio}
					orthographic
					camera={{ zoom: state.zoom, position: [0, 0, 500] }}
				>
					<Suspense fallback={null}>
						<Content />
					</Suspense>
				</Canvas>
			</div>
			{Array(pages)
				.fill(0)
				.map((r, index) => {
					return (
						<div
							key={index}
							id={'page' + index}
							// className={'border-red-200 border-2'}
							style={{ height: `100vh` }}
						/>
					);
				})}
		</>
	);
}
