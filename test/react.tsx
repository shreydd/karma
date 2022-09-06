// @ts-nocheck
import { GetStaticProps } from "next";

import { DocumentHead } from "@/components/shared/seo";
import { Center } from "@/styles/layouts";
import { Paragraph, Title } from "@/styles/typography";

const Index = () => (
	<>
		<DocumentHead title="Dev" />
		<Center>
			<Title $size={5} $code>/dev</Title>
			<Paragraph>A non-Prod environment.</Paragraph>
		</Center>
	</>
);

export const getStaticProps: GetStaticProps = () => {
	const isNotProduction = process.env.NODE_ENV !== "production";

	if (isNotProduction) return { props: {} };
	return { notFound: true };
};

export default Index;
