import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Colors from '../../constants/Colors';

const RadioButton = ({data, onPress, buttonColor, textColor, isSelected}) => {
    return(
        <TouchableOpacity 
            onPress={() => onPress(data)}>
            <View style={[styles.container, {borderColor: buttonColor}]}>
                <View style={[styles.button, {borderColor: buttonColor, backgroundColor: isSelected ? buttonColor : undefined}]}/>
                <Text style={[styles.text, {color: textColor, marginHorizontal: 5}]}>{data.title}</Text>
                <Text style={[styles.text, {color: textColor}]}>${data.cost}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 8,
        flexDirection: 'row',
        borderRadius: 15,
        borderWidth: 3,
        margin: 10,
        alignItems: 'center',
        flexWrap: 'wrap'
    },
    button: {
        height: 15,
        width: 15,
        borderRadius: 50,
        borderWidth: 3
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold'
    }
})

export default RadioButton;