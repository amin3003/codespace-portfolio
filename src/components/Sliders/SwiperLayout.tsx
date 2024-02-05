'use client';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';
import Image from 'next/image';
import { wrap_array } from '@azrico/object';
import { useBlock } from '@c/shared/Blocks';
import clsx from 'clsx';

export default function SwiperLayout(props: { content: any; className?: string }) {
	const swiperOptions = {
		effect: 'coverflow',
		grabCursor: false,
		slideToClickedSlide: true,
		centeredSlides: true,
		slidesPerView: 'auto',
		coverflowEffect: {
			rotate: 0,
			stretch: 1,
			depth: 35,
			modifier: 1,
			slideShadows: false,
		},
		pagination: {
			clickable: true, // Enable navigation through pagination bullets
		},
		modules: [EffectCoverflow, Pagination],
		style: { width: '100%' },
		initialSlide: 1, // Set the default active slide to be the second slide
	};

	return (
		<>
			<div
				className={clsx(
					'hidden md:flex flex-row w-full justify-center items-center',
					props.className
				)}
			>
				{wrap_array(props.content).map((r: any, i: any) => {
					return (
						<div key={i} className="w-[300px] h-full p-2">
							{r}
						</div>
					);
				})}
			</div>
			<div className="md:hidden w-full">
				<Swiper {...(swiperOptions as any)}>
					{wrap_array(props.content).map((r: any, i: any) => {
						return (
							<SwiperSlide
								key={i}
								style={{
									backgroundPosition: 'center',
									backgroundSize: 'cover',
									background: 'none',
									borderRadius: '18px',
									width: '300px',
									padding: '0.5em',
									height: 'auto',
								}}
							>
								{r}
							</SwiperSlide>
						);
					})}
				</Swiper>
			</div>
		</>
	);
}
