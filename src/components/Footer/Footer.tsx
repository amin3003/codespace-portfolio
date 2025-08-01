import AppLogo from "@c/Header/AppLogo";
// import Instagram from "bootstrap-icons";
import Github from "bootstrap-icons/icons/github.svg";
import Facebook from "bootstrap-icons/icons/facebook.svg";
import { useLocale, useTranslations } from 'next-intl';
import Service from '@/data/Service';
import Link from '@/navigation';
import { defaultLocale, localeNames } from '@/i18nConfig';

export const header_paths = [
	{
		name: 'home',
		path: '/',
	},
	...Service.get_list().map((r) => {
		return {
			name: r.url,
			path: '/' + r.url,
		};
	}),
];

export default function Footer() {
	const currentYear = new Date().getFullYear();
	const translate_nav = useTranslations('nav');
	const locale = useLocale();
	const currentLocaleName = localeNames[locale] || localeNames[defaultLocale];
	const social_list = [
		{
			icon: 'bi-instagram',
			link: `https://www.instagram.com/codespase.${locale}`,
		},
		{ icon: 'bi-discord', link: 'https://discord.gg/YgrQkcvzM5' },
		{ icon: 'bi-envelope', link: 'mailto:codespase@gmail.com' },
	];
	return (
		<footer className=" text-white mx-auto flex flex-col gap-5 justify-betwee items-center">
			<AppLogo text small />
			<div>
				<ul className="flex flex-wrap justify-center md:justify-around sm:justify-around gap-3 text-xs">
					{/* <li>
						<a href="#" className="opacity-90 hover:opacity-100">
							Features
						</a>
					</li> */}
					{header_paths.map((v, i) => {
						return (
							<Link key={i} href={`${v.path}`} className="mx-2">
								<li className="opacity-90 hover:opacity-100 text-xs">
									{translate_nav(v.name)}
								</li>
							</Link>
						);
					})}
				</ul>
			</div>

			<div className="flex justify-center gap-5">
				{social_list.map((r, i) => {
					return (
						<a key={i} target="_blank" href={r.link}>
							<i className={`opacity-90 hover:opacity-100 bi ${r.icon}`} />
						</a>
					);
				})}
			</div>
			<p className="text-xs mb-4 text-gray-400">{`Copyright © ${
				currentYear != 2024 ? `2024-${currentYear}` : currentYear
			} All right reserved`}</p>
		</footer>
	);
}
