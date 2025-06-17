// screens/LoginScreen.js
import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import { TextInput, Button, Card, Text, useTheme } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Simulação de um "Toast" ou notificação. No futuro, podemos usar uma biblioteca para isso.
const showToast = (message) => {
  alert(message); // Usando alert por simplicidade inicial
};

const LoginScreen = ({ setUser }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const theme = useTheme(); // Acessa o tema do React Native Paper

  const handleLogin = async () => {
    if (!email || !password) {
      showToast("Por favor, preencha email e senha.");
      return;
    }
    setIsLoading(true);

    try {
      // Simulando a mesma lógica de login da versão web
      const mockUser = {
        id: 1,
        nome: email.includes('sindico') ? 'João Silva' : email.includes('porteiro') ? 'Maria Santos' : 'Carlos Oliveira',
        email: email,
        user_tipo: email.includes('sindico') ? 'sindico' : email.includes('porteiro') ? 'porteiro' : 'morador',
        condominio: 'Residencial Vista Verde',
        bloco: 'A',
        apartamento: '101'
      };

      await AsyncStorage.setItem('userData', JSON.stringify(mockUser));
      setUser(mockUser);
      
      showToast(`Login realizado com sucesso! Bem-vindo, ${mockUser.nome}`);

    } catch (error) {
      showToast("Erro no login. Verifique suas credenciais.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <KeyboardAvoidingView 
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Card style={styles.card}>
          <Card.Content>
            <View style={styles.header}>
                <View style={styles.logoContainer}>
                    <Text style={styles.logoText}>CW</Text>
                </View>
                <Text variant="headlineLarge" style={styles.title}>CondoWay</Text>
                <Text variant="bodyMedium" style={styles.subtitle}>Seu condomínio conectado e organizado</Text>
            </View>

            <TextInput
              label="Email"
              value={email}
              onChangeText={setEmail}
              mode="outlined"
              style={styles.input}
              keyboardType="email-address"
              autoCapitalize="none"
            />

            <TextInput
              label="Senha"
              value={password}
              onChangeText={setPassword}
              mode="outlined"
              style={styles.input}
              secureTextEntry
            />

            <Button
              mode="contained"
              onPress={handleLogin}
              loading={isLoading}
              disabled={isLoading}
              style={styles.button}
              labelStyle={styles.buttonLabel}
            >
              {isLoading ? 'Entrando...' : 'Entrar'}
            </Button>
            
            <Button
              onPress={() => showToast("Função 'Esqueci a senha' a ser implementada.")}
              style={styles.forgotPasswordButton}
            >
              Esqueci minha senha
            </Button>

            <View style={[styles.demoInfo, {backgroundColor: theme.colors.primaryContainer}]}>
                <Text style={[styles.demoTitle, {color: theme.colors.onPrimaryContainer}]}>Para demonstração, use:</Text>
                <Text style={styles.demoText}>Síndico: sindico@teste.com</Text>
                <Text style={styles.demoText}>Porteiro: porteiro@teste.com</Text>
                <Text style={styles.demoText}>Morador: morador@teste.com</Text>
                <Text style={[styles.demoText, {textAlign: 'center', marginTop: 8, fontWeight: 'bold'}]}>Senha: qualquer</Text>
            </View>

          </Card.Content>
        </Card>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

// Aqui criamos nossos estilos, o equivalente ao CSS.
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f4f8',
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: 20,
  },
  card: {
    borderRadius: 12,
  },
  header: {
    alignItems: 'center',
    marginBottom: 24,
  },
  logoContainer: {
    width: 80,
    height: 80,
    borderRadius: 16,
    backgroundColor: '#4a90e2', // Um azul similar
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  logoText: {
    color: 'white',
    fontSize: 32,
    fontWeight: 'bold',
  },
  title: {
    fontWeight: 'bold',
    color: '#4a90e2',
  },
  subtitle: {
    color: '#555',
  },
  input: {
    marginBottom: 16,
  },
  button: {
    marginTop: 8,
    paddingVertical: 8,
    backgroundColor: '#50c878', // Um verde similar
  },
  buttonLabel: {
    fontSize: 16,
  },
  forgotPasswordButton: {
    marginTop: 16,
  },
  demoInfo: {
    marginTop: 24,
    padding: 16,
    borderRadius: 8,
  },
  demoTitle: {
      textAlign: 'center',
      marginBottom: 8,
      fontWeight: 'bold'
  },
  demoText: {
    fontSize: 12,
    color: '#444'
  }
});

export default LoginScreen;