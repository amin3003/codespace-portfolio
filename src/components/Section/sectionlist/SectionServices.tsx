import { sectionProps } from './types';
import React from 'react';
import MockupSite from '@c/MockupSite/MockupSite';
import { div } from 'three/examples/jsm/nodes/Nodes.js';
import clsx from 'clsx';
import Link from '@/navigation';
import Service from '@/data/Service';
import { capitalize } from '@azrico/string';
import SectionHero from '@/components/Section/SectionHero';
import ServiceBlock from '@/components/Service/ServiceBlock';
import SwiperLayout from '@/components/Sliders/SwiperLayout';
import { GlassTextBehind } from '@/components/shared/GlassTextBehind';

export default function SectionServices(props: sectionProps) {
	const services = Service.get_list();

	return (
		<GlassTextBehind title={'Services'} center dynamicMargin dynamicTitleSize>
			<SwiperLayout
				className={'py-16'}
				content={services.map((r, i) => {
					return <ServiceBlock service={r} key={i} />;
				})}
			/>
		</GlassTextBehind>
	);
}
