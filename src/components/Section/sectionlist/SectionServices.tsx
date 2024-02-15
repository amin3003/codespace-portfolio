import { sectionProps } from './types';
import React from 'react';
import MockupSite from '@c/MockupSite/MockupSite';
import { div } from 'three/examples/jsm/nodes/Nodes.js';
import clsx from 'clsx';
import Link from '@/navigation';
import Service from '@/data/Service';
import { capitalize } from '@azrico/string';
import SectionArea from '@c/Section/SectionArea';
import ServiceBlock from '@/components/Service/ServiceBlock';
import SwiperLayout from '@/components/Sliders/SwiperLayout';

export default function SectionServices(props: sectionProps) {
	const services = Service.get_list();
	 
	return (
		<SectionArea
			id="section-services"
			center
			title={'Services'}
			dynamicMargin
			dynamicTitleSize
			orientation="vertical"
			className="min-h-lvh mt-20"
		>
			<SwiperLayout
				className={'pt-8'}
				content={services.map((r, i) => {
					return <ServiceBlock service={r} key={i} />;
				})}
			/>
			{/* <div className="flex flex-wrap justify-center gap-3 pt-20"></div> */}
		</SectionArea>
	);
}
