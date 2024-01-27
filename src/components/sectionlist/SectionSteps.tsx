'use client';
import MockupSite from '../MockupSite/MockupSite';
import SectionArea from '../Section/SectionArea';
import { sectionProps } from './types';
import Image from 'next/image';
export default function SectionSteps(props: sectionProps) {
	return (
		<div id="steps" className="flex flex-col px-[5%]">
			<SectionArea title={1} className="min-h-[90lvh]" image={<MockupSite/>}>
				<h2>We design and create the ideal website for your business</h2>
				<p>
					For any business. big or small. having a website helps you reach out to more
					customers
				</p>
				
			</SectionArea>
			<SectionArea title={2} image={'seo'} mirror className="min-h-[90lvh]">
				<h2>
					{`Enhance your website's search visibility by using best`}
					<span className="text-primary">{` SEO `}</span>
					{`practices`}
				</h2>
				<p>
					we help your business to reach first page of google by using best SEO practices
				</p>
			</SectionArea>
			<SectionArea title={3} image={'phone'} className="min-h-[90lvh]">
				<h2>
					{`We manage your`}
					<span className="text-primary">{` social media `}</span>
				</h2>
				<p>{`Enhance your website's social media presence to reach out to more users`}</p>
			</SectionArea>
		</div>
	);
}
 