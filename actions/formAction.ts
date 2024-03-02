"use server"
import { DBManager } from "@azrico/nodeserver";

export type CustomFormData = Partial<{
	serviceid: string;
	fullname: string;
	email: string;
	desc: string;
}>;

export const submitRequest = async (formData: CustomFormData) => {
	const { fullname, email, desc, serviceid } = formData;
	/* ------------------------------ insert to db ------------------------------ */
	await DBManager.tryToConnect();
	const result = await DBManager.insert(
		'user_requests',
		{
			serviceid: serviceid || 'serviceid',
			fullname,
			email,
			desc,
		},
		{ noindex: true }
	);
};
