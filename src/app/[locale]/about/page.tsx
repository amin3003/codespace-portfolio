import { useTranslations } from 'next-intl';

export default function About() {
	const t = useTranslations('basic');
	return (
		<div className="flex min-h-screen justify-between p-24 gap-2 flex-col">
			<h1>{t('about')}</h1>
		</div>
	);
}
