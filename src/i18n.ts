import {getRequestConfig} from 'next-intl/server';

export default getRequestConfig(async ({ locale }) => ({
	messages: (await import(`../messages/${locale}.json`)).default,
	// messages: (
	// 	await (locale === 'en'
	// 		? // When using Turbopack, this will enable HMR for `en`
	// 		  import('../messages/en.json')
	// 		: import(`../messages/${locale}.json`))
	// ).default,
}));