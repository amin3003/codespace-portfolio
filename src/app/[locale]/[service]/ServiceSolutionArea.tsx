import SectionHero from '@/components/Section/SectionHero';
import Service from '@/data/Service';
import { useTranslations } from 'next-intl';

export default function ServiceSolutionArea(props: { currentService: Service }) {
	const currentService = props.currentService;
	const translate_service = useTranslations('service.' + currentService.getID());

	return (
		<div className="min-h-lvh">
			{/* solution page */}
			<h2 className="m-0 text-center">{translate_service('solution.header')}</h2>
			<SectionHero
				mirror
				className="py-24"
				width={512}
				image={currentService.solution_image}
			>
				<div className="flex flex-col">
					<h3 className="">{translate_service('solution.title')}</h3>
					{translate_service('solution.desc')}
				</div>
			</SectionHero>
			{/* related posts
			<h3 className="m-0 text-center">Related Articles</h3>
			<div className="flex flex-row justify-center gap-4 p-4">
				{currentService.articles.map((r, i) => {
					return (
						<div key={i} className="card glass flex-1 max-w-[400px]">
							<div className="card-body flex">
								<b className="card-title">{r.title}</b>
								<p className="">{r.text}</p>
							</div>
						</div>
					);
				})}
			</div> */}
		</div>
	);
}
