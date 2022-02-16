import React, {useEffect, useState} from "react";
import "./heart.style.css"

export const HeartComponent = ({activateAnimation}) => {
    const [animation, setAnimation] = useState("heart");

    console.log(activateAnimation)

    useEffect(() => {
        setAnimation("heart-animation")

        setTimeout(() => {
            setAnimation("heart")
        }, 1000)
    }, [activateAnimation])

    return (
        <div className={`${animation}`}>
            <div className="circle"/>
            <div className="square"/>
        </div>
    )
}