// import React from 'react';
// import type { Metadata } from 'next';
// import { Inter } from 'next/font/google';
// import './globals.css';
// import 'bootstrap-icons/font/bootstrap-icons.css';

// import AppHeader from '@c/Header/AppHeader';
// import Footer from '@c/Footer/Footer';

// const inter = Inter({ subsets: ['latin'] });

// export const metadata: Metadata = {
// 	title: 'Redronic',
// 	description: '',
// };

// export default function RootLayout({ children }: { children: React.ReactNode }) {
// 	return (
// 		<html lang="en" data-theme="dark">
// 			<body className={inter.className}>
// 				<AppHeader />
// 				<main className="flex-1 overflow-y-auto min-h-screen">{children}</main>
// 				<Footer />
// 			</body>
// 		</html>
// 	);
// }




import {notFound} from 'next/navigation';
 
// Can be imported from a shared config
const locales = ['en', 'tr'];
 
export default function LocaleLayout({children, params: {locale}}) {
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale as any)) notFound();
 
  return (
    <html lang={locale}>
      <body>{children}</body>
    </html>
  );
}