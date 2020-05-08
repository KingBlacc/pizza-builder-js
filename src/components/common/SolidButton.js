import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

const SolidButton = ({text, onPress, buttonColor, textColor, isEnabled}) => {
    return (
        <TouchableOpacity
            disabled={!isEnabled}
            onPress={() => onPress()}>
            <View style={[styles.container, {backgroundColor: buttonColor, opacity: isEnabled ? 1 : 0.5}]}>
                <Text style={[styles.btnText, {color: textColor}]}>{text}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 15,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15
    },
    btnText: {
        fontSize: 16,
        fontWeight: 'bold'
    }
});

export default SolidButton;