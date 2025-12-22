import { CustomJumbotron } from '@/components/custom/CustomJumbotron';
import { HeroStats } from '@/heroes/components/HeroStats';
import { SearchControls } from './ui/SearchControls';
import { CustomBreadcrumbs } from '@/components/custom/CustomBreadcrumbs';
import { HeroGrid } from '@/heroes/components/HeroGrid';
import { useQuery } from '@tanstack/react-query';
import { searchHeroesAction } from '@/heroes/actions/search-heroes.action';
import { useSearchParams } from 'react-router';
import type { Options } from '@/heroes/actions/search-heroes.action';

export const SearchPage = () => {

  // obt params en variables
  const [searchParams] = useSearchParams();

  const options: Options = {
    name: searchParams.get('name') ?? undefined,
    team: searchParams.get('team') ?? undefined,
    category: searchParams.get('category') ?? undefined,
    universe: searchParams.get('universe') ?? undefined,
    status: searchParams.get('status') ?? undefined,
    strength: searchParams.get('strength') ?? undefined,
  }


  const { data: heroes = [] } = useQuery({
    queryKey: ['search', { options }],
    queryFn: () => searchHeroesAction(options),
    staleTime: 1000 * 60 * 50 //5min
  })

  return (
    <>
      <CustomJumbotron
        title="Búsqueda de SuperHéroes"
        description="Descubre, explora y administra super héroes y villanos"
      />

      <CustomBreadcrumbs
        currentPage="Buscador de héroes"
      />

      {/* Stats Dashboard */}
      <HeroStats />

      {/* Filter and search */}
      <SearchControls />

      {/* Heroes display */}
      <HeroGrid heroes={heroes} />
    </>
  );
};

export default SearchPage;