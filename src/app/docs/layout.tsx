import DocsLanguageHeader from "@/components/header";

export default async function Layout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div className="flex flex-col flex-1 items-center justify-center gap-4">
			<DocsLanguageHeader />
			<main className="max-w-lg flex flex-col gap-6">{children}</main>
		</div>
	);
}
