import { sectionProps } from "./types";
import React from "react";
import MockupSite from "@c/MockupSite/MockupSite";
import { div } from "three/examples/jsm/nodes/Nodes.js";
import clsx from 'clsx';
import Link from '@/navigation';
import Service from '@/data/Service';
import { capitalize } from '@azrico/string';


export default function SectionSkills(props: sectionProps) {
	const services = Service.get_list();
	return (
		<div id="section-skills" className="flex flex-col gap-12 p-4 min-h-lvh">
			<div className="flex flex-row items-center justify-center pt-4">
				<div className="flex flex-col text-center">
					<h3 className="m-0">The Powerhouse Of Your Business</h3>
					<h5>The Expertise Essential for Elevating Your Business</h5>
				</div>
			</div>
			<div className={`flex flex-wrap justify-center gap-6`}>
				{services.map((r, i) => {
					const block_style = { '--blockcolor': r.color } as React.CSSProperties;
					return (
						<Link key={i} href={`/${r.url}`}>
							<div
								style={block_style}
								key={i}
								className={clsx(
									`card h-[110px] md:h-[120px]`,
									`transition ease-in-out hover:-translate-y-1 hover:scale-105 hover:duration-300`,
									`aspect-square bg-gradient-to-r from-base-300 to-accent-content justify-center items-center`,
									`border-2 border-[--blockcolor] shadow-sm`
								)}
							>
								<i className={`bi ${r.icon} text-[40px] text-[--blockcolor]`}></i>
								<span className="flex flex-col justify-center items-center">
									{r.title.split(' ').map((title_sp, i) => {
										return (
											<h5 key={i} className="text-center md:text-[15px] text-[13px] m-0">
												{capitalize(title_sp)}
											</h5>
										);
									})}
								</span>
							</div>
						</Link>
					);
				})}
			</div>
		</div>
	);
}
