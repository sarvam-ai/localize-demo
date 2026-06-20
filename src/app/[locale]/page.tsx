import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { LanguageSelector } from "@/components/language";
import { Button } from "@/components/ui/button";

export default function Home() {
	const t = useTranslations("home");
	return (
		<div className="flex flex-col flex-1 items-center justify-center">
			<main className="max-w-lg flex flex-col gap-6">
				<Image
					src="/next.svg"
					alt="Next.js logo"
					width={100}
					height={20}
					priority
				/>
				<h1 className="text-3xl font-semibold leading-10 tracking-tight">
					{t("welcome")}
				</h1>
				<p className="text-lg leading-8 ">{t("change")}</p>
				<LanguageSelector />
				<div className="flex flex-col gap-4 sm:flex-row">
					<Button asChild>
						<Link
							href={
								"https://vercel.com/new/clone?repository-url=github.com%2Fsarvam-ai%2Flocalize-demo"
							}
						>
							<Image
								src="/vercel.svg"
								alt="Vercel logomark"
								width={16}
								height={16}
							/>
							{t("deploy")}
						</Link>
					</Button>
					<Button variant={"outline"} asChild>
						<Link href={"https://next-intl.dev/"}>{t("docs")}</Link>
					</Button>
				</div>
			</main>
		</div>
	);
}
