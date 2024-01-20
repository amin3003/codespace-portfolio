import ScrollDetector from '@c/ScrollDetector/ScrollDetector';
import React from 'react';
import { useTranslations } from 'next-intl';
import Link from '@/navigation';
const AppLogo = React.lazy(() => import('./AppLogo'));
const LangSwitcher = React.lazy(() => import('./LangSwitcher'));

const paths = [
	{
		name: 'home',
		path: '/',
	},
	{
		name: 'about',
		path: '/about',
	},
	{
		name: 'contact',
		path: '/contact',
	},
];

export default function AppHeader() {
	const t = useTranslations('navbar');
	return (
		<header
			id="header"
			className={
				//animated bg change
				' transition-all duration-1000 delay-0' +
				//change background based on scroll
				' data-[is-top=false]:bg-base-100 bg-transparent' +
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
				<AppLogo text={true} className="navbar-start" />
				<div className="navbar-center justify-between items-center  hidden md:flex w-full md:w-auto">
					{/*	https://daisyui.com/components/menu/ */}
					<ul className="menu menu-horizontal rounded-box">
						{paths.map((v, i) => {
							return (
								<li key={i} className="text-md">
									<Link href={`${v.path}`}>
										<b>{t(v.name)}</b>
									</Link>
								</li>
							);
						})}
					</ul>
				</div>
				<LangSwitcher className="navbar-end" />
			</React.Suspense>
		</header>
	);
}
