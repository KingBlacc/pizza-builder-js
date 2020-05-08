import React, {Component} from 'react';
import {View, Text, Image, StyleSheet, ScrollView} from 'react-native';
import Colors from '../../constants/Colors';
import BaseItem from '../../components/BaseItem';
import SolidButton from '../../components/common/SolidButton';

const BaseSizes = [{title: 'Small', cost: 8}, {title: 'Medium', cost: 10}, {title: 'Large', cost: 12}]

class HomeScreen extends Component{

    state = {
        selectedBase: {
            title: null
        }
    }

    renderBaseList(){
        return BaseSizes.map(base => {
            return (
                <BaseItem
                    key={base.title}
                    onPress={item => this.setState({selectedBase: item})}
                    pizza={base}
                    selected={base.title === this.state.selectedBase.title}/>
            )
        })
    }

    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.title}>Select your base size?</Text>
                <ScrollView style={{marginTop: 20, flex: 1}}>
                    {this.renderBaseList()}
                </ScrollView>
                <SolidButton
                    text='Next'
                    buttonColor={Colors.green}
                    textColor={Colors.black}
                    isEnabled={this.state.selectedBase.title !== null}
                    onPress={() => ''}/>
            </View>
        )
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        color: Colors.black
    }
})

export default HomeScreen;