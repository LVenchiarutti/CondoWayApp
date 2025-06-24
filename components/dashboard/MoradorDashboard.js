// components/dashboard/MoradorDashboard.js
import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native'; // Importe o View
import { Card, Text, Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

// ANTES ESTAVA: const MoradorDashboard = ({ user }) => {
// AGORA VAI SER:
const MoradorDashboard = ({ route }) => {
  const { user } = route.params; // <-- A MUDANÇA PRINCIPAL É AQUI!

  const navigation = useNavigation();

  // O resto do código continua exatamente igual...
  const mockReservas = [
    { id: 1, ambiente: 'Salão de Festas', data: '20/01/2024', horario: '19:00 - 23:00' },
    { id: 2, ambiente: 'Churrasqueira 1', data: '25/01/2024', horario: '12:00 - 16:00' },
  ];

  const mockComunicados = [
    { id: 1, titulo: 'Manutenção da Piscina', data: '15/01/2024', resumo: 'A piscina ficará fechada para manutenção...' },
    { id: 2, titulo: 'Nova Taxa de Condomínio', data: '10/01/2024', resumo: 'Informamos sobre o reajuste...' },
  ];

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
        <Text variant="headlineSmall" style={styles.title}>
            Olá, {user.nome.split(' ')[0]}! 👋
        </Text>
        <Text variant="bodyLarge" style={styles.subtitle}>
            Bem-vindo ao seu painel do CondoWay
        </Text>

        <View style={styles.actionsContainer}>
            <Card style={styles.actionCard} onPress={() => navigation.navigate('Ambientes')}>
                <Card.Content style={styles.actionCardContent}>
                    <View style={styles.iconContainer}>
                        <Text style={styles.icon}>🏊‍♂️</Text>
                    </View>
                    <View>
                        <Text variant="titleMedium">Reservar Ambiente</Text>
                        <Text variant="bodySmall">Acesse as áreas de lazer</Text>
                    </View>
                </Card.Content>
            </Card>
            <Card style={styles.actionCard} onPress={() => { /* Navegar para visitantes */ }}>
                <Card.Content style={styles.actionCardContent}>
                    <View style={styles.iconContainer}>
                        <Text style={styles.icon}>👥</Text>
                    </View>
                    <View>
                        <Text variant="titleMedium">Cadastrar Visitante</Text>
                        <Text variant="bodySmall">Registre seus convidados</Text>
                    </View>
                </Card.Content>
            </Card>
        </View>

        <Card style={styles.sectionCard}>
            <Card.Title title="📅 Próximas Reservas" />
            <Card.Content>
                {mockReservas.map((reserva, index) => (
                    <View key={reserva.id} style={[styles.listItem, index > 0 && styles.listItemSeparator]}>
                        <View>
                            <Text variant="bodyLarge">{reserva.ambiente}</Text>
                            <Text variant="bodySmall" style={styles.itemSubtitle}>{reserva.data} • {reserva.horario}</Text>
                        </View>
                        <Button mode="outlined" onPress={() => navigation.navigate('Reservas')}>Ver</Button>
                    </View>
                ))}
            </Card.Content>
        </Card>

        <Card style={styles.sectionCard}>
            <Card.Title title="📢 Últimos Comunicados" />
            <Card.Content>
                {mockComunicados.map((comunicado, index) => (
                     <View key={comunicado.id} style={[styles.listItem, index > 0 && styles.listItemSeparator]}>
                        <View style={{flex: 1}}>
                            <Text variant="bodyLarge">{comunicado.titulo}</Text>
                            <Text variant="bodySmall" style={styles.itemSubtitle} numberOfLines={1}>{comunicado.resumo}</Text>
                        </View>
                    </View>
                ))}
            </Card.Content>
        </Card>
    </ScrollView>
  );
};

// ... (os styles continuam os mesmos)
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5'
    },
    contentContainer: {
        padding: 16,
    },
    title: {
        fontWeight: 'bold',
    },
    subtitle: {
        marginBottom: 24,
        color: 'gray'
    },
    actionsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 24,
        gap: 16,
    },
    actionCard: {
        flex: 1,
    },
    actionCardContent: {
        alignItems: 'center',
        paddingVertical: 16,
    },
    iconContainer: {
        marginBottom: 8,
    },
    icon: {
        fontSize: 32,
    },
    sectionCard: {
        marginBottom: 16,
    },
    listItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 12,
    },
    listItemSeparator: {
        borderTopWidth: 1,
        borderTopColor: '#eee'
    },
    itemSubtitle: {
        color: 'gray'
    }
});


export default MoradorDashboard;