import React from 'react'
import { Link } from 'react-router-dom'

import {
    HeaderContainer,
    HeaderLogo,
    HeaderNav,
    HeaderList,
    HeaderItem
} from './Header.Elements'

const Header = () => {
    return (
        <HeaderContainer>
            <Link to="/"><HeaderLogo>Livraria +Conhecimento</HeaderLogo></Link>

            <HeaderNav>
                <HeaderList>
                    <HeaderItem>Register New A Book</HeaderItem>
                </HeaderList>
            </HeaderNav>
        </HeaderContainer>
    )
}

export default Header