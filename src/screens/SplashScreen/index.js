import React from 'react';
import {View, Text, Image, ActivityIndicator, StyleSheet, Platform, StatusBar} from 'react-native';
import Colors from '../../constants/Colors';
import Logo from '../../assets/logo.png';

const SplashScreen = () => {
    if(Platform.OS === 'android'){
        StatusBar.setBackgroundColor(Colors.green)
    }else{
        StatusBar.setBarStyle('dark-content')
    }
    return(
        <View style={styles.container}>
            <View>
                <Image
                    source={Logo}
                    resizeMode='contain'
                    style={styles.logo}/>
                <Text style={styles.headerStyle}>Pizza Builder</Text>
            </View>
            <View style={styles.loadContainer}>
                <ActivityIndicator
                    size='large'
                    color={Colors.black}/>
                <Text style={{color: Colors.black}}>Loading Content</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.green
    },
    headerStyle: {
        fontSize: 20,
        color: Colors.black,
        fontWeight: 'bold',
        letterSpacing: 1
    },
    logo: {
        height: 150,
        width: 150,
        tintColor: Colors.black
    },
    loadContainer: {
        position: 'absolute',
        bottom: 15
    }
});

export default SplashScreen;