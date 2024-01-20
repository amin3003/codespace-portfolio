"use client"
import React from 'react';
import { Canvas } from '@react-three/fiber';
import { useBlock } from '@c/shared/Blocks';
import state from '@c/shared/Store';
import SectionHome from '@c/sections/SectionHome';
import SectionServices from '@c/sections/SectionServices';
import SectionAbout from '@c/sections/SectionAbout';
const sections = [SectionHome, SectionServices, SectionAbout];
function Content() {
	const block = useBlock();

	return (
		<>
			{sections.map((SectionRender, index) => {
				return <SectionRender key={index} index={index} block={block} />;
			})}
		
		 	</>
	);
}

export default function Index() {
	const { sections, pages } = state;

	return (
		<>
			<div id="content-container" className="fixed top-0 bottom-0 left-0 right-0 ">
				<Canvas
					linear
					//@ts-ignore
					dpr={window.devicePixelRatio}
					orthographic
					camera={{ zoom: state.zoom, position: [0, 0, 100] }}
				>
					<Content />
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
