import clsx from 'clsx';
import React from 'react';
import { Modify } from '@azrico/types';

export function TextField(
	props: Modify<
		Partial<
			React.DetailedHTMLProps<
				React.InputHTMLAttributes<HTMLInputElement>,
				HTMLInputElement
			>
		>,
		{ wrapperClassName?: string }
	>
) {
	const { wrapperClassName, ...restprops } = props;
	return (
		<div className={clsx('relative', wrapperClassName)}>
			<input
				{...restprops}
				// value={props.value || ''}
				type="text"
				className={clsx(
					'peer input input-md input-bordered',
					'block rounded-t-lg w-full appearance-none ',
					'focus:outline-none focus:ring-0'
				)}
				placeholder=""
			/>
			<label
				className={clsx(
					'bg-base-100 px-1',
					'top-0 -translate-y-1/2',
					'select-none pointer-events-none',
					'absolute text-sm duration-300 transform z-10 origin-[0] start-2.5',
					'peer-focus:text-primary'
				)}
			>
				{props.placeholder}
			</label>
		</div>
	);
}
export default TextField;
