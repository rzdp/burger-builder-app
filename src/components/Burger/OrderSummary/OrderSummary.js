import React from 'react';
import orderSummaryStyles from './OrderSummary.module.css'

const orderSummary = (props) => {
    return (
        <div className={orderSummaryStyles.OrderSummary}>
            <h3 className={orderSummaryStyles.header}>Order Summary</h3>
            <div className={orderSummaryStyles.body}>
                <p>A delicious burger with the following ingredients:</p>
                <ul>
                    {handleIngredientSummary(props.ingredients)}
                </ul>
                <p className={orderSummaryStyles.footer}>Continue to Checkout?</p>
            </div>
        </div>
    );
}

const handleIngredientSummary = (ingredients) => {
    return Object.keys(ingredients).map(ingredientKey => {
        return (
            <li key={ingredientKey}>
                <span className={orderSummaryStyles.item}>
                    {ingredientKey}:
                </span> {ingredients[ingredientKey]}
            </li>
        );
    });
}

export default orderSummary;