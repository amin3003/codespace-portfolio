import { header_paths } from '@c/Header/AppHeader';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import LangSwitcher from '@c/Header/LangSwitcher';
import { Link, getServerPathname } from '@src/navigation';

import { SidebarController } from './SidebarController';
export default function SidebarContent() {
	const translate_nav = useTranslations('nav');

	return (
		<div className="p-4 min-h-full !w-[75%] bg-base-200 flex flex-col">
			<SidebarController />
			<section className="flex flex-row flex-1">
				<ul className="menu flex-1">
					{header_paths.map((v, i) => {
						return (
							<li key={i} className="text-md">
								<Link href={`${v.path}`}>
									<b>{translate_nav(String(v.name).toLowerCase())}</b>
								</Link>
							</li>
						);
					})}
				</ul>
				<button id="btn-close-sidebar" className="btn btn-sm btn-ghost btn-circle">
					<Image
						style={{ maxWidth: '70%' }}
						src={`/images/close.svg`}
						width={200}
						height={200}
						alt="contact"
					/>
				</button>
			</section>

			<ul className="menu">
				<LangSwitcher openUp className="navbar-end" />
			</ul>
		</div>
	);
}
