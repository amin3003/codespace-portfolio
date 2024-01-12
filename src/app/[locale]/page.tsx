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

function Content() {
	const { wModifier, canvasWidth, canvasHeight } = useBlock();
	const { sections } = state;

	return (
		<>
			{sections.map((p, index) => {
				return (
					<Block key={index} index={index} offset={index} factor={2}>
						<Text color="#d40749" size={wModifier}>
							{p.title}
						</Text>
						<Html
							style={{ width: canvasWidth / 2 }}
							position={[-canvasWidth / 2.5, canvasHeight * 2, 0]}
						>
							<div
								tabIndex={index}
							>{`It's a good idea to call the .sync() method after changing any properties that would affect the text's layout. If you don't, it will be called automatically on the next render frame, but calling it yourself can get the result sooner.`}</div>
						</Html>
					</Block>
				);
			})}
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
