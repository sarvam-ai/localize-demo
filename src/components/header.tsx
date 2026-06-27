"use client";

import { usePathname, useRouter } from "next/navigation";
import { useMemo } from "react";
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import localizeData from "@/docs/localize.json";

const DEFAULT_LANGUAGE = "en";

export default function DocsLanguageHeader() {
	const pathname = usePathname();
	const router = useRouter();

	const { docId, langCode } = useMemo(() => {
		const segments = pathname.split("/").filter(Boolean);
		if (segments[0] !== "docs") {
			return { docId: undefined, langCode: undefined };
		}

		return {
			docId: segments[1],
			langCode: segments[2],
		};
	}, [pathname]);

	const languages = useMemo(() => {
		if (!docId) return [] as string[];
		return (
			localizeData.translated.find((doc) => doc.id === docId)?.languages ?? []
		);
	}, [docId]);

	if (!docId || languages.length === 0) {
		return null;
	}

	return (
		<header className="w-full max-w-lg">
			<div className="flex items-center justify-between gap-3">
				<p className="text-sm text-muted-foreground">Change language</p>
				<Select
					value={langCode ?? DEFAULT_LANGUAGE}
					onValueChange={(nextLang) => {
						if (nextLang === DEFAULT_LANGUAGE) {
							router.push(`/docs/${docId}`);
							return;
						}

						router.push(`/docs/${docId}/${nextLang}`);
					}}
				>
					<SelectTrigger>
						<SelectValue placeholder="Select language" />
					</SelectTrigger>
					<SelectContent>
						<SelectGroup>
							<SelectLabel>Language</SelectLabel>
							<SelectItem value={DEFAULT_LANGUAGE}>English</SelectItem>
							{languages.map((code) => (
								<SelectItem key={code} value={code}>
									{code}
								</SelectItem>
							))}
						</SelectGroup>
					</SelectContent>
				</Select>
			</div>
		</header>
	);
}
