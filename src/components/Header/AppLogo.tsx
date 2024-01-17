import Image from 'next/image';
import Link from '@/navigation';

export default function AppLogo(props: { className?: string; text: boolean }) {
	return (
		<Link href="/" className={'flex justify-start items-center w-min ' + props.className}>
			{/* <Image src="" alt="chiztech logo" /> */}
			{props.text && (
				<div>
					<span
						className={
							'self-center text-2xl font-semibold' +
							' whitespace-nowrap text-primary'
						}
					>
						{`<Code/>`}
					</span>
					<span className="self-center text-2xl font-semibold whitespace-nowrap text-white ml-1">
						{`Spase`}
					</span>
				</div>
			)}
		</Link>
	);
}
