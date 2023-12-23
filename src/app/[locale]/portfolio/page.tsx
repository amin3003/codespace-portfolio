import { useTranslations } from 'next-intl';

export default function Portfolio() {
	const t = useTranslations('basic');
	return (
		<div className="flex min-h-screen justify-between p-24 gap-2 flex-col">
			<h1>{t('portfolio')}</h1>
		</div>
	);
}
