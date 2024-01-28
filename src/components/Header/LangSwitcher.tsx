'use client';

import React from 'react';
import { localeNames, defaultLocale } from '@/i18nConfig';
import { useLocale } from 'next-intl';
import { useRouter, usePathname, redirect } from '@src/navigation';
import clsx from 'clsx';
const FULL_RELOAD = false;
export default function LangSwitcher(props: { className?: string; openUp?: boolean }) {
	const locale = useLocale();
	const router = useRouter();
	const pathname = usePathname();
	const currentLocaleName = localeNames[locale] || localeNames[defaultLocale];

	/**
	 * changes url to current url but in another language
	 * @param newLocale
	 */
	function switchLang(newLocale = 'en') {
		router.push(pathname, { locale: newLocale }); //update the url to new url

		//only pushing the new locale should be enough,
		//but to avoid very rare errors we fully reload the page
		if (FULL_RELOAD) {
			setTimeout(() => {
				location.reload();
			}, 300);
		}
	}

	//TODO flags for each language
	return (
		<div className={clsx('flex items-stretch px-2 w-min', props.className)}>
			<div
				className={clsx(
					'dropdown dropdown-hover',
					`${props.openUp ? 'dropdown-top' : 'dropdown-bottom'}`
				)}
			>
				<div tabIndex={0} role="button" className="btn btn-ghost m-1 w-6rem">
					{currentLocaleName}
				</div>
				<ul
					style={{ right: 'auto', left: 'auto', width: '6rem' }}
					tabIndex={0}
					className="dropdown-content z-[1] menu p-2 shadow bg-base-200 rounded-box items-center"
				>
					{Object.keys(localeNames).map((r) => {
						return (
							<li key={r}>
								<button onClick={() => switchLang(r)}>{localeNames[r] || r}</button>
							</li>
						);
					})}
				</ul>
			</div>
		</div>
	);
}
