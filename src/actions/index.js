import types from './types';

export const AddBaseSize = (base) => dispatch => {
    dispatch({type: types.SELECT_PIZZA_SIZE, payload: base})
}

export const AddCrustType = (crust) => dispatch => {
    dispatch({type: types.SELECT_CRUST_TYPE, payload: crust})
} 

export const AddIngredients = (ingredients) => dispatch => {
    dispatch({type: types.ADD_INGREDIENTS, payload: ingredients})
}