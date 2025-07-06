import { type Metadata } from 'next';

type SlugParams = {
  slug?: string[];
};

type PageProps = {
  params: Promise<SlugParams>; // ✅ Required for Next.js 15+
};

export default async function DocsPage(props: PageProps) {
  const { slug = [] } = await props.params;

  if (slug.length === 0) {
    return <h1>📚 Welcome to the Docs Home Page</h1>;
  }

  if (slug.length === 1) {
    return <h1>📄 Section: {slug[0]}</h1>;
  }

  if (slug.length === 2) {
    return <h1>🔍 Viewing {slug[0]} {">"} {slug[1]}</h1>;
  }

  return (
    <h1>
      🧭 You navigated deep: {slug.map((s, i) => (
        <span key={i}>{i > 0 ? ' / ' : ''}{s}</span>
      ))}
    </h1>
  );
}

export async function generateMetadata(props: PageProps): Promise<Metadata> {
  const { slug = [] } = await props.params;

  const title =
    slug.length === 0
      ? 'Docs Home'
      : `Docs - ${slug.join(' / ')}`;

  return {
    title,
    description: `You're viewing the documentation for ${slug.join(' → ') || 'home'}.`,
  };
}
