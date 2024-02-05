import { header_paths } from '@c/Header/AppHeader';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import LangSwitcher from '@c/Header/LangSwitcher';

export default function SidebarContent() {
	const translate_nav = useTranslations('nav');

	return (
		<div className="p-4 min-h-full !w-[75%] bg-base-200 flex flex-col">
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
			<ul className="menu">
				<LangSwitcher openUp alwaysFullText className="navbar-end" />
			</ul>
		</div>
	);
}
