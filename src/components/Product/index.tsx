import Tag from '../Tag'

import { Card, Descricao, Titulo } from './styles'

const Product = () => (
  <Card>
    <img src="//placehold.it/222x250" />
    <Titulo>Nome do jogo</Titulo>
    <Tag>Categoria</Tag>
    <Tag>Windows</Tag>
    <Descricao>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit dolorem
      quasi eos, commodi molestias obcaecati qui repellat mollitia! Consectetur
      vitae incidunt facilis iusto asperiores atque voluptatem sequi modi
      voluptas nobis!
    </Descricao>
  </Card>
)

export default Product
