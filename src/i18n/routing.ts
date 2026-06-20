import { defineRouting } from "next-intl/routing";

const languages = [
	"hi-IN",
	"bn-IN",
	"kn-IN",
	"ml-IN",
	"mr-IN",
	"od-IN",
	"pa-IN",
	"ta-IN",
	"te-IN",
	"en-IN",
	"gu-IN",
	"as-IN",
	"ur-IN",
	"ne-IN",
	"kok-IN",
	"ks-IN",
	"sd-IN",
	"sa-IN",
	"sat-IN",
	"mni-IN",
	"brx-IN",
	"mai-IN",
	"doi-IN",
];

export const routing = defineRouting({
	// A list of all locales that are supported
	locales: ["en", ...languages],

	// Used when no locale matches
	defaultLocale: "en",
});
