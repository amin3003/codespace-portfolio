import { sectionProps } from "./types";
import React from "react";
import MockupSite from "@c/MockupSite/MockupSite";
import { div } from "three/examples/jsm/nodes/Nodes.js";
import clsx from 'clsx';

const skillsList = [
	{ text: ['Website', 'Design'], icon: 'bi bi-code-slash', color: '#db2777' },
	{ text: ['Website', 'Development'], icon: 'bi bi-window-stack', color: '#ea580c' },
	{ text: ['Media', 'Management'], icon: 'bi bi-kanban', color: '#7e22ce' },
	{ text: ['SEO'], icon: 'bi bi-graph-up-arrow', color: '#0d9488' },
	{ text: ['Content ', 'Marketing'], icon: 'bi bi-blockquote-right', color: '#16a34a' },
];
export default function SectionSkills(props: sectionProps) {
	return (
		<div id="section-skills" className="flex flex-col gap-12 p-4 min-h-lvh">
			<div className="flex flex-row items-center justify-center pt-20 ">
				<div className="flex flex-col text-center">
					<h3 className="m-0">The Powerhouse Of Your Business</h3>
					<h5>The Expertise Essential for Elevating Your Business</h5>
				</div>
			</div>
			<div className={`flex flex-wrap justify-center gap-9`}>
				{skillsList.map((r, i) => {
					const block_style = { '--blockcolor': r.color } as React.CSSProperties;
					return (
						<div
							style={block_style}
							key={i}
							className={clsx(
								`card h-[120px]`,
								`transition ease-in-out hover:-translate-y-1 hover:scale-110 hover:duration-300`,
								`aspect-square bg-gradient-to-r from-base-300 to-accent-content justify-center items-center`,
								`border-2 border-[--blockcolor] shadow-sm `
							)}
						>
							<i className={`${r.icon} text-[40px] text-[--blockcolor]`}></i>
							<span className="flex flex-col justify-center items-center h-20">
								<h5 className="text-center m-0">{r.text[0]}</h5>
								<h5 className="text-center m-0">{r.text[1]}</h5>
							</span>
						</div>
					);
				})}
			</div>
			<a className="mx-auto flex flex-row gap-2 mt-5 " href="#">
				DISCOVER
				<i className="bi bi-arrow-right-circle-fill" />
			</a>
		</div>
	);
}
