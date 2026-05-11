import HomePage from '@/components/HomePage';

interface HomeProps {
  searchParams?: Promise<{
    tab?: string | string[];
  }>;
}

export default async function Home({ searchParams }: HomeProps) {
  const params = searchParams ? await searchParams : {};
  const tab = Array.isArray(params.tab) ? params.tab[0] : params.tab;

  return <HomePage initialTab={tab === 'download' ? 'download' : 'order'} />;
}
