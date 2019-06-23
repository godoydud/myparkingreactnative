import React, { Component } from 'react';
import {Text, TouchableOpacity, StyleSheet, View, Image} from 'react-native';



export default class Main extends Component {
    static navigationOptions =  {
        header: null
    }

    render() {
        return (
            <View> 
                <Image style={styles.logo} source={require('../images/logo.png')}></Image>
                       <TouchableOpacity style={styles.productButton}>
                            <Text style={styles.productButtonText} onPress={() => {
                                this.props.navigation.navigate('Cadastro')    
                            }} >Cadastrar Cliente</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.productButton}>
                            <Text style={styles.productButtonText} onPress={() => {
                                this.props.navigation.navigate('Listagem')     
                            }} >Meu Estacionamento</Text>  
                        </TouchableOpacity> 
                    </View> 
        )
    }
}
 
  
const styles = StyleSheet.create({
 
    productButton: { 
        margin: 20, 
        height: 42, 
        borderRadius: 5,
        borderWidth: 2,
        borderColor: "#088A08",
        backgroundColor: "transparent" ,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 10
    },

    productButtonText: {
        fontSize: 16,
        color: "#088A08",
        fontWeight: "bold"
    },

    logo: {
    margin: 102
    }
    
}); 