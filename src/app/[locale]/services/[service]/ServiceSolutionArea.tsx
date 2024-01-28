import SectionArea from '@/components/Section/SectionArea';
import Service from '@/data/Service';

export default function ServiceSolutionArea(props: { currentService: Service }) {
	const currentService = props.currentService;
	return (
		<div className="min-h-lvh">
			{/* solution page */}
			<h2 className="m-0 text-center">{currentService.solution_header}</h2>
			<SectionArea mirror className="py-24" width={512} image={'browser'}>
				<div className="flex flex-col">
					<h3 className="">{currentService.solution_title}</h3>
					{currentService.solution_texts.map((r, i) => (
						<p className="opacity-90" key={i}>
							{r}
						</p>
					))}
				</div>
			</SectionArea>
			{/* related posts */}
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
			</div>
		</div>
	);
}
