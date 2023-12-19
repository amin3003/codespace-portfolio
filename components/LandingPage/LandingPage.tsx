import Image from 'next/image';
import Link from 'next/link';

export default function LandingPage() {
	return (
		<div className="h-full w-full relative">
			<Image
				className="h-full w-full absolute"
				src="/bg.jpg"
				alt="bg"
				width={2048}
				height={1024}
			/>
			<Image
				className="relative right-1 top-1"
				src="/alien.svg"
				alt="bg"
				width={256}
				height={256}
			/>
		</div>
	);
}
