'use client';
import Typewriter from 'typewriter-effect';
export function MockupSite() {
	return (
		<>
			<div className="mockup-browser border border-white h-[300px] m-4 w-[330px]">
				<div className="mockup-browser-toolbar">
					<div className="input border !flex items-center border-inherit !w-full text-xs md:text-md">
						<Typewriter
							options={{
								delay: 60,
								deleteSpeed: 40,

								strings: ['https://yourwebsite.com', 'https://codespase.com'],
								autoStart: true,
								loop: true,
							}}
						/>
					</div>
				</div>
				<div className="flex justify-center border-t border-inherit">
					<div className="flex flex-col w-full h-full p-5">
						<div className="skeleton h-5 w-full" />
						<div className="py-5 gap-2 grid sm:grid-cols-1 md:grid-cols-2 grid-rows-3">
							<div className="skeleton h-32 row-span-3" />
							<div className="skeleton invisible md:visible" />
							<div className="skeleton row-span-2 invisible md:visible" />
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
export default MockupSite;
