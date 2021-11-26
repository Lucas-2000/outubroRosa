import React from 'react'
import '../styles/header.scss'
import logo from '../assets/images/logo.png'

const Header = () => {
    return (
        <div id="component-header">
            <header>
                <div className="header-button">
                    <a href='#home-content'>
                        <button>Home</button>
                    </a>
                    <a href='#statistic-content'>
                        <button>Estatisticas</button>
                    </a>
                    <a href='#prevention-content'>
                        <button>Prevenção</button>
                    </a>
                    <a href='#about-content'>
                        <button>Quem sou</button>
                    </a>
                    <a href='#contact-content'>
                        <button>Contato</button>
                    </a>
                </div>
                <aside id="home-content">
                    <strong>Mulher por Inteiro</strong>
                    <p>Entenda a importância do <br /> Outubro Rosa</p>
                    <a href='#statistic-content'>
                        <button>Clique aqui para saber mais</button>
                    </a>
                </aside>
                <div className="assets-content">
                    <img src={logo} alt="outubro rosa" />
                </div>
            </header>
        </div>
    )
}

export default Header
