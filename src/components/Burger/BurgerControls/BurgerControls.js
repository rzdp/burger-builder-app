import React from 'react';
import BurgerControl from './BurgerControl/BurgerControl'
import burgerControlsStyles from './BurgerControls.module.css';

const burgerControls = (props) => {
    return (
        <div className={burgerControlsStyles.BurgerControls}>
            <p className={burgerControlsStyles.priceHeader}>Get it for only
                <span className={burgerControlsStyles.priceValue}>
                    {props.price.toLocaleString('en-US', {currency: 'USD', style: 'currency'})}!
                </span>
            </p>
            {handleBurgerControl(props)}
            <button onClick={props.purchase}
                    className={burgerControlsStyles.orderButton}
                    disabled={!props.purchasable}>Place Order</button>
        </div>
    )
};

const handleBurgerControl = (props) => {
    const controls = [
        {label: 'Salad', type: 'salad'},
        {label: 'Bacon', type: 'bacon'},
        {label: 'Cheese', type: 'cheese'},
        {label: 'Meat', type: 'meat'}
    ];
    return controls.map(control => {

        return (
            <BurgerControl
                key={control.label}
                label={control.label}
                ingredientCount={{ingredient: control.type, count: props.ingredients[control.type]}}
                addedIngredient={() => props.addedIngredient(control.type, 'ADD')}
                removedIngredient={() => props.removedIngredient(control.type, 'REMOVE')}
                disabledRemoveIngredientButton={props.disabledRemoveIngredientButton[control.type]}/>
        );
    })
}

export default burgerControls;