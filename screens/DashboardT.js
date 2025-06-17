// screens/DashboardScreen.js
import React from 'react';
import { View } from 'react-native';
import { Button, Text } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';


const DashboardScreen = ({ user, setUser }) => {

  const handleLogout = async () => {
    await AsyncStorage.removeItem('userData');
    setUser(null);
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text variant="headlineMedium">Olá, {user.nome}!</Text>
      <Text>Você está no Dashboard.</Text>
      <Button mode="contained" onPress={handleLogout} style={{marginTop: 20}}>
        Sair
      </Button>
    </View>
  );
};

export default DashboardScreen;