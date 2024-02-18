import React from 'react';
import { custom_trim } from '@azrico/string';
import SubServiceBlock from './SubServiceBlock';
import SubServiceModalController from './SubServiceModalController';
import TextField from '../TextField/TextField';
import clsx from 'clsx';
import { useLocale, useTranslations } from 'next-intl';

/* -------------------------------------------------------------------------- */

export default function SubServiceModal(props: { defaultHash: string; children: any }) {
	const translate_shared = useTranslations('service.shared');
	return (
		<div>
			<SubServiceModalController defaultHash={props.defaultHash} />
			<dialog id="subservice-modal" className="modal modal-bottom outline-none">
				<div className="modal-box px-4 py-1 lg:py-4">
					<h3 className="font-bold text-lg text-center">{'Contact us'}</h3>

					<form method="none" name="contact-form" className={clsx('flex flex-row')}>
						<div className="gap-4 flex flex-col flex-[4]">
							<TextField placeholder={translate_shared('fullname')} className="w-full" />
							<TextField placeholder={translate_shared('email')} className="w-full" />
							<textarea
								className={clsx(
									'textarea textarea-md textarea-bordered resize-none h-[200px] w-full',
									'text-white'
								)}
								placeholder={translate_shared('write-about')}
							/>
							<button type="button" className="btn btn-primary">
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
