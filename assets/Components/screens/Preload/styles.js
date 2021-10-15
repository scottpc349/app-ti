import React from 'react';
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
background-color: #63C2DD;
flex: 1;
justify-content: center;
align-items: center;
`;

export const LoadingIcon = styled.ActivityIndicator`
margin-top: 50px;
`;

export const LoadingText = styled.Text`
font-size: 18px;
margin-top: 20px;
`;