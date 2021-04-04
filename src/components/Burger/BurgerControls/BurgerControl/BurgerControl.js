import React from 'react';
import burgerControlStyles from './BurgerControl.module.css'
import {INGREDIENT_PRICE} from "../../../../constant/Ingredient";

const burgerControl = (props) => {
    return (
        <div className={burgerControlStyles.BurgerControl}>
            <div className={burgerControlStyles.label}>
                {props.label} -
                {
                    INGREDIENT_PRICE[props.ingredientCount.ingredient].toLocaleString('en-US', {
                        currency: 'USD',
                        style: 'currency'
                    })
                }
            </div>
            <button onClick={props.removedIngredient}
                    disabled={props.disabledRemoveIngredientButton}>-
            </button>
            {props.ingredientCount.count}
            <button onClick={props.addedIngredient}>+</button>
        </div>
    )
};

export default burgerControl;