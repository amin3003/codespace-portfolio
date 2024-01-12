import AppLogo from '@c/Header/AppLogo';
import ScrollDetector from '@c/ScrollDetector/ScrollDetector';
import { gfilter } from '@azrico/global';
import React, { useState } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import Link from '@/navigation';
import LangSwitcher from './LangSwitcher';

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
	//TODO better theme colors (bg-base-300)
	return (
		<header
			id="header"
			style={{ top: -1 ,display:"flex" , justifyContent:"space-between"}}
			className={
				//animated bg change
				'navbar'+
				'transition-all duration-500'
				
			}
		>
			<ScrollDetector />
			<AppLogo text={true} className="navbar-start" />
			<div className="navbar-center justify-between items-center  hidden md:flex w-full md:w-auto">
				{/*	https://daisyui.com/components/menu/ */}
				<ul className="menu menu-horizontal rounded-box">
					{paths.map((v, i) => {
						return (
							<li key={i} className="text-lg">
								<Link href={`${v.path}`}>
									<b>{t(v.name)}</b>
								</Link>
							</li>
						);
					})}
				</ul>
			</div>
			<LangSwitcher className="navbar-end" />
		</header>
	);
}
