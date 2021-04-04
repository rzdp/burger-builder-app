import React, {Component, Fragment} from 'react';
import Burger from '../../components/Burger/Burger';
import BurgerControls from "../../components/Burger/BurgerControls/BurgerControls";
import {INGREDIENT_PRICE} from '../../constant/Ingredient'
import Modal from '../../components/Global/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'


class BurgerBuilder extends Component {

    state = {
        ingredients: {
            meat: 0,
            bacon: 0,
            salad: 0,
            cheese: 0
        },
        totalPrice: 4,
        purchasable: false,
        purchasing: false
    }

    handleIngredient = (type, operation) => {
        // Get new ingredients & total price state
        const currentCount = this.state.ingredients[type];
        const currentTotalPrice = this.state.totalPrice;

        let updatedCount = currentCount;
        let updatedTotalPrice = currentTotalPrice;

        if (operation === 'ADD') {
            updatedCount++;
            updatedTotalPrice = currentTotalPrice + INGREDIENT_PRICE[type];
        } else if (operation === 'REMOVE') {
            if (updatedCount <= 0) {
                return;
            }
            updatedCount--;
            updatedTotalPrice = currentTotalPrice - INGREDIENT_PRICE[type];
        }
        const updatedIngredients = {...this.state.ingredients};
        updatedIngredients[type] = updatedCount;

        this.setState({
            ingredients: updatedIngredients,
            totalPrice: updatedTotalPrice
        })
        this.handleUpdatePurchaseState(updatedIngredients);
    }

    handleDisableRemoveIngredientButton = () => {
        const disabledInfo = {...this.state.ingredients};
        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0;
        }
        return disabledInfo;
    }

    handleUpdatePurchaseState = (ingredients) => {
        const sum = Object.keys(ingredients)
            .map(ingredientKey => {
                return ingredients[ingredientKey];
            })
            .reduce((prev, current) => {
                return prev + current;
            }, 0);
        this.setState({
            purchasable: sum > 0
        });
    }

    handlePurchase = () => {
        this.setState({purchasing: true});
    }

    handleCancelPurchase = () => {
        this.setState({purchasing: false});
    }

    render() {
        return (
            <Fragment>
                <Modal showedModal={this.state.purchasing} closedModal={this.handleCancelPurchase}>
                    <OrderSummary ingredients={this.state.ingredients}/>
                </Modal>
                <Burger ingredients={this.state.ingredients}/>
                <BurgerControls ingredients={this.state.ingredients}
                                addedIngredient={this.handleIngredient}
                                removedIngredient={this.handleIngredient}
                                disabledRemoveIngredientButton={this.handleDisableRemoveIngredientButton()}
                                purchasable={this.state.purchasable}
                                purchase={this.handlePurchase}
                                price={this.state.totalPrice}/>
            </Fragment>
        )
    }
}

export default BurgerBuilder;