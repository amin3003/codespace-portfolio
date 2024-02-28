import React from 'react';
import ThreeCanvas from '@c/Three/ThreeCanvas';
import StarPage from '@c/Three/StarPage';
import OrbitPage from '@c/Three/OrbitPage';
import TextField from '@/components/TextField/TextField';
import { DBManager } from '@azrico/nodeserver';

//component to test database code
export default async function PageRequests({ searchParams }: any) {
	const email = searchParams.email;
	let records_in_db: any[] = [];
	if (email) {
		await DBManager.tryToConnect();
		records_in_db = await DBManager.find('user_requests', { email });
	}

	return (
		<>
			<ThreeCanvas>
				<OrbitPage />
				<StarPage />
			</ThreeCanvas>
			<div
				id="content-container"
				className="z-[10000] px-[5%] min-h-lvh flex flex-col gap-2"
			>
				<form className="max-w-xl" method="get">
					<h4>Enter your email to see a list of your requests</h4>
					<div className="flex flex-row w-full">
						<TextField
							name="email"
							type="search"
							defaultValue={email}
							className="input-ghost"
							wrapperClassName="flex-1"
							placeholder={'Mail'}
						/>
						<button className="btn btn-ghost">Search</button>
					</div>
				</form>
				{records_in_db.length > 0 ? (
					<>
						<h4>here is a list of your requests:</h4>
						<ol className="list list-disc p-4">
							{records_in_db.map((r: any, i: number) => {
								return <li key={i}>{r.desc}</li>;
							})}
						</ol>
					</>
				) : (
					<h4>No requests found</h4>
				)}
			</div>
		</>
	);
}
