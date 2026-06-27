import localizeData from "@/docs/localize.json"

type Slug = {
	doc_id: string
	lang_code: string,
}

export async function generateStaticParams(): Promise<Slug[]> {
	const data: Slug[] = []

	for (const doc of localizeData.translated) {
		for (const code of doc.languages) {
			data.push({
				lang_code: code,
				doc_id: doc.id
			})
		}
	}

	return data
}

export default async function Page({
	params,
}: {
	params: Promise<Slug>;
}) {
	const { lang_code, doc_id } = await params
	const { default: Post } = await import(`@/docs/${doc_id}/${lang_code}.mdx`)

	return <Post />
}
