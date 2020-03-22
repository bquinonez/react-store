import React, { Component } from 'react'
// import React from 'react';
import {Link} from 'react-router-dom';
// import logo from '../logo.svg'
import styled from 'styled-components';
import {ButtonContainer} from './Button'
// {logo} 
export default class Navbar extends Component {
    render(){
        return (
            
                <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
                <Link to='/'>
                    {/* <img src="img/icon.jpeg" alt="store" 
                    className="navbar-brand" /> */}
                    {/* home */}
                </Link>
                <ul className="navbar-nav align-items-center">
                    <li className="nav-item ml-5">
                        <Link to="/" className="nav-link">
                            products
                        </Link>
                    </li>
                </ul>
                <Link to='/cart' className="ml-auto">
                    <ButtonContainer>
                        <span className="mr-2">
                        <i className="fas fa-cart-plus" />
                        </span>
                         my cart
                    </ButtonContainer>
                </Link>
                </NavWrapper>
            
        )
    }

}

const NavWrapper = styled.nav`
    background: var(--mainBlue);
    .color: var(--mainWhite) !important;
    font-size: 1.3rem;
    text-transform: capitalize;
`
