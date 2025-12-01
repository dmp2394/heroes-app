import { CustomJumbotron } from "@/components/custom/CustomJumbotron";
import { HeroStats } from "@/heroes/components/HeroStats";
import { SearchControls } from "./ui/SearchControls";

export const SearchPage = () => {
  return (
    <>
      <CustomJumbotron
        title="Búsqueda de Superhéroes"
        description="Descubre, explora y gestiona a tus superhéroes y villanos favoritos."
      />

      {/* Stats dashboard */}
      <HeroStats />

      {/* filter and search */}
      <SearchControls />

    </>
  )
}

export default SearchPage;