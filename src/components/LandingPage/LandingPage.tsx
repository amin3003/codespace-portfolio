import Image from 'next/image';
import { useTranslations } from 'next-intl';

export default function LandingPage() {
	const t = useTranslations('Home');

	return (
		<div className="h-full w-full relative">
			<Image
				className="h-full w-full absolute min-h-screen"
				src="/bg.jpg"
				alt="bg"
				width={2048}
				height={1024}
			/>
			<h2 className="absolute text-3xl top-1/2 left-1/2">{t('title')}</h2>
			<Image
				className="relative top-1/2 left-2"
				src="/alien.svg"
				alt="bg"
				width={256}
				height={256}
			/>
		</div>
	);
}
