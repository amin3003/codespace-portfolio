'use client';

import { usePathname } from 'next/navigation';
import React from 'react';
export function SidebarController() {
	const pathname = usePathname();
	React.useEffect(() => {
		const drawer = document.getElementById('my-drawer') as any;
		if (drawer != null) drawer.checked = false;
	}, [pathname]);
	return <></>;
}
