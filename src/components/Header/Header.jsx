import React from 'react'

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
            <HeaderLogo>Livraria</HeaderLogo>

            <HeaderNav>
                <HeaderList>
                    <HeaderItem>Register New A Book</HeaderItem>
                </HeaderList>
            </HeaderNav>
        </HeaderContainer>
    )
}

export default Header