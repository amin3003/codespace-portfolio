'use client';
import AppLogo from './AppLogo';
import { gfilter } from '@azrico/global';
import React, { useState } from 'react';
import { Link } from '../../src/navigation';
import { useTranslations } from 'next-intl';
import { useRouter } from '../../src/navigation';
export default async function AppHeader() {
	const [lang, setLang] = useState('English (US)');
	const data = [
		{
			name: 'Home',
			path: '/home',
		},
		{
			name: 'About',
			path: '/about',
		},
		{
			name: 'Contect',
			path: '/contect',
		},
		{
			name: 'Portfolio',
			path: '/portfolio',
		},
	];
	return (
		<nav className="bg-white border-gray-200 dark:bg-gray-900">
			<div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
				<a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
					{/* <img
            src=""
            className="h-8"
            alt="chiztech logo"
          /> */}
					<div>
						<span className="self-center text-2xl font-semibold whitespace-nowrap text-orange-400">
							Chiz
						</span>
						<span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white ml-1 text-lg">
							|Tech
						</span>
					</div>
				</a>
				<div className="flex items-center md:order-2 space-x-1 md:space-x-0 rtl:space-x-reverse">
					<button
						type="button"
						data-dropdown-toggle="language-dropdown-menu"
						className="inline-flex items-center font-medium justify-center px-4 py-2 text-sm text-gray-900 dark:text-white rounded-lg cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
					>
						{lang}
					</button>
					{/*  Dropdown  */}
					<div
						className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700"
						id="language-dropdown-menu"
					>
						<ul className="py-2 font-medium" role="none">
							<li>
								<Link
									href="/"
									locale="en"
									className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
									role="menuitem"
								>
									<div className="inline-flex items-center">English (US)</div>
								</Link>
							</li>
							<li>
								<Link
									href="/"
									locale="tr"
									className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
									role="menuitem"
								>
									<div className="inline-flex items-center">Turkish</div>
								</Link>
							</li>
						</ul>
					</div>
					<button
						data-collapse-toggle="navbar-language"
						type="button"
						className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
						aria-controls="navbar-language"
						aria-expanded="false"
					>
						<span className="sr-only">Open main menu</span>
						<svg
							className="w-5 h-5"
							aria-hidden="true"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 17 14"
						>
							<path
								stroke="currentColor"
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M1 1h15M1 7h15M1 13h15"
							/>
						</svg>
					</button>
				</div>
				<div
					className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
					id="navbar-language"
				>
					<ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
						{data.map((valu, index) => {
							return (
								<li>
									<Link
										href={`${valu.path}`}
										className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-white md:p-0 md:dark:text-white"
										aria-current="page"
									>
										{valu.name}
									</Link>
								</li>
							);
						})}
					</ul>
				</div>
			</div>
		</nav>
	);
}
