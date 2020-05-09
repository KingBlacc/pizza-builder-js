import React, {Component} from 'react';
import {View, Text, ScrollView, Image, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import {AddCrustType} from '../../actions';
import Colors from '../../constants/Colors';
import Styles from '../../constants/Styles';
import SolidButton from '../../components/common/SolidButton';
import RadioButton from '../../components/common/RadioButton';
import SmallPizza from '../../assets/pizza-small.png';
import MediumPizza from '../../assets/pizza-medium.png';
import LargePizza from '../../assets/pizza-large.png';

const CrustTypes = [{title: 'Thin', cost: 2}, {title: 'Thick', cost: 4}]

class CrustScreen extends Component{

    renderCrustButtons(){
        return CrustTypes.map(crust => {
            return (
                        <RadioButton
                            key={crust.title}
                            buttonColor={Colors.green}
                            data={crust}
                            textColor={Colors.black}
                            isSelected={this.props.pizza.crust.title === crust.title}
                            onPress={res => this.props.AddCrustType(res)}/>
                    )
        })
    }

    renderImage(size){
        switch(size){
            case 'Small':
                return SmallPizza;
            case 'Medium':
                return MediumPizza;
            case 'Large':
                return LargePizza;
            default:
                return SmallPizza;
        }
    }

    render(){
        return(
            <View style={Styles.container}>
                <Text style={Styles.title}>Select your crust thickness</Text>
                <View style={{flex: 1}}>
                    <Image
                        source={this.renderImage(this.props.pizza.base.title)}
                        style={styles.pizza}/>
                    <View style={{flexDirection: 'row'}}>
                        {this.renderCrustButtons()}
                    </View>
                </View>
                <SolidButton
                    text='Next'
                    buttonColor={Colors.green}
                    onPress={() => this.props.navigation.navigate('Ingredients')}
                    isEnabled={this.props.pizza.crust.title !== null}
                    textColor={Colors.black}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    pizza: {
        height: 150,
        width: 150,
        tintColor: Colors.black,
        marginVertical: 30,
        alignSelf: 'center'
    }
})

export default connect(({pizzaReducer}) => {
    return {
        pizza: pizzaReducer
    }
}, {AddCrustType})(CrustScreen);