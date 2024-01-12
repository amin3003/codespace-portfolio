import { createRef } from "react"
import { Vector3 } from "three"

const state = {
	pages: 3,
	zoom: 1,
	sections: [
		{ title: 'CHIZ TECH' },
		{ title: 'TECH SOLUTIONS' },
		{ title: 'FOR EVERYONE' },
		{ title: 'CONTACT US' },
		{ title: 'GOODBYE 1' },
		{ title: 'GOODBYE 2' },
		{ title: 'GOODBYE 3' },
		{ title: 'GOODBYE 4' },
	],
	stripes: [
		{ offset: 0, color: '#000', height: 13 },
		{ offset: 6.3, color: '#000', height: 20 },
	],
	diamonds: [
		// { x: 0, offset: 0.15, pos: new Vector3(), scale: 10, factor: 100 },
		// { x: 0, offset: 8, pos: new Vector3(), scale: 2.5, factor: 6 }
	],
	top: createRef<any>(),
};

export default state
