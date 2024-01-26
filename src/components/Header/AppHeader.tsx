import ScrollDetector from '@c/ScrollDetector/ScrollDetector';
import React from 'react';
import { useTranslations } from 'next-intl';
import Link from '@/navigation';
const AppLogo = React.lazy(() => import('./AppLogo'));
const LangSwitcher = React.lazy(() => import('./LangSwitcher'));

export const header_paths = [
	{
		name: 'home',
		path: '/',
	},
	{
		name: 'Services',
		path: '/services',
	},
	{
		name: 'contact',
		path: '/contact',
	},
];

export default function AppHeader() {
	const t = useTranslations('navbar');
	return (
		<>
			<header
				id="header"
				className={
					//animated bg change
					' transition-all duration-1000 delay-0' +
					//change background based on scroll
					' data-[is-top=false]:bg-[#aaaaaa11] bg-transparent' +
					//header
					' navbar sticky justify-between' +
					//change sticky based on scroll
					' data-[is-going-down=true]:top-[-100%]' +
					' data-[is-going-down=false]:top-0' +
					//other classes
					' data-[is-top=false]:shadow-md'
				}
			>
				<ScrollDetector />
				<React.Suspense fallback={null}>
					<div>
						<div className="flex-none md:hidden">
							<label
								htmlFor="my-drawer"
								aria-label="open sidebar"
								className="btn btn-square btn-ghost"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									className="inline-block w-6 h-6 stroke-current"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M4 6h16M4 12h16M4 18h16"
									></path>
								</svg>
							</label>
						</div>
						<AppLogo text className="navbar-start hidden md:flex" />
					</div>

					<div className="navbar-center justify-between items-center hidden md:flex w-full md:w-auto">
						{/*	https://daisyui.com/components/menu/ */}
						<ul className="flex flex-row rounded-box">
							{header_paths.map((v, i) => {
								return (
									<li key={i} className="btn btn-sm btn-ghost">
										<Link href={`${v.path}`}>
											<b>{t(String(v.name).toLocaleLowerCase())}</b>
										</Link>
									</li>
								);
							})}
						</ul>
					</div>
					<LangSwitcher className="navbar-end hidden md:block" />
				</React.Suspense>
			</header>
		</>
	);
}
