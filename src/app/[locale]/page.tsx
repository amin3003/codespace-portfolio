"use client"
import ReactDOM from "react-dom";
import React, { Suspense, useEffect, useMemo } from "react";
import { Canvas, useLoader, useFrame } from "@react-three/fiber";
import { TextureLoader, LinearFilter } from "three";
import { Text } from "@c/shared/Text";
import { math_lerp } from "@azrico/math"; 
import { Block, useBlock } from "@c/shared/Blocks";
import state from "@c/shared/Store";
 

function Paragraph({ image, index, offset, factor, header, aspect, text }:any) {
  const { contentMaxWidth: w, canvasWidth, margin, mobile } = useBlock();
  const size = aspect < 1 && !mobile ? 0.65 : 1;
  const alignRight = (canvasWidth - w * size - margin) / 2;
  const pixelWidth = w * state.zoom * size;
  const left = !(index % 2);
  const color = index % 2 ? "#D40749" : "#2FE8C3";
  return (
    <Block factor={factor} offset={offset}>
      <group position={[left ? -alignRight : alignRight, 0, 0]}>
        {/* <Plane
          map={image}
          args={[1, 1, 32, 32]}
          shift={75}
          size={size}
          aspect={aspect}
          scale={[w * size, (w * size) / aspect, 1]}
          frustumCulled={false}
        /> */}
    
        <Text
          left={left}
          right={!left}
          size={w * 0.04}
          color={color}
          top
          position={[
            ((left ? -w : w) * size) / 2,
            (w * size) / aspect / 2 + 0.5,
            -1,
          ]}
        >
          {header}
        </Text>
        <Block factor={0.2}>
          <Text
            opacity={0.5}
            size={w * 0.5}
            color="#1A1E2A"
            position={[
              ((left ? w : -w) / 2) * size,
              (w * size) / aspect / 1,
              -10,
            ]}
          >
            {"0" + (index + 1)}
          </Text>
        </Block>
      </group>
    </Block>
  );
}

function Content() {
  
  return (
    <group scale={[1,1,1]}>
          <Text color='white' position={[0,0,0]}>
            CHIZ
          </Text>
          <Text color='orange'  position={[0,-1,0]}>
            TECH
          </Text>  
    </group>
  );
}

export default function Index() {
	const sectionsCount = 5;
	//   const scrollArea = React.useRef<any>();
	//   const onScroll = (e:any) => (state.top.current = e.target.scrollTop);
	//   useEffect(() => void onScroll({ target: scrollArea.current }), []);
	return (
		<>
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

			{new Array(sectionsCount).fill(0).map((_, index) => (
				<div key={index} id={'page' + index} style={{ height: `100vh` }} />
			))}
		</>
	);
}
