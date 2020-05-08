import React from 'react';
import {View, Image, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Colors from '../constants/Colors';
import SmallPizza from '../assets/pizza-small.png';
import MediumPizza from '../assets/pizza-medium.png';
import LargePizza from '../assets/pizza-large.png';

const BaseItem = ({pizza, onPress, selected}) => {
    let imgHeight = 80;
    let imgWidth = 80;
    let img = SmallPizza;
    if(pizza.title === 'Medium'){
        imgHeight = 100;
        imgWidth = 100;
        img = MediumPizza;
    }else if(pizza.title === 'Large'){
        imgHeight = 120;
        imgWidth = 120;
        img = LargePizza;
    }

    return (
        <TouchableOpacity
            onPress={() => onPress(pizza)}>
            <View style={[styles.container, {borderWidth: selected ? 3 : 0}]}>
                <Image
                    source={img}
                    style={{
                        tintColor: Colors.black,
                        height: imgHeight,
                        width: imgWidth
                    }}
                    resizeMode='contain'/>
                <View style={{marginLeft: 20}}>
                    <Text style={styles.title}>{pizza.title}</Text>
                    <Text>${pizza.cost}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        borderRadius: 15,
        borderColor: Colors.green,
        padding: 15
    },
    title: {
        fontSize: 16,
        color: Colors.black,
        fontWeight: 'bold'
    }
})

export default BaseItem;