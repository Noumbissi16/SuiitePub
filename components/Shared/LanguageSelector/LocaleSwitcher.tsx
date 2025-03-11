import { routing } from "@/i18n/routing";
import { Globe } from "lucide-react";
import { useLocale } from "next-intl";
import LocaleSwitcherSelect from "./LocalSwitcherSelect";

export default function LocaleSwitcher() {
  const locale = useLocale();

  return (
    <div className="flex items-center border-1  rounded-md bg-gray-50">
      {/* <Globe className="h-4 w-4 text-muted-foreground" /> */}
      <LocaleSwitcherSelect defaultValue={locale} label="Select a locale">
        {routing.locales.map((cur) => (
          <option key={cur} value={cur}>
            {cur}
          </option>
        ))}
      </LocaleSwitcherSelect>
    </div>
  );
}
