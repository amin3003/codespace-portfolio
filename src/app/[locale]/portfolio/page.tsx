import { useTranslations } from "next-intl";
import Spotlight from "../../../components/animations/Spotlight";
import '../../../components/animations/styles.css'
export default function Portfolio() {
  const t = useTranslations("navbar");
  return (
    // <div className="flex min-h-screen justify-between p-24 gap-2 flex-col">
    // </div>
    <>
      <Spotlight />
    </>
  );
}
