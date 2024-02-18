'use client';

import Service from '@/data/Service';
import SubService from '@/data/SubService';
import { useRouter } from '@src/navigation';
import { useParams } from 'next/navigation';
import React from 'react';
import { custom_trim } from '@azrico/string';
import SubServiceBlock from './SubServiceBlock';
/* -------------------------------------------------------------------------- */
const getHash = () =>
	typeof window !== 'undefined'
		? decodeURIComponent(window.location.hash.replace('#', ''))
		: undefined;

export default function SubServiceModalController(props: any) {
	const modalRef = React.useRef<HTMLDialogElement>();
	const [hash, set_hash] = React.useState(getHash());

	const [currentSubService, set_currentSubService] = React.useState<SubService>();
	const [currentService, set_currentService] = React.useState<Service>();

	const params = useParams();

	React.useLayoutEffect(() => {
		modalRef.current =
			(document.getElementById('subservice-modal') as HTMLDialogElement) || undefined;

		modalRef.current.onclose = dialogClosed;
	}, []);
	/* -------------------------------------------------------------------------- */
	React.useEffect(() => {
		set_hash(getHash());
	}, [params]);

	/* -------------------------------------------------------------------------- */
	const showModalIfNeeded = React.useCallback(() => {
		if (!modalRef.current) return;
		if (currentSubService) modalRef.current.showModal();
	}, [currentSubService]);
	const dialogClosed = React.useCallback(() => {
		window.location.hash = props.defaultHash;
	}, [props.defaultHash]);
	/* -------------------------------------------------------------------------- */
	React.useEffect(() => {
		if (hash?.startsWith('reserve')) {
			const subserviceid = custom_trim(hash.replaceAll('reserve', ''), '-');
			const subservice = Service.get_subservice(subserviceid);
			set_currentSubService(subservice);
			set_currentService(Service.get_single(subserviceid));
			showModalIfNeeded();
		} else {
			set_currentSubService(undefined);
		}
	}, [hash, showModalIfNeeded]);
	React.useEffect(() => {
		showModalIfNeeded();
	}, [currentSubService, showModalIfNeeded]);

	return <></>;
}
