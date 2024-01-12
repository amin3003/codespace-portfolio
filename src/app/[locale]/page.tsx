"use client"
import ReactDOM from "react-dom";
import React, { Suspense, useEffect, useMemo } from "react";
import { Canvas, useLoader, useFrame } from "@react-three/fiber";
import { TextureLoader, LinearFilter } from "three";
import { Text } from "@c/shared/Text";
import { math_lerp } from "@azrico/math"; 
import { Block, useBlock } from "@c/shared/Blocks";
import state from "@c/shared/Store";
 
 
const pages = [
	{ title: 'CHIZ TECH' },
	{ title: 'TECH SOLUTIONS' },
	{ title: 'FOR EVERYONE' },
	{ title: 'CONTACT US' },
	{ title: 'GOODBYE 1' },
	{ title: 'GOODBYE 2' },
	{ title: 'GOODBYE 3' },
	{ title: 'GOODBYE 4' },
];

function Content() {
	return (
		<>
			{pages.map((p, index) => {
				return (
					<Block key={index} index={index} offset={index} factor={2}>
						<Text color="#d40749">{p.title}</Text>
					</Block>
				);
			})}
		</>
	);
}

export default function Index() {
	const sectionSize = (100 * pages.length) / (pages.length + 1);
	return (
		<>
			<div className="fixed top-0 bottom-0 left-0 right-0 ">
				<Canvas
					linear
					dpr={window.devicePixelRatio}
					orthographic
					camera={{ zoom: state.zoom, position: [0, 0, 500] }}
				>
					<Suspense fallback={null}>
						<Content />
					</Suspense>
				</Canvas>
			</div>

			{new Array(pages.length).fill(0).map((_, index) => (
				<div
					key={index}
					id={'page' + index}
					className={'border-red-200 border-2'}
					style={{ height: `${sectionSize}vh` }}
				/>
			))}
		</>
	);
}
