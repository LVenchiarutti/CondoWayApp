// @ts-nocheck
// screens/sindico/GestaoAmbientesT.js
import React, { useState } from 'react';
import { ScrollView, View, StyleSheet } from 'react-native';
import { Card, Text, Button, Badge } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

const initialAmbientes = [
  { id: 1, nome: 'Salão de Festas', capacidade: '50 pessoas', disponivel: true, imagem: '🎉' },
  { id: 2, nome: 'Churrasqueira Coberta', capacidade: '20 pessoas', disponivel: true, imagem: '🔥' },
  { id: 3, nome: 'Piscina', capacidade: '30 pessoas', disponivel: false, imagem: '🏊‍♂️' },
  { id: 4, nome: 'Quadra Esportiva', capacidade: '16 pessoas', disponivel: true, imagem: '🏐' },
];

const GestaoAmbientesT = () => {
    const [ambientes, setAmbientes] = useState(initialAmbientes);
    const navigation = useNavigation();

    const toggleDisponibilidade = (id) => {
        let ambienteNome = '';
        let novoStatus = false;
        
        const novosAmbientes = ambientes.map((ambiente) => {
          if (ambiente.id === id) {
            ambienteNome = ambiente.nome;
            novoStatus = !ambiente.disponivel;
            return { ...ambiente, disponivel: novoStatus };
          }
          return ambiente;
        });
    
        setAmbientes(novosAmbientes);
        alert(`O ambiente ${ambienteNome} está agora ${novoStatus ? 'Disponível' : 'Em Manutenção'}.`);
    };

    return (
        <ScrollView style={styles.container}>
            <View style={styles.contentContainer}>
                <Text variant="headlineSmall" style={styles.title}>🏢 Gestão de Ambientes</Text>
                <Text variant="bodyLarge" style={styles.subtitle}>Altere a disponibilidade das áreas comuns.</Text>

                {ambientes.map((ambiente) => (
                    <Card key={ambiente.id} style={styles.card}>
                        <Card.Title
                            title={ambiente.nome}
                            subtitle={`Capacidade: ${ambiente.capacidade}`}
                            left={(props) => <Text {...props} style={styles.emoji}>{ambiente.imagem}</Text>}
                        />
                        <Card.Content>
                             <Badge style={[styles.badge, {backgroundColor: ambiente.disponivel ? '#4caf50' : '#f44336'}]}>
                                {ambiente.disponivel ? 'Disponível' : 'Em Manutenção'}
                            </Badge>
                        </Card.Content>
                        <Card.Actions>
                            <Button onPress={() => toggleDisponibilidade(ambiente.id)}>
                                Alterar Status
                            </Button>
                            <Button onPress={() => navigation.navigate('Reservas')}>
                                Ver Agenda
                            </Button>
                        </Card.Actions>
                    </Card>
                ))}
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#f5f5f5' },
    contentContainer: { padding: 16 },
    title: { fontWeight: 'bold' },
    subtitle: { marginBottom: 24, color: 'gray' },
    card: { marginBottom: 16 },
    emoji: { fontSize: 24 },
    badge: { alignSelf: 'flex-start', color: 'white', marginBottom: 12 },
});

export { default } from './GestaoAmbientesWeb';
