import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

export default function ServicesSlider(props: { data: any[] }) {
	return (
		<Swiper
			slidesPerView={1}
			spaceBetween={10}
			centeredSlides={false}
			pagination={{ clickable: true }}
			breakpoints={{
				640: {
					slidesPerView: 1,
					spaceBetween: 15,
				},
				768: {
					slidesPerView: 2,
					spaceBetween: 15,
				},
				1024: {
					slidesPerView: 4, //this value should be the same as the number of all boxes
					spaceBetween: 15,
				},
			}}
			modules={[Pagination]}
			className="mySwiper"
			autoplay={{ delay: 3000, disableOnInteraction: true }}
			style={{
				width: '100%',
				height: '100%',
				marginTop: '40px',
			}}
		>
			{props.data.map((r: any, i: any) => (
				<SwiperSlide
					key={i}
					className="bg-base-100"
					style={{ borderRadius: '0px', background: 'none' }}
				>
					<div
						className="flex justify-center items-center card 
bg-base-100 h-[400px] gap-8"
					>
						<div className="card-body">
							<h2 className="card-title text-center">{r.name}</h2>
							<p className="text-center text-[16 px]">{r.desc}</p>
							<div className="card-actions justify-center">
								<button className="btn btn-primary">Buy Now</button>
							</div>
						</div>
					</div>
				</SwiperSlide>
			))}
		</Swiper>
	);
}
