import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

// Componente de botão personalizado
class Botao extends Component {

  constructor(props){
    super(props);
    this.state = {};
    this.css = StyleSheet.create({
      botao: {
        width: 250,
        height: 40,
        borderWidth: 2,
        borderRadius: 25,
        borderColor: this.props.color,
        backgroundColor: 'transparent',
      },
      botaoArea: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
      },
      botaoTxt: {
        fontWeight: 'bold',
        fontSize: 16,
        color: this.props.color
      }
    });
  }

  render(){
    return(
      <TouchableOpacity onPress={this.props.onPress} style={this.css.botao}>
        <View style={this.css.botaoArea}>
          <Text style={this.css.botaoTxt}> {this.props.text}</Text>
        </View>
      </TouchableOpacity>
    );
  }

}

export default class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      phrase: "''Frase do dia...''",
    }

    this.messages = ['A persistência é o caminho do êxito', 'A vida é um constante recomeço. Não se dê por derrotado e siga adiante. As pedras que hoje atrapalham sua caminhada amanhã enfeitarão a sua estrada.', 'Não tenha medo da mudança. Coisas boas se vão para que melhores possam vir.', 'Eu não vou desistir: Missão dada, parceiro, é missão cumprida!', 'No fim tudo dá certo, e se não deu certo é porque ainda não chegou ao fim.']

    this.dayMessage = this.dayMessage.bind(this);
  }

  dayMessage(){
    const state = this.state;
    let randomMessage = Math.floor(Math.random() * this.messages.length);
    state.phrase = this.messages[randomMessage];
    this.setState(state);
  }

  render() {
    return (
      <View style={styles.container}>
        <Image source={require('./images/cookie.png')} />
        <Text style={styles.txt} >{this.state.phrase}</Text>
        <Botao color='#B59619' text='Quebrar Biscoito' onPress={this.dayMessage}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  txt: {
    fontSize: 15,
    color: '#B59619',
    fontStyle: 'italic',
    margin: 30
  }
});
