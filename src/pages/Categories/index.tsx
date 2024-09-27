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
        <ProductsList
          games={actionGames}
          title="Ação"
          backgroud="gray"
          id="action"
        />
        <ProductsList
          games={sportGames}
          title="Esportes"
          backgroud="black"
          id="sports"
        />
        <ProductsList
          games={simulatorGames}
          title="Simulação"
          backgroud="gray"
          id="simulation"
        />
        <ProductsList
          games={fightGames}
          title="Luta"
          backgroud="black"
          id="fight"
        />
        <ProductsList games={rpgGames} title="RPG" backgroud="gray" id="rpg" />
      </>
    )
  }

  return <h4>Carregando...</h4>
}

export default Categories
