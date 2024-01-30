import Image from 'next/image';
import Link from '@/navigation';

export default function AppLogo(props: {
	className?: string;
	text?: boolean;
	small?: boolean;
}) {
	return (
		<Link href="/" className={'flex justify-start items-center w-min ' + props.className}>
			{/* <Image src="" alt="chiztech logo" /> */}
			{props.text && (
				<div className={props.small ? 'text-md' : 'text-2xl'}>
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
