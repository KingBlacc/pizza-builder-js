import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

const IngrendientButton = ({ingredient, isSelected, onPress, textColor, buttonColor}) => {
    return (
        <TouchableOpacity
            onPress={() => onPress(ingredient)}
            style={{flexWrap: 'wrap', margin: 5}}>
            <View style={[styles.container, {borderColor: buttonColor, backgroundColor: isSelected ? buttonColor : undefined}]}>
                <Text style={[styles.text, {color: textColor}]}>{ingredient}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15,
        borderWidth: 3,
        padding: 5
    },
    text: {
        fontSize: 16,
        fontWeight: 'bold'
    }
});

export default IngrendientButton;