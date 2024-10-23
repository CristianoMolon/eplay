import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  HeaderBar,
  Links,
  LinkItem,
  CartButton,
  Hamburber,
  HeaderRow,
  NavMobile
} from '../Header/styles'
import { Link } from 'react-router-dom'

import logo from '../../../src/assets/images/logo.svg'
import carrinho from '../../../src/assets/images/carrinho.svg'

import { open } from '../../store/reducers/cart'
import { RootReducer } from '../../store'

const Header = () => {
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const openCart = () => {
    dispatch(open())
  }

  return (
    <HeaderBar>
      <HeaderRow>
        <div>
          <Hamburber onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <span />
            <span />
            <span />
          </Hamburber>
          <Link to="/">
            <img src={logo} alt="EPLAY" />
          </Link>
          <CartButton onClick={openCart}>
            {items.length}
            <span> - produto(s)</span>
            <img src={carrinho} alt="carrinho" />
          </CartButton>
        </div>
      </HeaderRow>
      <NavMobile className={isMenuOpen ? 'is-open' : ''}>
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
      </NavMobile>
    </HeaderBar>
  )
}

export default Header
