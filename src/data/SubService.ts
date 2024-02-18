import { SimpleObject } from '@azrico/webobject';
import { Feature } from './Feature';
import { convert_to_simple_string } from '@azrico/string';
 
export class SubService extends SimpleObject {
	readonly id: string = '';
	readonly service_title: string = '';
	readonly service_id: string = '';
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
		this.id = `${convert_to_simple_string(this.service_id)}-${convert_to_simple_string(
			this.title
		)}`;
	}
}
SubService.prototype.toString = function () {
	return this.title || '';
};

export default SubService;