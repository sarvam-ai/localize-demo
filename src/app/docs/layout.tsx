type Props = {
	children: React.ReactNode;
	params: Promise<{}>;
};

export default async function Layout({ children, params }: Props) {
	return (
		<div className="flex flex-col flex-1 items-center justify-center">
			<main className="max-w-lg flex flex-col gap-6">
				{children}
			</main>
		</div>
	)
}
