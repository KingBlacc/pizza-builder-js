import React, {Component} from 'react';
import {View, Text, Image,  ScrollView} from 'react-native';
import {connect} from 'react-redux';
import Colors from '../../constants/Colors';
import {AddBaseSize} from '../../actions';
import BaseItem from '../../components/BaseItem';
import SolidButton from '../../components/common/SolidButton';
import Styles from '../../constants/Styles'

const BaseSizes = [{title: 'Small', cost: 8, limit: 5}, {title: 'Medium', cost: 10, limit: 7}, {title: 'Large', cost: 12, limit: 9}]

class HomeScreen extends Component{

    state = {
        selectedBase: {
            title: null
        }
    }

    componentDidMount(){
        console.log('PIZZA', this.props.pizza)
    }

    renderBaseList(){
        return BaseSizes.map(base => {
            return (
                <BaseItem
                    key={base.title}
                    onPress={item => this.props.AddBaseSize(item)}
                    pizza={base}
                    selected={base.title === this.props.pizza.base.title}/>
            )
        })
    }

    render(){
        return(
            <View style={Styles.container}>
                <Text style={Styles.title}>Select your base size?</Text>
                <ScrollView style={{marginTop: 20, flex: 1}}>
                    {this.renderBaseList()}
                </ScrollView>
                <SolidButton
                    text='Next'
                    buttonColor={Colors.green}
                    textColor={Colors.black}
                    isEnabled={this.props.pizza.base.title !== null}
                    onPress={() => this.props.navigation.navigate('Crust')}/>
            </View>
        )
    }
};

export default connect(({pizzaReducer}) => {
    return {
        pizza: pizzaReducer
    }
}, {AddBaseSize})(HomeScreen);