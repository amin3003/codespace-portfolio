"use client"
import ReactDOM from "react-dom";
import React, { Suspense, useEffect, useMemo } from "react";
import { Canvas, useLoader, useFrame } from "@react-three/fiber";
import { TextureLoader, LinearFilter } from "three";
import { Text } from "@c/shared/Text";
import { math_lerp } from "@azrico/math"; 
import { Block, useBlock } from "@c/shared/Blocks";
import state from "@c/shared/Store";
 
 

function Content() {
	return (
		<group scale={[1, 1, 1]}>
			<Text color="white" position={[0, -0.5, 0]}>
				CHIZ
			</Text>
			<Text color="orange" position={[0, 0.5, 0]}>
				TECH
			</Text>
		</group>
	);
}

export default function Index() {
	const sectionsCount = 5;
	return (
		<>
			<div className="h-screen w-screen">
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

			{new Array(sectionsCount).fill(0).map((_, index) => (
				<div key={index} id={'page' + index} style={{ height: `100vh` }} />
			))}
		</>
	);
}
