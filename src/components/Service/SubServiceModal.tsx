import React from 'react';
import { custom_trim } from '@azrico/string';
import SubServiceBlock from './SubServiceBlock';
import SubServiceModalController from './SubServiceModalController';
import TextField from '../TextField/TextField';
import clsx from 'clsx';
import { useLocale, useTranslations } from 'next-intl';
import { DBManager } from '@azrico/nodeserver';
import Service from '@/data/Service';

/* -------------------------------------------------------------------------- */

export default function SubServiceModal(props: {
	currentService: Service;
	children?: any;
}) {
	const translate_shared = useTranslations('service.shared');

	const itemLinkNames = props.currentService.subservices.map((r) => `link-${r.id}`);

	async function submitRequest(formData: FormData) {
		'use server';
		await DBManager.tryToConnect();
		const fullname = formData.get('fullname');
		const email = formData.get('email');
		const desc = formData.get('desc');
		console.log(fullname, email, desc);
	}
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

					<form
						action={submitRequest}
						method="post"
						name="contact-form"
						className={clsx('flex flex-row')}
					>
						<div className="gap-4 flex flex-col flex-[4]">
							<TextField
								name="fullname"
								placeholder={translate_shared('fullname')}
								className="w-full"
							/>
							<TextField
								name="email"
								placeholder={translate_shared('email')}
								className="w-full"
							/>
							<textarea
								name="desc"
								className={clsx(
									'textarea textarea-md textarea-bordered resize-none h-[200px] w-full',
									'text-white'
								)}
								placeholder={translate_shared('write-about')}
							/>
							<button type="submit" className="btn btn-primary">
								{translate_shared('send')}
							</button>
						</div>
						<div className="flex-[5] hidden md:flex justify-center">
							<div
								className={clsx(
									'p-5 text-justify bg-base-300 w-[60%] w-max-[500px]',
									'border-t-2 border-t-primary'
								)}
							>
								{translate_shared('contact-text')}
							</div>
						</div>
					</form>
				</div>

				<form method="dialog" className="modal-backdrop select-none outline-none">
					<button className="select-none outline-none">close</button>
				</form>
			</dialog>
		</div>
	);
}
