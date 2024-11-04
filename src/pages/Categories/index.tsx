import ProductsList from '../../components/ProductsList'
import {
  useGetActionGamesQuery,
  useGetSportGamesQuery,
  useGetSimulationGamesQuery,
  useGetFightGamesQuery,
  useGetRpgGamesQuery
} from '../../services/api'

const Categories = () => {
  const { data: actionGames, isLoading: isLoadingAction } =
    useGetActionGamesQuery()
  const { data: sportGames, isLoading: isLoadingSports } =
    useGetSportGamesQuery()
  const { data: simulatorGames, isLoading: isLoadingSimulator } =
    useGetSimulationGamesQuery()
  const { data: fightGames, isLoading: isLoadingFight } =
    useGetFightGamesQuery()
  const { data: rpgGames, isLoading: isLoadingRpg } = useGetRpgGamesQuery()

  return (
    <>
      <ProductsList
        games={actionGames}
        title="Ação"
        backgroud="gray"
        id="action"
        isLoading={isLoadingAction}
      />
      <ProductsList
        games={sportGames}
        title="Esportes"
        backgroud="black"
        id="sports"
        isLoading={isLoadingSports}
      />
      <ProductsList
        games={simulatorGames}
        title="Simulação"
        backgroud="gray"
        id="simulation"
        isLoading={isLoadingSimulator}
      />
      <ProductsList
        games={fightGames}
        title="Luta"
        backgroud="black"
        id="fight"
        isLoading={isLoadingFight}
      />
      <ProductsList
        games={rpgGames}
        title="RPG"
        backgroud="gray"
        id="rpg"
        isLoading={isLoadingRpg}
      />
    </>
  )
}

export default Categories
