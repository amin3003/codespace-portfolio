'use client';
import React from 'react';

/**
 * only purpose of this element is to update scroll position into the document so CSS knows the scroll
 * we dont put this code in our header component directly because this code has to be 'use client'
 * @returns
 */
export default function ScrollDetector() {
	const headerElement = React.useRef<HTMLElement>();
	/* -------------------------- detect current scroll ------------------------- */
	const onScroll = React.useCallback(() => {
		//we can use isTop in css to update css based on scroll
		if (!headerElement.current) {
			headerElement.current = document.getElementById('header') || undefined;
		}
		const isTop = String(window.scrollY <= 0);
		if (headerElement.current) headerElement.current.dataset.isTop = isTop;
		// document.documentElement.dataset.isTop = isTop;
	}, []);
	React.useEffect(() => {
		document.addEventListener('scroll', onScroll);
		onScroll(); //initial state
		return () => {
			document.removeEventListener('scroll', onScroll);
		};
	}, [onScroll]);
	return null;
}
