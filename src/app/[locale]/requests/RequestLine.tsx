import React from 'react';
import { date_short } from '@azrico/string';

//component to test database code
export default function RequestLine({ index, item }: any) {
	return (
		<li>
			{index != 0 && <div className="divider" />}
			<div className="flex flex-row gap-4">
				<b className="px-2">{Number(index + 1)}</b>
				<div className="flex-[5]">{item.desc}</div>
				<i>{date_short(item._created_date)}</i>
				<b className="uppercase">{item.status || 'Pending'}</b>
			</div>
		</li>
	);
}
