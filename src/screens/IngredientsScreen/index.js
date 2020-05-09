import React, {Component} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {connect} from 'react-redux';
import {AddIngredients} from '../../actions';
import Colors from '../../constants/Colors';
import Styles from '../../constants/Styles';
import IngredientButton from '../../components/common/IngredientButton';
import SolidButton from '../../components/common/SolidButton';

const Ingredients = ['Pepperoni', 'Mushrooms', 'Onions', 'Sausage', 'Bacon', 'Extra cheese', 'Black olives', 'Green peppers', 'Pineapples', 'Spinach'];

class IngredientsScreen extends Component{

    constructor(props){
        super(props)
    }
    
    onSelectHandler = (ingredient) => {
        let data = this.props.pizza.ingredients;
        let arr = [];
        if(data.includes(ingredient)){
            data.map(item => {
                if(item !== ingredient){
                    arr.push(item);
                }
            })
            this.props.AddIngredients(arr);
            return;
        }
        data.push(ingredient);
        this.props.AddIngredients(data)
    }

    renderIngredients(){
        return Ingredients.map(ingredient => {
            return(
                <IngredientButton
                    key={ingredient}
                    ingredient={ingredient}
                    textColor={Colors.black}
                    buttonColor={Colors.green}
                    onPress={this.onSelectHandler}
                    isSelected={this.props.pizza.ingredients.includes(ingredient)}/>
            )
        })
    }

    renderExtraCost(){
        const cost = ((this.props.pizza.ingredients.length - 3) * 0.5);
        return (
            <View style={{marginVertical: 10}}>
                <Text style={{fontSize: 16, color: Colors.black, fontWeight: 'bold'}}>Additional Cost: <Text>${cost}</Text></Text>
            </View>
        )
    }

    render(){
        return(
            <View style={Styles.container}>
                <Text style={Styles.title}>Select your toppings</Text>
                <Text style={styles.text}>You are allowed to select a maximum of {this.props.pizza.base.limit} toppings</Text>
                <View style={styles.container}>
                    {this.renderIngredients()}
                </View>
                {this.props.pizza.ingredients.length > 3 ? this.renderExtraCost() : null}
                <SolidButton
                    text='Order Summary'
                    buttonColor={Colors.green}
                    textColor={Colors.black}
                    onPress={() => this.props.navigation.navigate('CheckOut')}
                    isEnabled={this.props.pizza.ingredients.length <= this.props.pizza.base.limit}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    text: {
        fontSize: 16,
        textAlign: 'left',
        marginTop: 15,
        maxWidth: '90%'
    },
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        paddingVertical: 20,
        flex: 1
    }
})

export default connect(({pizzaReducer}) => {
    return {
        pizza: pizzaReducer
    }
}, {AddIngredients})(IngredientsScreen);