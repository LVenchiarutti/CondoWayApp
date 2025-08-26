// @ts-nocheck
// components/dashboard/SindicoDashboard.js
import React from 'react';
import { ScrollView, View, StyleSheet } from 'react-native';
import { Card, Text, Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const SindicoDashboard = ({ route }) => {
    const { user } = route.params;
    const navigation = useNavigation();

    const stats = {
        reservasHoje: 8,
        moradoresTotal: 45,
        ambientesAtivos: 6,
        visitantesHoje: 12
    };

    const ultimasReservas = [
        { id: 1, morador: 'Ana Silva', ambiente: 'Salão de Festas', horario: '19:00-23:00' },
        { id: 2, morador: 'João Santos', ambiente: 'Churrasqueira 2', horario: '14:00-18:00' },
    ];

    const StatCard = ({ title, value, icon, color }) => (
        <Card style={[styles.statCard, { backgroundColor: color.bg }]}>
            <Card.Content style={styles.statCardContent}>
                <View>
                    <Text style={{ color: color.text }}>{title}</Text>
                    <Text variant="headlineMedium" style={{ color: color.main }}>{value}</Text>
                </View>
                <View style={[styles.statIconContainer, { backgroundColor: color.main }]}>
                    <Text style={styles.statIcon}>{icon}</Text>
                </View>
            </Card.Content>
        </Card>
    );

    return (
        <ScrollView style={styles.container}>
            <View style={styles.contentContainer}>
                <Text variant="headlineSmall" style={styles.title}>Painel Administrativo 🏢</Text>
                <Text variant="bodyLarge" style={styles.subtitle}>Gestão completa do {user.condominio}</Text>

                <View style={styles.statsGrid}>
                    <StatCard title="Reservas Hoje" value={stats.reservasHoje} icon="📅" color={{ bg: '#dbeafe', text: '#1e40af', main: '#3b82f6' }} />
                    <StatCard title="Total Moradores" value={stats.moradoresTotal} icon="👥" color={{ bg: '#dcfce7', text: '#166534', main: '#22c55e' }}/>
                    <StatCard title="Ambientes Ativos" value={stats.ambientesAtivos} icon="🏊‍♂️" color={{ bg: '#f3e8ff', text: '#581c87', main: '#9333ea' }}/>
                    <StatCard title="Visitantes Hoje" value={stats.visitantesHoje} icon="🚪" color={{ bg: '#ffedd5', text: '#9a3412', main: '#f97316' }}/>
                </View>

                <Card style={styles.card}>
                    <Card.Title title="Ações Rápidas" />
                    <Card.Content style={styles.quickActionsContainer}>
                        <Button mode="contained" onPress={() => {}} style={styles.quickActionButton} icon="account-group">
                            Gerenciar Moradores
                        </Button>
                        <Button mode="contained" onPress={() => navigation.navigate('Ambientes')} style={styles.quickActionButton} icon="office-building">
                            Gestão de Ambientes
                        </Button>
                        <Button mode="contained" onPress={() => navigation.navigate('Comunicados')} style={styles.quickActionButton} icon="send">
                            Enviar Comunicado
                        </Button>
                    </Card.Content>
                </Card>
                
                <Card style={styles.card}>
                    <Card.Title title="Reservas Recentes" />
                    <Card.Content>
                       {ultimasReservas.map((reserva, index) => (
                           <View key={reserva.id} style={[styles.listItem, index > 0 && styles.separator]}>
                               <View>
                                   <Text variant="titleMedium">{reserva.morador}</Text>
                                   <Text style={styles.itemSubtitle}>{reserva.ambiente} • {reserva.horario}</Text>
                               </View>
                               <Button mode="outlined" onPress={() => navigation.navigate('Reservas')}>Detalhes</Button>
                           </View>
                       ))}
                    </Card.Content>
                </Card>

            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#f5f5f5' },
    contentContainer: { padding: 16 },
    title: { fontWeight: 'bold' },
    subtitle: { marginBottom: 24, color: 'gray' },
    card: { marginBottom: 16, backgroundColor: 'white' },
    statsGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        marginBottom: 8, // Gap vertical
    },
    statCard: {
        width: '48%', // Para ter 2 cards por linha
        marginBottom: 16,
    },
    statCardContent: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    statIconContainer: {
        width: 48,
        height: 48,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
    },
    statIcon: {
        fontSize: 24,
    },
    quickActionsContainer: {
        gap: 8,
    },
    quickActionButton: {
        paddingVertical: 8,
    },
    listItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 12,
    },
    separator: {
        borderTopWidth: 1,
        borderTopColor: '#eee',
    },
    itemSubtitle: {
        color: 'gray'
    },
});

export { default } from './SindicoDashboardWeb';
