'use client';
import MockupSite from '@c/MockupSite/MockupSite';
import SectionArea from '@c/Section/SectionArea';
import { sectionProps } from './types';
import Image from 'next/image';
export default function SectionSteps(props: sectionProps) {
	return (
		<div id="section-steps" className="flex flex-col px-[5%] gap-3">
			<SectionArea title={1} className="min-h-[80lvh]" image={<MockupSite />}>
				<h2>We design and create the ideal website for your business</h2>
				<p>
					Sit ipsum ea ea non aute velit occaecat culpa ipsum culpa labore adipisicing
					duis. Incididunt ea officia id proident aliquip eiusmod incididunt ad quis
					veniam eiusmod. Enim id exercitation duis in consequat sint dolor culpa commodo
					laboris. Ut ex consectetur aute quis nulla. Cupidatat quis culpa ex fugiat
					fugiat commodo adipisicing dolor velit ullamco consequat veniam.
				</p>
			</SectionArea>
			<SectionArea
				title={2}
				image={'seo'}
				width={400}
				height={400}
				mirror
				className="min-h-[80lvh]"
			>
				<h2>
					{`Enhance your website's search visibility by using best`}
					<span className="text-primary">{` SEO `}</span>
					{`practices`}
				</h2>
				<p>
					Sit ipsum ea ea non aute velit occaecat culpa ipsum culpa labore adipisicing
					duis. Incididunt ea officia id proident aliquip eiusmod incididunt ad quis
					veniam eiusmod. Enim id exercitation duis in consequat sint dolor culpa commodo
					laboris. Ut ex consectetur aute quis nulla. Cupidatat quis culpa ex fugiat
					fugiat commodo adipisicing dolor velit ullamco consequat veniam.
				</p>
			</SectionArea>
			<SectionArea
				title={3}
				image={'phone'}
				width={350}
				height={300}
				className="min-h-[80lvh]"
			>
				<h2>
					{`We manage your`}
					<span className="text-primary">{` social media `}</span>
				</h2>
				<p>{`Enhance your website's social media presence to reach out to more users Quis esse pariatur eu consequat sit adipisicing excepteur. Eiusmod ad ad esse sint pariatur excepteur pariatur culpa mollit adipisicing. Laborum veniam exercitation sunt officia. Voluptate voluptate laboris duis ea aliquip excepteur ex sit voluptate. Cupidatat irure anim elit nostrud excepteur consectetur sint aliqua labore anim irure nostrud.`}</p>
			</SectionArea>
		</div>
	);
}
 