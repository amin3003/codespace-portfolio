'use client';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import SectionArea from '@/components/Section/SectionArea';
import ThreeCanvas from '@/components/Three/ThreeCanvas';
import StarPage from '@/components/Three/StarPage';
export default function PageContact() {
	return (
		<div className="px-[10%]">
			<ThreeCanvas>
				<StarPage />
			</ThreeCanvas>
			<SectionArea
				title="Contact us"
				orientation="vertical"
				className="flex h-100lvh justify-between gap-2 flex-col"
			>
				<div>a</div>
				<div>a</div>
				<div>a</div>
			</SectionArea>
		</div>
	);
}
