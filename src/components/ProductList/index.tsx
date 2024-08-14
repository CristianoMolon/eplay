import Game from '../../Models/Game'
import Product from '../Product'

import { Container, List } from './styles'

export type Props = {
  title: string
  backgroud: 'gray' | 'black'
  games: Game[]
}

const ProductsList = ({ backgroud, title, games }: Props) => (
  <Container backgroud={backgroud}>
    <div className="container">
      <h2>{title}</h2>
      <List>
        {games.map((game) => (
          <Product
            key={game.id}
            category={game.category}
            description={game.description}
            image={game.image}
            infos={game.infos}
            system={game.system}
            title={game.title}
          />
        ))}
      </List>
    </div>
  </Container>
)

export default ProductsList
