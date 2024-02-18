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
import { SubService } from './SubService';

export default class Service extends SimpleObject {
	readonly id: string = '';
	readonly url: string = '';
	readonly title: string = '';
	readonly icon: string = '';
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
	readonly solution_image: string[] = [];

	readonly color: string = '';

	constructor(inputdata: Partial<Service> | any) {
		super();
		this.loadValues(inputdata);
		this.features = Feature.convert(this.features);
		this.articles = Feature.convert(this.articles);
		this.id = convert_to_simple_string(this.title || this.url);
		/* -------- make sure each subservices knows title of current service ------- */
		this.subservices = SubService.mapto(
			SubService,
			this.subservices.map((r) => ({
				...r,
				service_id: this.id,
				service_title: this.title,
			}))
		);

		/* ----------------------- put all features in a list ----------------------- */
		const all_features_list = array_merge(
			this.features,
			...this.subservices.flatMap((r) => r.features)
		);
		const all_features_mapped = array_makeMap(all_features_list, 'id');
		this.subservice_all_features = Feature.convert(all_features_mapped);

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
	static get_subservice(search: string): SubService | undefined {
		const serviceid = String(search.split('-').shift() || '');
		 const service = Service.get_single(serviceid);
		 
		  return service?.subservices.find((s) => s.id === search);
	}
	static get_list(): Service[] {
		return allServices;
	}
	static getPrice(obj: any, locale: string) {
		if (typeof obj === 'string') return obj + ` ${localeCurrencies[locale]}`;
		return (obj[locale] || obj['en']) + ` ${localeCurrencies[locale]}`;
	}
}
Service.prototype.toString = function () {
	return this.title || '';
};


const allServices = servicesJson.map((r) => new Service(r));
