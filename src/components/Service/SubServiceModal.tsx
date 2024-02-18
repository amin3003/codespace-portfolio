'use client';
import Service from '@/data/Service';
import SubService from '@/data/SubService';
import { useRouter } from '@src/navigation';
import { useParams } from 'next/navigation';
import React from 'react';
import { custom_trim } from '@azrico/string';
/* -------------------------------------------------------------------------- */
const getHash = () =>
	typeof window !== 'undefined'
		? decodeURIComponent(window.location.hash.replace('#', ''))
		: undefined;

export default function SubServiceModal(props: { defaultHash: string }) {
	const modalRef = React.useRef<HTMLDialogElement>();
	const [hash, set_hash] = React.useState(getHash());

	const [currentSubService, set_currentSubService] = React.useState<SubService>();

	const params = useParams();

	React.useEffect(() => {
		set_hash(getHash());
	}, [params]);
	/* -------------------------------------------------------------------------- */
	React.useEffect(() => {
		if (hash?.startsWith('reserve')) {
			const subserviceid = custom_trim(hash.replaceAll('reserve', ''), '-');
			const subservice = Service.get_subservice(subserviceid);
			set_currentSubService(subservice);
		} else {
			set_currentSubService(undefined);
		}
	}, [hash]);

	/* -------------------------------------------------------------------------- */
	React.useEffect(() => {
		if (!modalRef.current) return;
		if (currentSubService) modalRef.current.showModal();
	}, [currentSubService]);
	/* -------------------------------------------------------------------------- */
	function dialogClosed() {
		window.location.hash = props.defaultHash;
	}
	return (
		<div>
			<dialog
				onClose={dialogClosed}
				ref={modalRef as any}
				className="modal modal-bottom outline-none"
			>
				<div className="modal-box">
					<h3 className="font-bold text-lg">Hello!</h3>
					<p className="py-4">Press ESC key or click outside to close</p>
				</div>
				<form method="dialog" className="modal-backdrop select-none outline-none">
					<button className="select-none outline-none">close</button>
				</form>
			</dialog>
		</div>
	);
}
