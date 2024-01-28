import {
	array_first,
	array_merge,
	array_remove_duplicates,
	object_clone,
	wrap_array,
} from '@azrico/object';
import { SimpleObject } from '@azrico/webobject';
import servicesJson from './services.json';
import { localeCurrencies } from '@/i18nConfig';
import { convert_to_simple_string } from '@azrico/string';
export class Feature extends SimpleObject {
	readonly id: string = '';
	readonly title: string = '';
	readonly text: string = '';
	isAvailable: boolean = true;
	constructor(inputdata: Partial<Feature> | any) {
		super();
		if (typeof inputdata === 'string') inputdata = { title: inputdata };

		//load information from array input
		if (Array.isArray(inputdata)) {
			if (inputdata.length === 1) inputdata = { title: array_first(inputdata) };
			else {
				inputdata = object_clone(inputdata) as any[];
				inputdata = {
					id: inputdata.shift() || '',
					title: String(inputdata.shift() || ''),
					text: String(inputdata.shift() || ''),
					isAvailable: Boolean(inputdata.shift() || ''),
				};
			}
		}
		this.loadValues(inputdata);
		//default id value
		if (!this.id) this.id = convert_to_simple_string(this.title);
	}

	/**
	 * convert given input to Feature array
	 * @param input_data
	 * @returns
	 */
	static convert(input_data: any): Feature[] {
		let resultFeatures = [];
		if (!input_data) return [];
		if (typeof input_data === 'object') {
			if (Array.isArray(input_data)) {
				resultFeatures = wrap_array(input_data);
			} else {
				for (const key in input_data) {
					const title =
						typeof input_data[key] === 'object' ? input_data[key].title : input_data[key];
					resultFeatures.push([key, title]);
				}
			}
		}
		return Feature.mapto(Feature, resultFeatures);
	}
}
export default Feature;
