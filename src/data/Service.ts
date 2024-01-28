import { wrap_array } from '@azrico/object';
import { SimpleObject } from '@azrico/webobject';
import servicesJson from './services.json';
export class SubService extends SimpleObject {
	title: string = '';
	color: string = '';
	features: Feature[] = [];
	price: number | string = 0;
	constructor(inputdata: Partial<SubService>) {
		super();
		this.loadValues(inputdata);
		this.features = Feature.mapto(Feature, this.features);
	}
}
export class Feature extends SimpleObject {
	title: string = '';
	text: string = '';
	constructor(inputdata: Partial<Feature>) {
		super();
		if (typeof inputdata === 'string') inputdata = { title: inputdata };
		this.loadValues(inputdata);
	}
}
export default class Service extends SimpleObject {
	url: string = '';
	title: string = '';
	desc: string = '';
	long_desc: string[] = [];
	isBest: boolean = false;
	subservices: SubService[] = [];
	features: Feature[] = [];
	articles: Feature[] = [];

	solution_header: string = '';
	solution_title: string = '';
	solution_texts: string[] = [];

	color: string = '';

	constructor(inputdata: Partial<Service> | any) {
		super();
		this.loadValues(inputdata);
		this.features = Feature.mapto(Feature, this.features);
		this.articles = Feature.mapto(Feature, this.articles);
		this.subservices = SubService.mapto(SubService, this.subservices);
	}
	static get_single(search: string): Service | undefined {
		return this.get_list().find((s) => s.url === search || s.title === search);
	}
	static get_list(): Service[] {
		return servicesJson.map((r) => new Service(r));
	}
}
