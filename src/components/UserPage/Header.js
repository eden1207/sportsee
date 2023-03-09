import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo.JPG'

import '../../styles/Header/Header.css'


export default function Header() {

    return (
        <header className='header header_dimensions header_border header_aspect' role="banner">
            <img className='logo' src={logo} alt="logo SportSee" />
            <nav id="main-nav" className='menu menu_dimensions menu_borders' aria-label="Main navigation" role="navigation">
                <Link className='menu-link' to="/" onClick={ (event) => event.preventDefault() }>
                    Accueil
                </Link>
                <Link className='menu-link' to="/" onClick={ (event) => event.preventDefault() }>
                    Profil
                </Link>
                <Link className='menu-link' to="/" onClick={ (event) => event.preventDefault() }>
                    Réglage
                </Link>
                <Link className='menu-link' to="/" onClick={ (event) => event.preventDefault() }>
                    Communauté
                </Link>
            </nav>
        </header>
    )
}