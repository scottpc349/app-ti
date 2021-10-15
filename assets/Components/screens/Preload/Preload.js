import React,{useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { Container, LoadingIcon, LoadingText } from './styles';
import Icon from 'react-native-vector-icons/FontAwesome5';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationContainer } from '@react-navigation/native';

export default function({navigation}) {
useEffect(() => {
const checktoken=async()=>{
    const token=await AsyncStorage.getItem('token');
    if(token){

    }
    else navigation.navigate('SignIn');
}
checktoken();
}, [])
    return (
        <Container>
            <Icon name="wrench" size={80} color="#F7F3F2" />
            <Icon name="laptop" size={190} color="#F7F3F2" style={{marginTop: -139}} />
<LoadingIcon size="large" color="#FFF" />
<LoadingText>Carregando...</LoadingText>
        </Container>
    )
}