import React, { Component } from 'react';
import { Text, View } from 'react-native';

//Esta é a nossa classe padrão
export default class PrimeiroProjeto extends Component 
{
  //Nunca se esqueça do Render no qual sempre retornará algo
  render()
  {
    return(
      <View>
        <Text>Olá mundo!</Text>
      </View>
    );
  }



}