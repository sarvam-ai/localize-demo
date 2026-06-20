"use client";

import { useTranslations } from "next-intl";
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { useRouter } from "@/i18n/navigation";

export const languageDist = {
	"hi-IN": "Hindi",
	"bn-IN": "Bengali",
	"kn-IN": "Kannada",
	"ml-IN": "Malayalam",
	"mr-IN": "Marathi",
	"od-IN": "Odia",
	"pa-IN": "Punjabi",
	"ta-IN": "Tamil",
	"te-IN": "Telugu",
	"en-IN": "English (India)",
	"gu-IN": "Gujarati",
};

export const languageDistNative = {
	"hi-IN": "हिंदी",
	"bn-IN": "বাংলা",
	"kn-IN": "ಕನ್ನಡ",
	"ml-IN": "മലയാളം",
	"mr-IN": "मराठी",
	"od-IN": "ଓଡ଼ିଆ",
	"pa-IN": "ਪੰਜਾਬੀ",
	"ta-IN": "தமிழ்",
	"te-IN": "తెలుగు",
	"en-IN": "English (India)",
	"gu-IN": "ગુજરાતી",
	"as-IN": "অসমীয়া",
	"ur-IN": "اردو",
	"ne-IN": "नेपाली",
	"kok-IN": "कोंकणी",
	"ks-IN": "کٲشِر",
	"sd-IN": "सिंधी",
	"sa-IN": "संस्कृतम्",
	"sat-IN": "ᱥᱟᱱᱛᱟᱞᱤ",
	"mni-IN": "ꯃꯅꯤꯄꯨꯔꯤ",
	"brx-IN": "ब'ड'",
	"doi-IN": "डाग्रे",
} as const;

export const moreLanguageDist = {
	"as-IN": "Assamese",
	"ur-IN": "Urdu",
	"ne-IN": "Nepali",
	"kok-IN": "Konkani",
	"ks-IN": "Kashmiri",
	"sd-IN": "Sindhi",
	"sa-IN": "Sanskrit",
	"sat-IN": "Santali",
	"mni-IN": "Manipuri",
	"brx-IN": "Bodo",
	"mai-IN": "Maithili",
	"doi-IN": "Dogri",
} as const;

export const LanguageSelector = () => {
	const router = useRouter();
	const t = useTranslations("components");
	const l = useTranslations("languages");
	return (
		<Select onValueChange={(v) => router.push(v)}>
			<SelectTrigger>
				<SelectValue placeholder={t("language")} />
			</SelectTrigger>
			<SelectContent>
				<SelectGroup>
					<SelectLabel>{t("language")}</SelectLabel>
					{Object.keys(languageDist).map((code) => (
						<SelectItem key={code} value={code}>
							{languageDistNative[code as keyof typeof languageDistNative]} (
							{l(code)})
						</SelectItem>
					))}
				</SelectGroup>
				<SelectGroup>
					<SelectLabel>{t("more-languages")}</SelectLabel>
					{Object.keys(moreLanguageDist).map((code) => (
						<SelectItem key={code} value={code}>
							{languageDistNative[code as keyof typeof languageDistNative]} (
							{l(code)} )
						</SelectItem>
					))}
				</SelectGroup>
			</SelectContent>
		</Select>
	);
};
