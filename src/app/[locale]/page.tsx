// export default async function Home() {
// 	return <div className="flex min-h-screen justify-between p-24 gap-2 flex-col"></div>;
// }
import { useTranslations } from "next-intl";

export default function Index() {
  const t = useTranslations("Index");
  return (
    <div className="flex min-h-screen justify-between p-24 gap-2 flex-col"><h1>{t('title')}</h1></div>
  );
  // return <h1>{t('title')}</h1>;
}
