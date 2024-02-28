// "use client";
import MockupSite from "@c/MockupSite/MockupSite";
import SectionHero from '@/components/Section/SectionHero';
import { sectionProps } from './types';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
export default function SectionSteps(props: sectionProps) {
	const t = useTranslations('sectionSteps');
	return (
		<div id="section-steps" className="flex flex-col gap-3">
			<SectionHero
				title={1}
				image={'ipad'}
				width={700}
				height={300}
				// widthMain={700}
				className="min-h-[80lvh]"
			>
				<h2 className="leading-10 md:leading-tight mb-4 md:text-[50px] text-[35px]">
					{t('webDesign.title')}
				</h2>
				<p>{t('webDesign.description')}</p>
			</SectionHero>
			<SectionHero
				title={2}
				image={'makbook'}
				width={730}
				height={432}
				widthMain={500}
				mirror
				className="min-h-[80lvh]"
			>
				<h2 className="leading-10 md:leading-tight mb-4 md:text-[50px] text-[35px]">
					{t('websiteDevelopment.title')}
				</h2>
				<p>{t('websiteDevelopment.description')}</p>
			</SectionHero>
			<SectionHero
				title={3}
				image={'phone'}
				width={300}
				height={200}
				widthMain={300}
				className="min-h-[80lvh]"
			>
				<h2 className="leading-10 md:leading-tight mb-4 md:text-[50px] text-[35px]">
					{t('mediaManager.title')}
				</h2>
				<p>{t('mediaManager.description')}</p>
			</SectionHero>
		</div>
	);
}
