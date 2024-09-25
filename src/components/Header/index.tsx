import { useDispatch, useSelector } from 'react-redux'
import { HeaderBar, Links, LinkItem, CartButton } from '../Header/styles'
import { Link } from 'react-router-dom'

import logo from '../../../src/assets/images/logo.svg'
import carrinho from '../../../src/assets/images/carrinho.svg'

import { open } from '../../store/reducers/cart'
import { RootReducer } from '../../store'

const Header = () => {
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)

  const openCart = () => {
    dispatch(open())
  }

  return (
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
      <CartButton onClick={openCart}>
        {items.length} - produto(s)
        <img src={carrinho} alt="carrinho" />
      </CartButton>
    </HeaderBar>
  )
}

export default Header
