export default async function DocsPage({
  params,
}: {
  params: Promise<{ slug?: string[] }>;
}) {
  const { slug = [] } = await params;

  if (slug.length === 0) {
    return <h1>Docs Home</h1>;
  }

  return <h1>Viewing: {slug.join(' / ')}</h1>;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug?: string[] }>;
}) {
  const { slug = [] } = await params;

  return {
    title: slug.length > 0 ? `Docs - ${slug.join(' / ')}` : 'Docs',
    description: `You're viewing the documentation for ${slug.join(' → ') || 'home'}.`,
  };
}
