import React from 'react';
import { Vector3 } from 'three';

const state = {
	zoom: 1,
	pages: 3,
	sections: 3,

	top: React.createRef<number>() as React.MutableRefObject<number>,
};

export default state;
