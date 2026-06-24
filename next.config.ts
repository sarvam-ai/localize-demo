import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";
import createMDX from '@next/mdx'
import path from "path";

const nextConfig: NextConfig = {
	pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
	turbopack: {
		root: path.join(__dirname, "./"),
	},
	/* config options here */
};

const withNextIntl = createNextIntlPlugin();
const withMDX = createMDX()

export default withNextIntl(withMDX(nextConfig));
