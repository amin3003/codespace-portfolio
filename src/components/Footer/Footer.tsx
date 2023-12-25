import AppLogo from '@c/Header/AppLogo';

export default function Footer() {
	return (
		<footer className="p-6 bg-base-100 text-white ">
			<div className="container flex-row flex mx-auto">
				<div className="justify-end flex-1"></div>
				<div className="text-end flex flex-col gap-2">
					<AppLogo text={true} />
					<b className="text-secondary text-xl">About us</b>
					<b className="text-secondary text-xl">Work with us</b>
				</div>
			</div>
		</footer>
	);
}
