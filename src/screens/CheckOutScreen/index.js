import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import Colors from '../../constants/Colors';
import Styles from '../../constants/Styles';
import SolidButton from '../../components/common/SolidButton';

class CheckOutScreen extends Component{
    
    renderIngredientCost(){
        const {ingredients} = this.props.pizza;
        let cost = 0;
        if(ingredients.length > 3){
            cost = ((ingredients.length - 3) * 0.5)
        }

        return cost;
    }

    renderTotalCost(){
        const {ingredients, crust, base} = this.props.pizza;
        let cost = 0;
        if(ingredients.length > 3){
            cost = ((ingredients.length - 3) * 0.5)
        }

        cost += (crust.cost + base.cost)

        return cost;
    }

    render(){
        const {base, crust, ingredients} = this.props.pizza;
        return(
            <View style={Styles.container}>
                <Text style={Styles.title}>Order Summary</Text>
                <View style={{flex: 1}}>
                    <Text>
                        {`${base.title} size pizza with a ${crust.title.toLowerCase()} crust`}
                    </Text>
                    <View style={styles.receiptContainer}>
                        <Text style={{marginBottom: 8, fontWeight: 'bold'}}>Order #022</Text>
                        <View style={styles.receiptRow}>
                            <Text>{base.title} pizza</Text>
                            <Text>${base.cost}</Text>
                        </View>
                        <View style={styles.receiptRow}>
                            <Text>{crust.title} crust</Text>
                            <Text>${crust.cost}</Text>
                        </View>
                        <View style={styles.receiptRow}>
                            <Text style={{maxWidth: '80%', flexWrap: 'wrap'}}>Ingredients: {ingredients.join(', ')}</Text>
                            <Text>${this.renderIngredientCost()}</Text>
                        </View>
                        <View style={[styles.receiptRow, {marginTop: 15}]}>
                            <Text style={{color: Colors.green, fontSize: 16, fontWeight: 'bold'}}>Total Cost:</Text>
                            <Text style={{color: Colors.green, fontSize: 16, fontWeight: 'bold'}}>${this.renderTotalCost()}</Text>
                        </View>
                    </View>
                </View>
                <SolidButton
                    text='Check Out'
                    isEnabled={true}
                    buttonColor={Colors.green}
                    textColor={Colors.black}
                    onPress={() => ''}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    receiptContainer: {
        borderColor: Colors.lightGrey,
        borderStyle: 'dashed',
        borderWidth: 2,
        borderRadius: 10,
        padding: 10,
        marginVertical: 15
    },
    receiptRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    }
})

export default connect(({pizzaReducer}) => {
    return {
        pizza: pizzaReducer
    }
})(CheckOutScreen)