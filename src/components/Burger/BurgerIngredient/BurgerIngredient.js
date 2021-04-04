import React from 'react';
import burgerIngredientStyles from './BurgerIngredient.module.css';

const burgerIngredient = (props) => {
    return handleBuildIngredient(props.type);
};

const handleBuildIngredient = (type) => {
    let ingredient = null;
    if (type === 'BREAD_TOP') {
        ingredient = (
            <div className={burgerIngredientStyles.BreadTop}>
                <div className={burgerIngredientStyles.Seeds1}/>
                <div className={burgerIngredientStyles.Seeds2}/>
            </div>
        )
    } else if (type === 'BREAD_BOTTOM') {
        ingredient = (
            <div className={burgerIngredientStyles.BreadBottom}/>
        )
    } else if (type === 'MEAT') {
        ingredient = (
            <div className={burgerIngredientStyles.Meat}/>
        )
    } else if (type === 'SALAD') {
        ingredient = (
            <div className={burgerIngredientStyles.Salad}/>
        )
    } else if (type === 'BACON') {
        ingredient = (
            <div className={burgerIngredientStyles.Bacon}/>
        )
    } else if (type === 'CHEESE') {
        ingredient = (
            <div className={burgerIngredientStyles.Cheese}/>
        )
    }
    return ingredient;
}

export default burgerIngredient;