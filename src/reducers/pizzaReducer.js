import types from '../actions/types';

const InitialState = {
    base: {
        title: null
    },
    crust: {
        title: null
    },
    ingredients: []
}

export default (state = InitialState, action) => {
    switch(action.type){
        case types.SELECT_PIZZA_SIZE:
            return {...state, base: action.payload}
        case types.SELECT_CRUST_TYPE:
            return {...state, crust: action.payload}
        case types.ADD_INGREDIENTS:
            return {... state, ingredients: action.payload}
        default:
            return state;
    }
}