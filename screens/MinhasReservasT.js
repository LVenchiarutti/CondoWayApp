// screens/MinhasReservasT.js
import React, { useState } from 'react';
import { ScrollView, View, StyleSheet } from 'react-native';
import { Card, Text, Button, Badge, SegmentedButtons } from 'react-native-paper';

// Dados de exemplo, como no projeto original
const reservasData = {
    ativas: [
      { id: 1, ambiente: 'Salão de Festas', data: '25/04/2024', horario: '19:00-23:00', status: 'confirmada', icone: '🎉' },
      { id: 2, ambiente: 'Churrasqueira 1', data: '30/01/2024', horario: '12:00-16:00', status: 'confirmada', icone: '🔥' }
    ],
    canceladas: [
      { id: 3, ambiente: 'Quadra Esportiva', data: '18/01/2024', horario: '14:00-16:00', status: 'cancelada', icone: '🏐', motivoCancelamento: 'Cancelado pelo usuário' }
    ],
    historico: [
      { id: 4, ambiente: 'Sauna', data: '10/01/2024', horario: '18:00-20:00', status: 'concluida', icone: '🧖‍♀️' },
      { id: 5, ambiente: 'Salão de Jogos', data: '05/01/2024', horario: '19:00-22:00', status: 'concluida', icone: '🎱' }
    ]
};

const getStatusStyle = (status) => {
    switch (status) {
      case 'confirmada': return { backgroundColor: '#d1fae5', color: '#065f46' };
      case 'cancelada': return { backgroundColor: '#fee2e2', color: '#991b1b' };
      case 'concluida': return { backgroundColor: '#dbeafe', color: '#1e40af' };
      default: return { backgroundColor: '#e5e7eb', color: '#374151' };
    }
};

const getStatusLabel = (status) => {
    switch (status) {
      case 'confirmada': return 'Confirmada';
      case 'cancelada': return 'Cancelada';
      case 'concluida': return 'Concluída';
      default: return status;
    }
};

const ReservaCard = ({ reserva, showActions = false }) => (
    <Card style={styles.reservaCard}>
      <Card.Content>
        <View style={styles.cardTopRow}>
            <View style={styles.cardInfo}>
                <Text style={styles.icone}>{reserva.icone}</Text>
                <View>
                    <Text variant="titleMedium">{reserva.ambiente}</Text>
                    <Text variant="bodySmall" style={styles.itemSubtitle}>{reserva.data} • {reserva.horario}</Text>
                </View>
            </View>
            <Badge style={{ backgroundColor: getStatusStyle(reserva.status).backgroundColor }}>
                <Text style={{ color: getStatusStyle(reserva.status).color, fontSize: 12 }}>
                    {getStatusLabel(reserva.status)}
                </Text>
            </Badge>
        </View>
        {reserva.motivoCancelamento && (
          <Text style={styles.motivoCancelamento}>{reserva.motivoCancelamento}</Text>
        )}
        {showActions && reserva.status === 'confirmada' && (
          <View style={styles.actionsContainer}>
            <Button mode="outlined" style={styles.actionButton}>Editar</Button>
            <Button mode="contained" buttonColor="#b91c1c" style={styles.actionButton}>Cancelar</Button>
          </View>
        )}
      </Card.Content>
    </Card>
);

const MinhasReservasT = () => {
    const [value, setValue] = useState('ativas'); // Controla a aba selecionada

    const renderContent = () => {
        const data = reservasData[value];
        if (data.length === 0) {
            return (
                <View style={styles.emptyContainer}>
                    <Text variant="headlineSmall">🎉</Text>
                    <Text style={styles.emptyText}>Nenhuma reserva aqui.</Text>
                </View>
            )
        }
        return data.map(reserva => (
            <ReservaCard key={reserva.id} reserva={reserva} showActions={value === 'ativas'} />
        ))
    }

    return (
        <ScrollView style={styles.container}>
            <View style={styles.contentContainer}>
                <Text variant="headlineSmall" style={styles.title}>Minhas Reservas</Text>
                <Text variant="bodyLarge" style={styles.subtitle}>Gerencie suas reservas de ambientes</Text>

                <SegmentedButtons
                    value={value}
                    onValueChange={setValue}
                    buttons={[
                        { value: 'ativas', label: `Ativas (${reservasData.ativas.length})` },
                        { value: 'canceladas', label: `Canceladas (${reservasData.canceladas.length})` },
                        { value: 'historico', label: `Histórico (${reservasData.historico.length})` },
                    ]}
                    style={styles.segmentedButtons}
                />

                <View style={styles.listContainer}>
                    {renderContent()}
                </View>
            </View>
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
    segmentedButtons: {
        marginBottom: 24,
    },
    listContainer: {
        gap: 12,
    },
    reservaCard: {
        borderRadius: 12,
        backgroundColor: 'white'
    },
    cardTopRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
    },
    cardInfo: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12,
    },
    icone: {
        fontSize: 28,
    },
    itemSubtitle: {
        color: 'gray',
    },
    actionsContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        gap: 8,
        marginTop: 16,
    },
    actionButton: {
        flex: 1,
    },
    motivoCancelamento: {
        color: '#b91c1c',
        fontSize: 12,
        marginTop: 8,
    },
    emptyContainer: {
        paddingVertical: 48,
        alignItems: 'center',
        gap: 16,
    },
    emptyText: {
        color: 'gray',
    }
});

export default MinhasReservasT;