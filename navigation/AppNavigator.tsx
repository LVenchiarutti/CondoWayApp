// @ts-nocheck
// navigation/AppNavigator.js
import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ActivityIndicator, View } from 'react-native';

import LoginScreen from '../screens/LoginT'; 
import DashboardScreen from '../screens/DashboardT'; 

const Stack = createNativeStackNavigator();

const AppNavigator: React.FC = () => {
  const [user, setUser] = React.useState<any>(null);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    // Função para verificar se o usuário está logado
    const checkUser = async () => {
      try {
        const userData = await AsyncStorage.getItem('userData');
        if (userData) setUser(JSON.parse(userData));
      } catch (e) {
        console.error('Failed to load user data.', e);
      } finally {
        setIsLoading(false);
      }
    };

    checkUser();
  }, []);

  if (isLoading) {
    // Mostra uma tela de carregamento enquanto verifica o login
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {user ? (
          // Se o usuário estiver logado, mostra o Dashboard
          <Stack.Screen name="Dashboard">
            {props => <DashboardScreen {...props} user={user} setUser={setUser} />}
          </Stack.Screen>
        ) : (
          // Se não, mostra a tela de Login
          <Stack.Screen name="Login">
            {props => <LoginScreen {...props} setUser={setUser} />}
          </Stack.Screen>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
