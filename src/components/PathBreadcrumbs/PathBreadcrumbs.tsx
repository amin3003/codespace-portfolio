'use server';
import { Link, getServerPathname } from '@src/navigation';
import { capitalize } from '@azrico/string';
import { useTranslations } from 'next-intl';
type PathBreadcrumbsProps = { absolute?: boolean };
export default async function PathBreadcrumbs(props: PathBreadcrumbsProps) {
	const pathname = getServerPathname();
	const path_parts = pathname.split('/').filter((s) => s);
	return <PathBreadcrumbsInner {...props} path_parts={path_parts} />;
}
/**
 * I had to use another Inner component
 * because useTranslations does not work in async components...
 * @param props
 * @returns
 */
function PathBreadcrumbsInner(props: PathBreadcrumbsProps & { path_parts: string[] }) {
	const translate_nav = useTranslations('nav');
	const PathPartsElement = props.path_parts.map((r, i) => {
		/*
		 example: services/webdev/gold
		 when user clicks on webdev, we have to go to services/webdev
		 so we need to know the path before the current part
		*/
		const path_until_now = `/` + props.path_parts.slice(0, i + 1).join('/');

		//translate the text
		const translated_text = capitalize(translate_nav(String(r).toLowerCase()));

		//the last index of url path is bold
		const isLastIndex = i == props.path_parts.length - 1;

		return (
			<li key={i}>
				<Link href={path_until_now}>
					{isLastIndex ? <b>{translated_text}</b> : translated_text}
				</Link>
			</li>
		);
	});

	return (
		<div className={props.absolute ? 'absolute top-4 left-8' : ''}>
			<div className="breadcrumbs">
				<ul>
					<li>
						<Link href={'/'}>Home</Link>
					</li>
					{PathPartsElement}
				</ul>
			</div>
		</div>
	);
}
