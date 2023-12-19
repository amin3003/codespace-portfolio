import React from 'react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
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

export default function RootLayout({ children }: any) {
	return children;
}
