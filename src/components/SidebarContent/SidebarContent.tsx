import { header_paths } from '@c/Header/AppHeader';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

export default function SidebarContent() {
	const t = useTranslations('navbar');

	return (
		<ul className="menu p-4 w-80 min-h-full bg-base-200">
			{header_paths.map((v, i) => {
				return (
					<li key={i} className="text-md">
						<Link href={`${v.path}`}>
							<b>{v.name}</b>
						</Link>
					</li>
				);
			})}
		</ul>
	);
}
