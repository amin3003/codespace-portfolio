import React from 'react';
import { custom_trim } from '@azrico/string';
import SubServiceBlock from './SubServiceBlock';
import SubServiceModalController from './SubServiceModalController';
import TextField from '../TextField/TextField';
import clsx from 'clsx';
import { useLocale, useTranslations } from 'next-intl';
import { DBManager } from '@azrico/nodeserver';
import Service from '@/data/Service';
import Form from '../Form/Form';

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
						<span className="flex-1 font-bold md:text-xl h-[36px]">{'Contact us'}</span>
						<form method="dialog" className="absolute right-0">
							{/* if there is a button in form, it will close the modal */}
							<button className="btn btn-sm btn-circle btn-ghost">✕</button>
						</form>
					</div>

				<Form/>
				</div>

				<form method="dialog" className="modal-backdrop select-none outline-none">
					<button className="select-none outline-none">close</button>
				</form>
			</dialog>
		</div>
	);
}
