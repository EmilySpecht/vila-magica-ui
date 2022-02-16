import React from "react";
import "./categories.style.css"

export const CategoriesComponent = () => {
    return (
        <div className="categories">
            <div className="category-frame1">
                <div className="category-watercolor">
                    AQUARELA
                </div>
                <div className="category-frame2">
                    <div className="category-digital">DIGITAL</div>
                    <div className="category-frame3">
                        <div className="category-css">CSS</div>
                        <div className="category-lineart">LINE ART</div>
                    </div>
                </div>
            </div>
            <div className="category-embroidery">BORDADO</div>
        </div>
    )
}