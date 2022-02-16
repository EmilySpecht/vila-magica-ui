import React, {useState} from "react";

import {AdditionButtonComponent} from "../addition-button/addition-button.component";

import "./item-card.style.css"
import {HeartComponent} from "../heart/heart.component";

export const ItemCard = ({item}) => {
    const [animation, setAnimation] = useState(false);

    const buyItem = () => {
        setAnimation(true)

        setTimeout(() => {
            setAnimation(false)
        }, 1000)
    }

    const sizes = item.size.map((i, k)=> {
        return (
            <div className="size">
                {i}
            </div>
        )
    })

    return (
        <div className="item-card">
            <div className="item-image" style={{
                backgroundImage: `url(${item.image})`
            }}/>
            <h1 className="item-title">
                {item.title}
            </h1>
            <p className="item-description">
                {item.description}
            </p>
            <div className="sizes">
                {sizes}
            </div>
            <div className="item-infos-buy">
                <span className="item-price">
                    R${item.price}
                </span>

                <div className="buttons">
                    <AdditionButtonComponent/>
                    <button className="item-button-buy" onClick={buyItem}>
                        <HeartComponent activateAnimation={animation}/>
                        EU QUERO
                    </button>
                </div>
            </div>

        </div>
    )
}