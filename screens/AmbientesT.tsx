// @ts-nocheck
// screens/AmbientesT.js
import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Card, Text, Button, Badge } from 'react-native-paper';

// O nome da função agora é o mesmo do arquivo, para evitar confusão.
const AmbientesT = () => { 
  const ambientes = [
    { id: 1, nome: 'Salão de Festas', descricao: 'Espaço para eventos e comemorações', capacidade: '50 pessoas', disponivel: true, imagem: '🎉' },
    { id: 2, nome: 'Churrasqueira Coberta', descricao: 'Área de churrasqueira com mesas', capacidade: '20 pessoas', disponivel: true, imagem: '🔥' },
    { id: 3, nome: 'Piscina', descricao: 'Área aquática com deck', capacidade: '30 pessoas', disponivel: false, imagem: '🏊‍♂️' },
  ];

  // O resto do código permanece exatamente o mesmo...
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      <Text variant="headlineSmall" style={styles.title}>Ambientes para Reserva</Text>
      <Text variant="bodyLarge" style={styles.subtitle}>Selecione uma área para reservar</Text>

      {ambientes.map((ambiente) => (
        <Card key={ambiente.id} style={styles.card}>
            <Card.Content>
                <View style={styles.cardHeader}>
                    <Text style={styles.emoji}>{ambiente.imagem}</Text>
                    <View>
                        <Text variant="titleLarge">{ambiente.nome}</Text>
                        <Text variant="bodyMedium" style={styles.itemSubtitle}>{ambiente.descricao}</Text>
                    </View>
                </View>
                <Text style={styles.itemSubtitle}>Capacidade: {ambiente.capacidade}</Text>
                <Badge style={[styles.badge, {backgroundColor: ambiente.disponivel ? '#4caf50' : '#f44336'}]}>
                    {ambiente.disponivel ? 'Disponível' : 'Manutenção'}
                </Badge>
                <Button 
                    mode="contained" 
                    style={styles.button}
                    disabled={!ambiente.disponivel}
                >
                    Fazer Reserva
                </Button>
            </Card.Content>
        </Card>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
    },
    contentContainer: {
        padding: 16,
    },
    title: {
        fontWeight: 'bold',
    },
    subtitle: {
        marginBottom: 24,
        color: 'gray',
    },
    card: {
        marginBottom: 16,
    },
    cardHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 12,
    },
    emoji: {
        fontSize: 40,
        marginRight: 16,
    },
    itemSubtitle: {
        color: 'gray',
    },
    badge: {
        alignSelf: 'flex-start',
        marginTop: 12,
        color: 'white',
    },
    button: {
        marginTop: 16,
    }
});

// A exportação continua a mesma.
export { default } from './AmbientesWeb';
