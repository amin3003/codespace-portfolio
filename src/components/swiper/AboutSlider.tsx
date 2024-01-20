// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { EffectCoverflow, Pagination } from "swiper/modules";
import Image from 'next/image';

export default function AboutSlider(props: any) {
	const swiperOptions = {
		effect: 'coverflow',
		grabCursor: true,
		slideToClickedSlide: true,
		centeredSlides: true,
		slidesPerView: 'auto',
		coverflowEffect: {
			rotate: 50,
			stretch: 0,
			depth: 100,
			modifier: 1,
			slideShadows: false,
		},
		pagination: {
			clickable: true, // Enable navigation through pagination bullets
		},
		modules: [EffectCoverflow, Pagination],
		style: { width: '100%', paddingTop: '50px', paddingBottom: '50px' },
		initialSlide: 1, // Set the default active slide to be the second slide
	};

	return (
		<>
			<Swiper {...(swiperOptions as any)}>
				{props.data.map((r: any, index: any) => {
					return (
						<SwiperSlide
							className="bg-base-100"
							key={index}
							style={{
								backgroundPosition: 'center',
								backgroundSize: 'cover',
								background: 'none',
								borderRadius: '18px',
								width: '300px',
								height: '300px',
							}}
						>
							<div className="flex card w-[300px] h-[350px] bg-base-100 ">
								<div className="card-body content-center justify-center ">
									<div className="avatar justify-center">
										<div className="w-24 rounded-full "></div>
									</div>
									<h2 className="card-title justify-center">{r.name}</h2>
									<h3 className="flex justify-center text-secondary">{r.position}</h3>
									<p className="flex text-justify text-sm">{r.desc}</p>
									<div className="card-actions justify-center"></div>
								</div>
							</div>
						</SwiperSlide>
					);
				})}
			</Swiper>
		</>
	);
}
