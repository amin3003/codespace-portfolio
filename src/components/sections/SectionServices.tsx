import { Text } from "@c/shared/Text";
import { math_lerp } from "@azrico/math";
import { Block, useBlock, BlockProperties } from "@c/shared/Blocks";
import { Html } from "@react-three/drei";
import { sectionProps } from "./types";
import { useEffect } from "react";
import ServicesSlider from "../swiper/ServicesSlider";

export default function SectionServices(props: sectionProps) {
  const Services = [
    {
      name: "Gold Membership ",
      desc: "Sit ullamco veniam mollit duis duis officia sint ad officia nostrud in ipsum. Adipisicing ad ipsum ea nostrud mollit eu laboris sint ad nulla.",
    },
    {
      name: "Silver Membership ",
      desc: "Sit ullamco veniam mollit duis duis officia sint ad officia nostrud in ipsum. Adipisicing ad ipsum ea nostrud mollit eu laboris sint ad nulla.",
    },
    {
      name: "Pro Membership ",
      desc: "Sit ullamco veniam mollit duis duis officia sint ad officia nostrud in ipsum. Adipisicing ad ipsum ea nostrud mollit eu laboris sint ad nulla.",
    },
    {
      name: "Pro Super Membership ",
      desc: "Sit ullamco veniam mollit duis duis officia sint ad officia nostrud in ipsum. Adipisicing ad ipsum ea nostrud mollit eu laboris sint ad nulla.",
    },
    {
      name: "Pro Membership ",
      desc: "Sit ullamco veniam mollit duis duis officia sint ad officia nostrud in ipsum. Adipisicing ad ipsum ea nostrud mollit eu laboris sint ad nulla.",
    },
    {
      name: "Pro Super Membership ",
      desc: "Sit ullamco veniam mollit duis duis officia sint ad officia nostrud in ipsum. Adipisicing ad ipsum ea nostrud mollit eu laboris sint ad nulla.",
    },
    {
      name: "Pro Membership ",
      desc: "Sit ullamco veniam mollit duis duis officia sint ad officia nostrud in ipsum. Adipisicing ad ipsum ea nostrud mollit eu laboris sint ad nulla.",
    },
    {
      name: "Pro Super Membership ",
      desc: "Sit ullamco veniam mollit duis duis officia sint ad officia nostrud in ipsum. Adipisicing ad ipsum ea nostrud mollit eu laboris sint ad nulla.",
    },
    {
      name: "Pro Membership ",
      desc: "Sit ullamco veniam mollit duis duis officia sint ad officia nostrud in ipsum. Adipisicing ad ipsum ea nostrud mollit eu laboris sint ad nulla.",
    },
    {
      name: "Pro Super Membership ",
      desc: "Sit ullamco veniam mollit duis duis officia sint ad officia nostrud in ipsum. Adipisicing ad ipsum ea nostrud mollit eu laboris sint ad nulla.",
    },
  ];

  return (
    <Block {...props} factor={1.35}>
      <Text color="white" size={props.block.wModifier}>
        {"Chiz " + "<Services/>"}
      </Text>

      <Html
        className="flex flex-col p-4 "
        style={{ width: props.block.canvasWidth }}
        position={[-props.block.canvasWidth / 2, -50, 0]}
      >
          <ServicesSlider data={Services} />
      </Html>
    </Block>
  );
}
