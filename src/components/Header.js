import React from 'react';
import { Link, Route } from 'react-router-dom';
import logo from '../images/logo.svg';

function Header({onLinkClick}) {
    const email = localStorage.getItem('email')
    return (
        <header className="header root__content">
        <div className="header__menu">
            <img src={logo} alt="" className="header__logo"/>
            <div className="header__profile">
                <p className="header__email">{email}</p>
                <Route path="/sign-up">
                    <Link className="header__link" to="/sign-in">Войти</Link>
                </Route>
                <Route path="/sign-in">
                    <Link className="header__link" to="/sign-up">Регистрация</Link>
                </Route>
                <Route exact path="/">
                    <Link className="header__link" to="/sign-in" onClick={onLinkClick}>Выйти</Link>
                </Route>
            </div>
        </div>
        </header>
    )
}

export default Header