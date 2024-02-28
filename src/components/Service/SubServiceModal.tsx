import React from 'react';
import SubServiceModalController from './SubServiceModalController';
import clsx from 'clsx';
import Service from '@/data/Service';
import SubServiceModalForm from './SubServiceModalForm';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

/* -------------------------------------------------------------------------- */

export default function SubServiceModal(props: {
	currentService: Service;
	children?: any;
}) {
	const translate_shared = useTranslations('service.shared');

	const itemLinkNames = props.currentService.subservices.map((r) => `link-${r.id}`);

	// send server data
	return (
		<div>
			<SubServiceModalController itemLinkNames={itemLinkNames} />
			<dialog id="subservice-modal" className="modal modal-bottom outline-none">
				<div className="modal-box px-4 py-1 lg:py-4">
					<div className={clsx('text-center item-center flex pt-2 pb-5', 'relative')}>
						<span className="flex-1 font-bold md:text-xl h-[36px]">
							{translate_shared('contactus')}
						</span>
						<form method="dialog" className="absolute right-5">
							{/* if there is a button in form, it will close the modal */}
							<button className="btn btn-sm btn-ghost btn-circle">
								<Image
									style={{ maxWidth: '70%' }}
									src={`/images/close.svg`}
									width={200}
									height={200}
									alt="contact"
								/>
							</button>
						</form>
					</div>
					<SubServiceModalForm />
				</div>
				<form method="dialog" className="modal-backdrop select-none outline-none">
					<button className="select-none outline-none">close</button>
				</form>
			</dialog>
		</div>
	);
}
