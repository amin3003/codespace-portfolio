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
			style={{ top: -1 }}
			className={
				//change background based on scroll
				'data-[is-top=false]:bg-base-100 bg-transparent' +
				//animated bg change
				' transition-all duration-500' +
				//header
				' navbar sticky' +
				//other classes
				' data-[is-top=false]:shadow-md'
			}
		>
			<ScrollDetector />
			<AppLogo text={true} className="navbar-start" />
			<div className="navbar-center items-center justify-between hidden md:flex w-full md:w-auto">
				{/*	https://daisyui.com/components/menu/ */}
				<ul className="menu menu-horizontal rounded-box">
					{paths.map((v, i) => {
						return (
							<li key={i}>
								<Link href={`${v.path}`}>{t(v.name)}</Link>
							</li>
						);
					})}
				</ul>
			</div>
			<LangSwitcher className="navbar-end" />
		</header>
	);
}
