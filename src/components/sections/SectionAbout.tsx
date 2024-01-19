import { Text } from "@c/shared/Text";
import { math_lerp } from "@azrico/math";
import { Block, useBlock, BlockProperties } from "@c/shared/Blocks";
import { Html } from "@react-three/drei";
import { sectionProps } from "./types";
import React from "react";
import AboutSlider from "../swiper/AboutSlider";
export default function SectionAbout(props: sectionProps) {
  const team = [
    {
      img: "",
      name: "Ayhan",
      position: "Back-end Developer",
      desc: "It by the readable at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution",
      social: {
        gitHub: "",
        instagram: "",
        telegram: "",
      },
    },
    {
      img: "",
      name: "Emin",
      position: "Front-end Developer",
      desc: "It by the readable at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution",
      social: {
        gitHub: "",
        instagram: "",
        telegram: "",
      },
    },
    {
      img: "",
      name: "Reza",
      position: "UI/UX Designer ",
      desc: "It by the readable at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution",
      social: {
        gitHub: "",
        instagram: "",
        telegram: "",
      },
    },
  ];
  return (
		<Block {...props} factor={1.8}>
			<Text color="white" size={props.block.wModifier * 0.5}>
				{'Spase team'}
			</Text>
			<Html
				className="flex flex-col  p-4 "
				style={{ width: props.block.canvasWidth }}
				position={[-props.block.canvasWidth / 2, -90, 0]}
			>
				<AboutSlider data={team} />
			</Html>
		</Block>
	);
}
