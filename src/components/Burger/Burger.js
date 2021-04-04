import React from 'react';
import burgerStyles from './Burger.module.css'
import BurgerIngredient from './BurgerIngredient/BurgerIngredient'

const burger = (props) => {
    return (
        <div className={burgerStyles.Burger}>
            <BurgerIngredient type="BREAD_TOP"/>
            {handleBurgerIngredients(props.ingredients)}
            <BurgerIngredient type="BREAD_BOTTOM"/>
        </div>
    )
};

const handleBurgerIngredients = (ingredients) => {
    // Create array of ingredient keys
    const ingredientKeys = Object.keys(ingredients);
    // Create burger ingredients
    let burgerIngredients = ingredientKeys.map(ingredientKey => {
        return [...Array(ingredients[ingredientKey])].map((_, i) => {
            return <BurgerIngredient key={ingredientKey + i} type={ingredientKey.toUpperCase()}/>
        });
    }).reduce((prev, current) => {
        return prev.concat(current);
    }, []);

    // Return whether the ingredients or the paragraph
    if (burgerIngredients.length === 0) {
        burgerIngredients = <p>Please start adding ingredient</p>
    }
    return burgerIngredients;
}


export default burger;