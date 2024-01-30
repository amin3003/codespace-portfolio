import AppLogo from "@c/Header/AppLogo";
// import Instagram from "bootstrap-icons";
import Github from "bootstrap-icons/icons/github.svg";
import Facebook from "bootstrap-icons/icons/facebook.svg";

const social_list = [
	{ icon: 'bi-instagram', link: 'https://www.instagram.com/codespase.en' },
	{ icon: 'bi-discord', link: '' },
	{ icon: 'bi-envelope', link: '' },
];
export default function Footer() {
	const currentYear = new Date().getFullYear();
	return (
		<footer className=" text-white mx-auto flex flex-col gap-5 justify-betwee items-center">
			<AppLogo text small />
			{/* <div>
				<ul className="flex flex-wrap justify-center md:justify-around sm:justify-around gap-3 text-xs">
					<li>
						<a href="#" className="opacity-90 hover:opacity-100">
							Features
						</a>
					</li>
					<li>
						<a href="#" className="opacity-90 hover:opacity-100">
							Company
						</a>
					</li>
					<li>
						<a href="#" className="opacity-90 hover:opacity-100">
							Pricing
						</a>
					</li>
					<li>
						<a href="#" className="opacity-90 hover:opacity-100">
							Blog
						</a>
					</li>
					<li>
						<a href="#" className="opacity-90 hover:opacity-100">
							Changelog
						</a>
					</li>
				</ul>
			</div> */}
			<div className="flex justify-center gap-5">
				{social_list.map((r, i) => {
					return (
						<a key={i} target="_blank" href={r.link}>
							<i className={`opacity-90 hover:opacity-100 bi ${r.icon}`} />
						</a>
					);
				})}
			</div>
			<p className="text-xs mb-4 text-gray-400">{`Copyright © ${currentYear}- All right reserved`}</p>
		</footer>
	);
}
