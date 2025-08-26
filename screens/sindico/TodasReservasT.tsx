// @ts-nocheck
// screens/sindico/TodasReservasT.js
import React, { useState } from 'react';
import { ScrollView, View, StyleSheet } from 'react-native';
import { Card, Text, Button, Portal, Dialog, TextInput, Badge, Divider } from 'react-native-paper';

// Dados de exemplo e funções de ajuda (permanecem os mesmos)
const initialReservas = [
  { id: 1, morador: 'Ana Silva', apt: 'A-102', ambiente: 'Salão de Festas', data: '2025-06-20', horario: '19:00 - 23:00', status: 'Confirmada' },
  { id: 2, morador: 'João Santos', apt: 'B-205', ambiente: 'Churrasqueira 2', data: '2025-06-22', horario: '12:00 - 16:00', status: 'Confirmada' },
  { id: 3, morador: 'Carlos Oliveira', apt: 'A-101', ambiente: 'Quadra Esportiva', data: '2025-06-25', horario: '09:00 - 10:00', status: 'Confirmada' },
  { id: 4, morador: 'Maria Costa', apt: 'C-301', ambiente: 'Salão de Festas', data: '2025-06-15', horario: '18:00 - 22:00', status: 'Concluída' },
  { id: 5, morador: 'Pedro Almeida', apt: 'B-104', ambiente: 'Churrasqueira 1', data: '2025-06-10', horario: '19:00 - 23:00', status: 'Cancelada' },
];

const getStatusStyle = (status) => {
    if (status.includes('Cancelada')) return { backgroundColor: '#fee2e2', color: '#991b1b' };
    switch (status) {
      case 'Confirmada': return { backgroundColor: '#dcfce7', color: '#166534' };
      case 'Concluída': return { backgroundColor: '#e5e7eb', color: '#374151' };
      default: return { backgroundColor: '#e5e7eb', color: '#374151' };
    }
};

const TodasReservasT = () => {
    const [reservas, setReservas] = useState(initialReservas);
    // A lógica de diálogo continua a mesma
    const [dialogAberto, setDialogAberto] = useState(false);
    const [reservaEmEdicao, setReservaEmEdicao] = useState(null);
    
    const abrirDialogEdicao = (reserva) => {
        setReservaEmEdicao(reserva);
        setDialogAberto(true);
    };

    const fecharDialogEdicao = () => {
        setDialogAberto(false);
        setReservaEmEdicao(null);
    }
    
    const handleCancelar = (id) => {
        setReservas(reservas.map(r => r.id === id ? { ...r, status: 'Cancelada pelo Síndico' } : r));
        alert('Reserva cancelada com sucesso.');
    };

    return (
        <>
            <ScrollView style={styles.container}>
                <View style={styles.contentContainer}>
                    <Text variant="headlineSmall" style={styles.title}>📋 Todas as Reservas</Text>
                    <Text variant="bodyLarge" style={styles.subtitle}>Visualize e gerencie todas as reservas.</Text>
                    
                    {/* Mapeamos os dados para renderizar um Card para cada reserva */}
                    {reservas.map((reserva) => (
                        <Card key={reserva.id} style={styles.card}>
                            <Card.Title 
                                title={reserva.ambiente}
                                titleVariant="titleMedium"
                                subtitle={`${reserva.morador} - Apto ${reserva.apt}`}
                                subtitleVariant="bodySmall"
                                right={(props) => (
                                    <Badge {...props} style={[styles.badge, {backgroundColor: getStatusStyle(reserva.status).backgroundColor}]}>
                                        <Text style={{color: getStatusStyle(reserva.status).color, fontSize: 12}}>
                                            {reserva.status}
                                        </Text>
                                    </Badge>
                                )}
                            />
                            <Divider style={styles.divider}/>
                            <Card.Content style={styles.cardContent}>
                               <View style={styles.infoRow}>
                                   <Text style={styles.infoLabel}>Data:</Text>
                                   <Text>{new Date(reserva.data).toLocaleDateString('pt-BR', { timeZone: 'UTC' })}</Text>
                               </View>
                               <View style={styles.infoRow}>
                                   <Text style={styles.infoLabel}>Horário:</Text>
                                   <Text>{reserva.horario}</Text>
                               </View>
                            </Card.Content>

                            {reserva.status === 'Confirmada' && (
                                <Card.Actions>
                                    <Button onPress={() => abrirDialogEdicao(reserva)}>Editar</Button>
                                    <Button textColor="#b91c1c" onPress={() => handleCancelar(reserva.id)}>Cancelar</Button>
                                </Card.Actions>
                            )}
                        </Card>
                    ))}
                </View>
            </ScrollView>

            <Portal>
                <Dialog visible={dialogAberto} onDismiss={fecharDialogEdicao}>
                    {/* O Diálogo de Edição permanece o mesmo */}
                </Dialog>
            </Portal>
        </>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#f5f5f5' },
    contentContainer: { padding: 16 },
    title: { fontWeight: 'bold' },
    subtitle: { color: 'gray', marginBottom: 16 },
    card: {
        marginBottom: 16,
        backgroundColor: 'white',
    },
    cardContent: {
        paddingTop: 16,
        gap: 8,
    },
    badge: {
        marginRight: 16,
    },
    divider: {
        marginHorizontal: 16,
    },
    infoRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    infoLabel: {
        color: 'gray',
    },
});

export { default } from './TodasReservasWeb';
