import React, { Component } from 'react';
import {
    TextInput, TouchableOpacity,
    StyleSheet, View, Button
} from 'react-native';

import api from '../services/api'

export default class Cadastro extends Component {
    static navigationOptions = {
        title: "Editar Cliente"
    };

    state = {
        nome: this.props.navigation.state.params.veiculo.nome,
        cpf: this.props.navigation.state.params.veiculo.cpf,
        placa: this.props.navigation.state.params.veiculo.placa
    }

    render() {
        return (
            <View style={styles.all}>

                <View style={styles.fundo} >
                    <TextInput style={styles.input}
                        underlineColorAndroid='transparent'
                        placeholder='Nome Completo'
                        onChangeText={(nome) => this.setState({ nome })}
                        value={this.state.nome}
                    />

                    <TextInput style={styles.input}
                        underlineColorAndroid='transparent'
                        placeholder='CPF'
                        onChangeText={(cpf) => this.setState({ cpf })}
                        value={this.state.cpf}
                    />

                    <TextInput style={styles.input}
                        underlineColorAndroid='transparent'
                        placeholder='Placa do Veículo'
                        onChangeText={(placa) => this.setState({ placa })}
                        value={this.state.placa}
                    />



                    <TouchableOpacity style={styles.botao}>
                        <Button onPress={async () => {
                            await api.put('/cliente', {
                                id: this.props.navigation.state.params.veiculo._id,
                                nome: this.state.nome,
                                cpf: this.state.cpf,
                                placa: this.state.placa
                            })
                            alert('Cliente Alterado com Sucesso!')
                            this.props.navigation.navigate('Main')
                        }}
                            title='Editar'
                            color='#088A08'>
                        </Button>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }


}

const styles = StyleSheet.create({

    input: {
        width: 280,
        height: 40,
        borderColor: 'black',
        borderWidth: 0,
        borderRadius: 10,
        backgroundColor: '#DCDCDC',
        marginTop: 25,
        margin: 30,
        marginBottom: 10
    },
    botao: {
        paddingVertical: 10,
        width: 150,
        height: 40,
        alignItems: 'center',
        marginLeft: 90,
        marginTop: 15
    },

    all: {
        alignItems: 'center'
    }
})  