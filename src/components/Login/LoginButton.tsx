'use client';
import LoginDialogContent from './LoginDialogContent';

export default function LoginButton(props: any) {
	return <></>; //login disabled
	return (
		<>
			<button
				className="btn btn-sm btn-ghost"
				onClick={() => (document.getElementById('login_modal') as any).showModal()}
			>
				<div className="flex flex-row gap-2">
					<i className="bi bi-person-circle"></i>
					<p className="md:block hidden">Login</p>
				</div>
			</button>
			<dialog id="login_modal" className="modal">
				<div className="modal-box">
					<LoginDialogContent />
				</div>
				<form method="dialog" className="modal-backdrop">
					<button>close</button>
				</form>
			</dialog>
		</>
	);
}
