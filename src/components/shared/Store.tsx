import { createRef } from "react"
import { Vector3 } from "three"

const state = {
	zoom: 1,
	pages: 3,
	sections: 3,

	top: createRef<any>(),
};

export default state
