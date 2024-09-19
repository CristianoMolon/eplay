import ProductsList from '../../components/ProductsList'
import {
  useGetActionGamesQuery,
  useGetSportGamesQuery,
  useGetSimulationGamesQuery,
  useGetFightGamesQuery,
  useGetRpgGamesQuery
} from '../../services/api'

const Categories = () => {
  const { data: actionGames } = useGetActionGamesQuery()
  const { data: sportGames } = useGetSportGamesQuery()
  const { data: simulatorGames } = useGetSimulationGamesQuery()
  const { data: fightGames } = useGetFightGamesQuery()
  const { data: rpgGames } = useGetRpgGamesQuery()

  if (actionGames && sportGames && simulatorGames && fightGames && rpgGames) {
    return (
      <>
        <ProductsList games={actionGames} title="Ação" backgroud="gray" />
        <ProductsList games={sportGames} title="Esportes" backgroud="black" />
        <ProductsList
          games={simulatorGames}
          title="Simulação"
          backgroud="gray"
        />
        <ProductsList games={fightGames} title="Luta" backgroud="black" />
        <ProductsList games={rpgGames} title="RPG" backgroud="gray" />
      </>
    )
  }

  return <h4>Carregando...</h4>
}

export default Categories
