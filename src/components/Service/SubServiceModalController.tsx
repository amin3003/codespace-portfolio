'use client';

import Service from '@/data/Service';
import SubService from '@/data/SubService';
import { useRouter } from '@src/navigation';
import { useParams } from 'next/navigation';
import React from 'react';
import { custom_trim } from '@azrico/string';
import SubServiceBlock from './SubServiceBlock';
import { func } from 'three/examples/jsm/nodes/Nodes.js';
/* -------------------------------------------------------------------------- */
const getHash = () =>
	typeof window !== 'undefined'
		? decodeURIComponent(window.location.hash.replace('#', ''))
		: undefined;

export default function SubServiceModalController(props: { itemLinkNames: string[] }) {
	const modalRef = React.useRef<HTMLDialogElement>();
	const [hash, set_hash] = React.useState(getHash());

	const [currentSubService, set_currentSubService] = React.useState<SubService>();
	const [currentService, set_currentService] = React.useState<Service>();
	const [currentServiceId, set_currentServiceId] = React.useState<string>();

	const onLinkClick = React.useCallback((e: any) => {
		const element = e.target as HTMLElement;
		const subserviceid = String(element.getAttribute('data-subserviceid'));
		set_currentServiceId(subserviceid);
	}, []);
	const dialogClosed = React.useCallback(() => {
		set_currentServiceId(undefined);
	}, []);
	/* ------------------------- load subservice from id ------------------------ */
	React.useEffect(() => {
		if (currentServiceId) {
			const subserviceid = currentServiceId;
			const subservice = Service.get_subservice(subserviceid);
			set_currentSubService(subservice);
			set_currentService(Service.get_single(subserviceid));
		} else {
			set_currentSubService(undefined);
			set_currentService(undefined);
		}
	}, [currentServiceId]);
	/* ------------------------------- open modal ------------------------------- */
	React.useEffect(() => {
		if (!modalRef.current) return;
		if (currentSubService) modalRef.current.showModal();
	}, [currentSubService]);
	/* --------------------------------- events --------------------------------- */
	React.useEffect(() => {
		const serviceElements = props.itemLinkNames.map((r) => {
			return document.getElementById(r);
		});
		serviceElements.forEach((r) => {
			if (!r) return;
			r.onclick = onLinkClick;
		});
	}, [props.itemLinkNames, onLinkClick]);
	React.useEffect(() => {
		modalRef.current =
			(document.getElementById('subservice-modal') as HTMLDialogElement) || undefined;
		modalRef.current.onclose = dialogClosed;
	}, [dialogClosed]);

	return <></>;
}
