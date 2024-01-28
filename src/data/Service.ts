import { wrap_array } from '@azrico/object';
import { SimpleObject } from '@azrico/webobject';

export class SubService extends SimpleObject {
	name: string = '';
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
	long_desc: string = '';
	isBest: boolean = false;
	subservices: SubService[] = [];
	features: Feature[] = [];
	popular_features: Feature[] = [];

	solution_header: string = '';
	solution_title: string = '';
	solution_texts: string[] = [];

	color: string = '';

	constructor(inputdata: Partial<Service> | any) {
		super();
		this.loadValues(inputdata);
		this.features = Feature.mapto(Feature, this.features);
		this.popular_features = Feature.mapto(Feature, this.popular_features);
		this.subservices = SubService.mapto(SubService, this.subservices);
	}
	static get_single(search: string): Service | undefined {
		return this.get_list().find((s) => s.url === search || s.title === search);
	}
	static get_list(): Service[] {
		return [
			{
				color: '#4CAF50',
				url: 'webdesign',
				title: 'Web design',
				features: ['AdobeXD File', 'Responsive design'],
				desc: 'we design your responsive website',
				long_desc: 'we design your responsive website. suitable for mobile and pc',
				solution_header: 'Solution to your top marketing challenges',
				solution_title: 'Get paid faster',
				solution_texts: [
					'Adipisicing aliqua laborum quis proident adipisicing velit mollit.',
					'Veniam commodo consequat eu id Lorem fugiat qui do proident culpa aliqua anim Lorem.',
					'Veniam commodo consequat eu id Lorem fugiat qui do proident culpa aliqua anim Lorem.',
					'Veniam commodo consequat eu id Lorem fugiat qui do proident culpa aliqua anim Lorem.',
				],
				popular_features: [
					{
						title: 'AdobeXD File',
						text: 'Sint incididunt eiusmod elit aliquip exercitation elit laborum.',
					},
					{
						title: 'Responsive design',
						text: 'Sint incididunt eiusmod elit aliquip exercitation elit laborum.',
					},
					{
						title: 'Multiple themes',
						text: 'Sint incididunt eiusmod elit aliquip exercitation elit laborum.',
					},
				],
				subservices: [
					{ name: 'Free', color: 'white', price: 0, features: ['basic'] },
					{
						name: 'Standard',
						color: 'white',
						price: '100$',
						features: ['basic', 'standrad'],
					},
					{
						name: 'Pro',
						color: 'white',
						price: '300$',
						features: ['basic', 'standrad', 'pro'],
					},
					{
						name: 'Advanced',
						color: 'white',
						price: '400$',
						features: ['basic', 'standrad', 'pro', 'advanced'],
					},
				],
			},
			{
				color: '#5C6BC0',
				url: 'webdev',
				title: 'Web developement',
				features: ['SEO Standard'],
				desc: 'we develop a responsive website for your bussiness',
				subservices: [],
			},
			{
				color: '#FFEB3B',
				url: 'startup',
				isBest: true,
				title: 'Startup Package',
				features: ['AdobeXD Design', 'Dark and light theme', '4 Pages static website'],
				desc: 'All in one package. let us handle all your needs',
				subservices: [],
			},
			{
				color: '#F06292',
				url: 'media',
				title: 'Media management',
				features: ['Instagram', 'Facebook', 'Discord'],
				desc: 'we manage your social networks to increase your visibility',
				subservices: [],
			},
		].map((r) => new Service(r));
	}
}
