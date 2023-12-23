'use client';

import React from 'react';
import { localeNames, defaultLocale } from '@/i18nConfig';
import { useLocale } from 'next-intl';
import { useRouter, usePathname, redirect } from '@src/navigation';
const FULL_RELOAD = true;
export default function LangSwitcher() {
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
			}, 250);
		}
	}

	//TODO flags for each language
	return (
		<div className="dropdown">
			<div tabIndex={0} role="button" className="btn m-1">
				{currentLocaleName}
			</div>
			<ul
				tabIndex={0}
				className="dropdown-content z-[1] menu p-2 shadow bg-base-200 rounded-box w-52"
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
	);
}
