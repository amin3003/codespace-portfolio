import { wrap_array } from '@azrico/object';
import { SimpleObject } from '@azrico/webobject';

export class SubService extends SimpleObject {
	name: string = '';
	features: string[] = [];
	price: number | string = 0;
	constructor(inputdata: Partial<SubService>) {
		super();
		this.loadValues(inputdata);
	}
}
export default class Service extends SimpleObject {
	url: string = '';
	title: string = '';
	desc: string = '';
	long_desc: string = '';
	subservices: SubService[] = [];
	features: string[] = [];
	constructor(inputdata: Partial<Service> | any) {
		super();
		this.loadValues(inputdata);
		this.subservices = wrap_array(this.subservices).map((r) => new SubService(r));
	}
	static get_single(search: string): Service | undefined {
		return this.get_list().find((s) => s.url === search || s.title === search);
	}
	static get_list(): Service[] {
		return [
			{
				url: 'webdesign',
				title: 'Web design',
				features: ['AdobeXD File', 'Responsive design'],
				desc: 'we design your responsive website',
				long_desc: 'we design your responsive website. suitable for mobile and pc',
				subservices: [
					{ name: 'Free', price: 0, features: ['basic'] },
					{ name: 'Standard', price: '100$', features: ['basic', 'standrad'] },
					{ name: 'Pro', price: '300$', features: ['basic', 'standrad', 'pro'] },
					{
						name: 'Advanced',
						price: '400$',
						features: ['basic', 'standrad', 'pro', 'advanced'],
					},
				],
			},
			{
				url: 'webdev',
				title: 'Web developement',
				features: ['SEO Standard'],
				desc: 'we develop a responsive website for your bussiness',
				subservices: [],
			},
			{
				url: 'startup',
				best: true,
				title: 'Startup Package',
				features: ['AdobeXD Design', 'Dark and light theme', '4 Pages static website'],
				desc: 'All in one package. let us handle all your needs',
				subservices: [],
			},
			{
				url: 'media',
				title: 'Media management',
				features: ['Instagram', 'Facebook', 'Discord'],
				desc: 'we manage your social networks to increase your visibility',
				subservices: [],
			},
		].map((r) => new Service(r));
	}
}
