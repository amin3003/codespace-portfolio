import Link from 'next/link';

export default function NotFound() {
	//TODO better 404 page
	return (
		<html>
			<h2>Not Found</h2>
			<p>Could not find requested resource</p>
			<Link href="/">Return Home</Link>
		</html>
	);
}
