"use client";
import MockupSite from "@c/MockupSite/MockupSite";
import SectionArea from "@c/Section/SectionArea";
import { sectionProps } from "./types";
import Image from "next/image";
export default function SectionSteps(props: sectionProps) {
  return (
    <div id="section-steps" className="flex flex-col gap-3">
      <SectionArea
        title={1}
        image={"ipad"}
        width={700}
        height={300}
        // widthMain={700}
        className="min-h-[80lvh]"
      >
        <h2 className="leading-10 md:leading-tight mb-4 md:text-[50px] text-[35px]">
          We design and create the ideal website for your business
        </h2>
        <p>
          Sit ipsum ea ea non aute velit occaecat culpa ipsum culpa labore
          adipisicing duis. Incididunt ea officia id proident aliquip eiusmod
          incididunt ad quis veniam eiusmod. Enim id exercitation duis in
          consequat sint dolor culpa commodo laboris.
        </p>
      </SectionArea>
      <SectionArea
        title={2}
        image={"makbook"}
        width={730}
        height={432}
        widthMain={500}
        mirror
        className="min-h-[80lvh]"
      >
        <h2 className="leading-10 md:leading-tight mb-4 md:text-[50px] text-[35px]">
          {`Enhance your website's search visibility by using best`}
          <span className="text-primary">{` SEO `}</span>
          {`practices`}
        </h2>
        <p>
          Sit ipsum ea ea non aute velit occaecat culpa ipsum culpa labore
          adipisicing duis. Incididunt ea officia id proident aliquip eiusmod
          incididunt ad quis veniam eiusmod. Enim id exercitation duis in
          consequat sint dolor culpa commodo laboris. Ut ex consectetur aute
          quis nulla.
        </p>
      </SectionArea>
      <SectionArea
        title={3}
        image={"phone"}
        width={300}
        height={200}
        widthMain={300}
        className="min-h-[80lvh]"
      >
        <h2 className="leading-10 md:leading-tight mb-4 md:text-[50px] text-[35px]">
          {`We manage your`}
          <span className="text-primary">{` social media `}</span>
        </h2>
        <p>
          Enhance your website's social media presence to reach out to more
          users Quis esse pariatur eu consequat sit adipisicing excepteur.
          Eiusmod ad ad esse sint pariatur excepteur pariatur culpa mollit
          adipisicing.
        </p>
      </SectionArea>
    </div>
  );
}
