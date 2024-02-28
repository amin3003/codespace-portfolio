import Image from 'next/image';
import Link from '@/navigation';
import clsx from 'clsx';

export default function AppLogo(props: {
	className?: string;
	text?: boolean;
	logo?: boolean;
	small?: boolean;
}) {
	return (
		<Link href="/" className={clsx('flex justify-start items-center', props.className)}>
			{props.logo && (
				<Image src="/images/logo-text.svg" width={80} height={30} alt="logo" />
			)}

			{props.text && (
				<div className={clsx(props.small ? 'text-sm' : 'text-sm')}>
					<span
						className={'self-center font-semibold' + ' whitespace-nowrap text-primary'}
					>
						{`<Code/>`}
					</span>
					<span className="self-center font-semibold whitespace-nowrap text-white ml-1">
						{`Spase`}
					</span>
				</div>
			)}
		</Link>
	);
}
