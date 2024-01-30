import {
	array_makeMap,
	array_merge,
	array_remove_duplicates,
	object_clone,
	wrap_array,
} from '@azrico/object';
import { SimpleObject } from '@azrico/webobject';
import servicesJson from './services.json';
import { localeCurrencies } from '@/i18nConfig';
import { Feature } from './Feature';
import { convert_to_simple_string } from '@azrico/string';
export class SubService extends SimpleObject {
	readonly id: string = '';
	readonly title: string = '';
	readonly color: string = '';
	readonly features: Feature[] = [];

	//list of all features for parent Service, some may be unavailable
	all_features: Feature[] = [];

	readonly price: number | string = 0;
	constructor(inputdata: Partial<SubService>) {
		super();
		this.loadValues(inputdata);
		this.features = Feature.convert(this.features);
		this.all_features = Feature.convert(this.all_features);
	}
}

export default class Service extends SimpleObject {
	readonly url: string = '';
	readonly title: string = '';
	readonly desc: string = '';
	readonly long_desc: string[] = [];
	readonly isBest: boolean = false;
	readonly subservices: SubService[] = [];
	readonly articles: Feature[] = [];

	//features that are shared between all subservices
	readonly features: Feature[] = [];

	//list of all features in all subservices
	subservice_all_features: Feature[] = [];

	readonly solution_header: string = '';
	readonly solution_title: string = '';
	readonly solution_texts: string[] = [];

	readonly color: string = '';

	constructor(inputdata: Partial<Service> | any) {
		super();
		this.loadValues(inputdata);
		this.features = Feature.convert(this.features);
		this.articles = Feature.convert(this.articles);

		//id of subservice = Serice.Title+SubService.Title
		this.subservices = SubService.mapto(
			SubService,
			this.subservices.map((r) => {
				return {
					...r,
					id: `${convert_to_simple_string(this.title)}-${convert_to_simple_string(
						r.title
					)}`,
				};
			})
		);

		const mapped_features = array_makeMap(
			array_merge(this.features, ...this.subservices.flatMap((r) => r.features)),
			'id'
		);
		this.subservice_all_features = Feature.convert(mapped_features);

		this.init();
	}

	init() {
		const available_features: { [key: string]: boolean } = {};
		//shared feats are available for all packages
		this.features.forEach((shared_feat) => {
			available_features[shared_feat.id] = true;
		});

		this.subservices.forEach((sub) => {
			const cloned_all_features = Feature.convert(
				array_makeMap(array_merge(this.subservice_all_features, sub.features), 'id')
			);

			//each subservice has all features of its previous subservice
			sub.features.forEach((subfeat) => {
				available_features[subfeat.id] = true;
			});
			/* -------------------------------------------------------------------------- */
			cloned_all_features.forEach((cl_feat) => {
				cl_feat.isAvailable = available_features[cl_feat.id];
			});
			sub.all_features = cloned_all_features;
		});
	}

	static get_single(search: string): Service | undefined {
		return this.get_list().find((s) => s.url === search || s.title === search);
	}
	static get_list(): Service[] {
		return servicesJson.map((r) => new Service(r));
	}
	static getPrice(obj: any, locale: string) {
		if (typeof obj === 'string') return obj + ` ${localeCurrencies[locale]}`;
		return (obj[locale] || obj['en']) + ` ${localeCurrencies[locale]}`;
	}
}
