import { useTranslations } from 'next-intl';

export default function Contact() {
	const t = useTranslations('navbar');
	return (
		<div className="flex min-h-screen justify-between p-24 gap-2 flex-col">
			<h1>{t('contact')}</h1>
		</div>
	);
}
