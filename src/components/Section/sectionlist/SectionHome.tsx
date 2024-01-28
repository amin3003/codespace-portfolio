import { sectionProps } from "./types";
import React from "react";
import MockupSite from "@c/MockupSite/MockupSite";
import Image from "next/image";

export default function SectionHome(props: sectionProps) {
  return (
		<div id="section-home" className="flex flex-col p-2 min-h-lvh">
			<div className="flex flex-col lg:flex-row items-center justify-center lg:px-10  lg:pt-5">
				<div className="flex flex-1 flex-col p-5 text-center">
					<h3 className="my-0">
						Crafting standout <span className="text-primary">Websites</span> and
						<br /> mastering <span className="text-primary">Social media </span>
						for businesses
					</h3>
					<h5>we bring your brand to life online, making every click count</h5>
					<div className="flex justify-center items-center gap-5">
						<button className="btn lg:btn-md btn-sm btn-secondary text-white">
							Glass button
						</button>
						<button className="btn lg:btn-sm btn-xs btn-outline btn-secondary hover:!text-white">
							Glass button
						</button>
					</div>
				</div>
				<div className="flex lg:flex-row flex-1 flex-col">
					<Image
						src={`/images/browser.svg`}
						// layout="responsive"
						className="w-full h-auto sm:opacity-[1] opacity-[0.7]"
						alt="Image"
						width={600} // Set a default width (can be adjusted based on your design)
						height={600} // Set a default height (can be adjusted based on your design)
					/>
				</div>
			</div>
			<a
				className="mx-auto flex flex-row gap-6 mt-5 animate-bounce"
				href="#section-skills"
			>
				<i className="bi bi-arrow-down-circle-fill text-[25px]"></i>
			</a>
		</div>
	);
}
