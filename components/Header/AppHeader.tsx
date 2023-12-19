import AppLogo from './AppLogo';
import { gfilter } from '@azrico/global';
import React from 'react';
import Link from 'next/link';

const initial_header_left_buttons = [
	{ url: 'rfq', text: 'Quote', icon: 'bi-compass' },
	{ url: 'basket', text: 'Basket', icon: 'bi-compass' },
];
const initial_topbar_left_buttons = [
	{ url: 'profile', text: 'Profile', icon: 'bi-person' },
	{ url: 'rfq', text: 'سفارش خرید از خارج', icon: 'bi-currency-dollar' },
	{ url: 'wiki', text: 'دانشنامه', icon: 'bi-wikipedia' },
	{ url: 'map', text: 'نقشه محصولات', icon: 'bi-compass' },
];
const initial_header_categories = [
	{ url: 'category/telecom', text: 'مخابرات' },
	{ url: 'category/medical', text: 'پزشکی' },
	{ url: 'category/sensor', text: 'سنسور ها' },
	{ url: 'category/robotic', text: 'رباتیک' },
	{ url: 'category/mechatronic', text: 'مکاترونیک' },
];
export default async function AppHeader() {
	const final_topbar_left_buttons = await gfilter.apply_filter(
		'topbar_left_buttons',
		initial_topbar_left_buttons
	);
	const final_header_left_buttons = await gfilter.apply_filter(
		'header_left_buttons',
		initial_header_left_buttons
	);
	const final_header_categories = await gfilter.apply_filter(
		'header_categories',
		initial_header_categories
	);

	return (
		<>
			<header
				style={{ top: -1 }}
				className="sticky z-50 bg-transparent p-3 w-full flex flex-row shadow-md gap-1"
			>
				<div className="flex-1">
					<RenderHeaderItems items={final_header_left_buttons} />
				</div>

				<RenderHeaderItems items={final_header_categories} />
				<AppLogo />
			</header>
		</>
	);
}
function RenderHeaderItems(props: any) {
	return (
		<ul className="menu menu-horizontal rounded-box">
			{props.items.map((r: any) => {
				return (
					<Link href={`/${r.url}`} key={r.url}>
						<li>
							<i className={'bi ' + r.icon}> {r.text}</i>
						</li>
					</Link>
				);
			})}
		</ul>
	);
}
