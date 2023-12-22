'use client';

import React from 'react';
import Link from 'next/link';
import { localeNames, defaultLocale } from '@/i18nConfig';
import { useLocale } from 'next-intl';
import { custom_trim } from '@azrico/string';
import { useRouter, usePathname } from 'next/navigation';
//https://daisyui.com/components/dropdown/

export default function LangSwitcher() {
	const locale = useLocale();
	const router = useRouter();
	const pathName = usePathname();
	const currentLocaleName = localeNames[locale] || localeNames[defaultLocale];

	/**
	 * changes url to current url but in another language
	 * @param ln
	 */
	function switchLang(ln = 'en') {
		let path_parts = custom_trim(pathName, '/').split('/'); //trim `/` from the current url
		path_parts = path_parts.filter((s) => s != locale); //remove the current language from current lang
		path_parts.unshift(ln || 'en'); // add new lang to the path
		let final_path = path_parts.join('/'); //rebuild the url
		router.push(final_path); //update the url to new url
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
	// return (
	// 	<div className="flex items-center md:order-2 space-x-1 md:space-x-0 rtl:space-x-reverse">
	// 		<button
	// 			type="button"
	// 			data-dropdown-toggle="language-dropdown-menu"
	// 			className="inline-flex items-center font-medium justify-center px-4 py-2 text-sm text-gray-900 dark:text-white rounded-lg cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
	// 		>
	// 			{locale}
	// 		</button>
	// 		{/*  Dropdown  */}
	// 		<div
	// 			className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700"
	// 			id="language-dropdown-menu"
	// 		>
	// 			<ul className="py-2 font-medium" role="none">
	// 				<li>
	// 					<Link
	// 						href="/"
	// 						locale="en"
	// 						className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
	// 						role="menuitem"
	// 					>
	// 						<div className="inline-flex items-center">English (US)</div>
	// 					</Link>
	// 				</li>
	// 				<li>
	// 					<Link
	// 						href="/"
	// 						locale="tr"
	// 						className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
	// 						role="menuitem"
	// 					>
	// 						<div className="inline-flex items-center">Turkish</div>
	// 					</Link>
	// 				</li>
	// 			</ul>
	// 		</div>
	// 		<button
	// 			data-collapse-toggle="navbar-language"
	// 			type="button"
	// 			className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
	// 			aria-controls="navbar-language"
	// 			aria-expanded="false"
	// 		>
	// 			<span className="sr-only">Open main menu</span>
	// 			<svg
	// 				className="w-5 h-5"
	// 				aria-hidden="true"
	// 				xmlns="http://www.w3.org/2000/svg"
	// 				fill="none"
	// 				viewBox="0 0 17 14"
	// 			>
	// 				{/* <path
	// 					stroke="currentColor"
	// 					stroke-linecap="round"
	// 					stroke-linejoin="round"
	// 					stroke-width="2"
	// 					d="M1 1h15M1 7h15M1 13h15"
	// 				/> */}
	// 			</svg>
	// 		</button>
	// 	</div>
	// );
}
