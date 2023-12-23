import Image from 'next/image';
  import Link from '@/navigation';

	export default function AppLogo(props: any) {
		return (
			<Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
				{/* <img
            src=""
            className="h-8"
            alt="chiztech logo"
          /> */}
				{props.text && (
					<div>
						<span className="self-center text-2xl font-semibold whitespace-nowrap text-orange-400">
							Chiz
						</span>
						<span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white ml-1 text-lg">
							|Tech
						</span>
					</div>
				)}
			</Link>
		);
	}
