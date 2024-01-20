import React from 'react';
import { notFound } from 'next/navigation';
import { locales } from '@/i18nConfig';
import { useTranslations } from 'next-intl';
import { gtranslate } from '@azrico/global';
import TranslationHelper from '@c/TranslationHelper/TranslationHelper';

const Footer = React.lazy(() => import('@c/Footer/Footer'));
const AppHeader = React.lazy(() => import('@c/Header/AppHeader'));

export default function LocaleLayout({ children, params: { locale } }: any) {
	// Validate that the incoming `locale` parameter is valid
	if (!locales.includes(locale as any)) notFound();

	return (
		<html lang={locale} data-theme="dracula">
			
			<body className="overflow-x-clip">
				<AppHeader />
				<main>{children}</main>
				<Footer />
			</body>
		</html>
	);
}
