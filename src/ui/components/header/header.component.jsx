import React from "react";

import "./header.style.css"

export const Header = () => {
    return (
        <header className="header">
            <div>VILA MÁGICA</div>
            <div className="presentation">
                <div className="presentetion-text">
                    <h1 className="title">Olá viajante!</h1>
                    <h4 className="welcome">Seja bem vindx!</h4>
                    <p className="text-explanation">Você está em uma lojinha de artes, que visa trazer mais cor e alegria para sua casa e também
                        para sua vida! Aqui você encontra artezinhas que aconchegaram seu coração e mente, para que você
                        tenha um ambiente agradável com pinturas que foram feitas com boas energias. Esperamos que você
                        curta essa viajem para dentro do nosso mundinho colorido!</p>
                    <button className="button">
                        SABER MAIS SOBRE A VILA MÁGICA!
                    </button>
                </div>
                <div className="presentation-examples">
                    <div className="frame1">
                        <div className="image1-banner"/>
                    </div>
                    <div className="frame2">
                        <div className="image2-banner"/>
                    </div>
                </div>
            </div>
        </header>
    )
}