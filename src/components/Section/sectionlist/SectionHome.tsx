import { sectionProps } from "./types";
import React from "react";
import MockupSite from "@c/MockupSite/MockupSite";
import Image from "next/image";
import { Link } from '@/navigation';
import { useTranslations } from "next-intl";
import clsx from 'clsx';

export default function SectionHome(props: sectionProps) {
	const t = useTranslations('sectionHome');
	return (
		<div id="section-home" className="flex flex-col p-2 min-h-lvh">
			<div
				className={clsx(
					'flex flex-col lg:flex-row items-center justify-center lg:px-10 lg:pt-5',
					'min-h-[70lvh]'
				)}
			>
				<div className="flex flex-1 flex-col p-5 text-center">
					<h3 className="leading-tight md:leading-normal my-0">{t('title')}</h3>
					<h5>{t('subTitle')}</h5>
					<div className="flex justify-center items-center gap-5">
						<a href="#section-services">
							<button className="btn btn-md btn-ghost">{t('viewServices')}</button>
						</a>
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
				href="#section-steps"
			>
				<i className="bi bi-arrow-down-circle-fill text-[25px]"></i>
			</a>
		</div>
	);
}
