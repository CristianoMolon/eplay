import { HeaderBar, Links, LinkItem, LinkCart } from '../Header/styles'
import { Link } from 'react-router-dom'

import logo from '../../../src/assets/images/logo.svg'
import carrinho from '../../../src/assets/images/carrinho.svg'

const Header = () => (
  <HeaderBar>
    <div>
      <Link to="/">
        <img src={logo} alt="EPLAY" />
      </Link>
      <nav>
        <Links>
          <LinkItem>
            <Link to="/categories">Categorias</Link>
          </LinkItem>
          <LinkItem>
            <a href="#">Novidades</a>
          </LinkItem>
          <LinkItem>
            <a href="#">Promoções</a>
          </LinkItem>
        </Links>
      </nav>
    </div>
    <LinkCart href="#">
      0 - produto(s)
      <img src={carrinho} alt="carrinho" />
    </LinkCart>
  </HeaderBar>
)

export default Header
