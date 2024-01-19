'use client';
import React, { createContext, useRef, useContext } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { math_lerp } from '@azrico/math';
import BackgroundPlane from '@/components/shared/BackgroundPlane';
import state from '@c/shared/Store';
import { Color } from 'three';
import { Html, Sphere } from '@react-three/drei';

const offsetContext = createContext(0);

function Block({ children, offset, ...props }: any) {
	const { offset: parentOffset, sectionHeight, fModifier } = useBlock();
	const ref = useRef<any>();

	offset = offset ?? props.index ?? parentOffset;
	const factor = props.factor || 1;

	useFrame(() => {
		const curY = ref.current?.position.y;
		const curTop = state.top.current;
		//smooth movement of each section
		ref.current.position.y = math_lerp(curY, (curTop / state.zoom) * factor, 0.1);
	});
	return (
		<offsetContext.Provider value={offset}>
			<group {...props} position={[0, -sectionHeight * offset * factor * fModifier, 0]}>
				<group ref={ref}>{children}</group>
			</group>
		</offsetContext.Provider>
	);
}

export interface BlockProperties {
	viewport: { width: number; height: number };
	offset: number;
	viewportWidth: number;
	viewportHeight: number;
	canvasWidth: number;
	canvasHeight: number;
	mobile: boolean;
	margin: number;
	contentMaxWidth: number;
	sectionHeight: number;
	offsetFactor: number;
	wModifier: number;
	fModifier: number;
}

function useBlock(): BlockProperties {
	const { sections, pages, zoom } = state;
	const { size, viewport } = useThree();
	const offset = useContext(offsetContext);
	const viewportWidth = viewport.width * zoom;
	const viewportHeight = viewport.height * zoom;
	const canvasWidth = viewportWidth / zoom;
	const canvasHeight = viewportHeight / zoom;

	const mobile = size.width < 700;
	const margin = canvasWidth * (mobile ? 0.2 : 0.1);
	const wModifier = mobile ? canvasWidth * 1.5 : canvasWidth;
	const fModifier = mobile ? 1 : 0.9;

	const contentMaxWidth = canvasWidth * (mobile ? 0.8 : 0.6);
	const sectionHeight = canvasHeight * ((pages - 1) / (sections - 1));

	const offsetFactor = (offset + 1.0) / sections;
	return {
		viewport,
		offset,
		viewportWidth,
		viewportHeight,
		canvasWidth,
		canvasHeight,
		mobile,
		margin,
		contentMaxWidth,
		sectionHeight,
		offsetFactor,
		wModifier,
		fModifier,
	};
}

export { Block, useBlock };
