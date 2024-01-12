import React from 'react';
import AppHeader from '@c/Header/AppHeader';
import Footer from '@c/Footer/Footer';
import { notFound } from 'next/navigation';
import { locales } from '@/i18nConfig';
import { NextIntlClientProvider, useMessages } from 'next-intl';
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
