import React from 'react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import 'bootstrap-icons/font/bootstrap-icons.css';

import AppHeader from '@c/Header/AppHeader';
import Footer from '@c/Footer/Footer';

const inter = Inter({ subsets: ['latin'] });
import { notFound } from 'next/navigation';

// Can be imported from a shared config
const locales = ['en', 'tr'];

export const metadata: Metadata = {
	title: 'Portfolio',
	description: '',
};

export default function RootLayout({ children, params: { locale } }: any) {
	if (!locales.includes(locale as any)) notFound();
	return (
		<html lang={locale} data-theme="draclua">
			<body className={inter.className}>
				<AppHeader />
				<main className="flex-1 overflow-y-auto min-h-screen ">{children}</main>
				<Footer />
			</body>
		</html>
	);
}
