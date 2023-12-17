import Image from 'next/image';
import Link from 'next/link';

export default function AppLogo() {
	return (
		<Link href={'/'}>
			<Image
				className="aspect-square m-1 h-10 w-10 self-center"
				src="/logo.png"
				width={64}
				height={64}
				alt="applogo"
			/>
		</Link>
	);
}
