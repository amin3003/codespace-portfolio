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
					'dropdown',
					`${props.openUp ? 'dropdown-top' : 'dropdown-bottom'}`
				)}
			>
				<button tabIndex={0} role="button" className="btn btn-sm btn-ghost">
					<div className="flex flex-row gap-2">
						<i
							className={clsx('bi', props.openUp ? 'bi-chevron-up' : 'bi-chevron-down')}
						></i>
						<p>{currentLocaleName}</p>
					</div>
				</button>

				<ul className="menu dropdown-content z-[1] p-2 shadow bg-base-100 rounded-box right-0">
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
