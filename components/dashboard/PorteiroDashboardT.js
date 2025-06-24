// components/dashboard/PorteiroDashboardT.js
import React from 'react';
import { ScrollView, View, StyleSheet } from 'react-native';
import { Card, Text, Button, Badge, Divider } from 'react-native-paper';

// Dados de exemplo
const visitantesHoje = [
    { id: 1, nome: 'Carlos Alberto', documento: '123.456.789-00', apartamento: 'A-101', horario: '14:00', status: 'pendente' },
    { id: 2, nome: 'Marina Santos', documento: '987.654.321-00', apartamento: 'B-205', horario: '16:30', status: 'autorizado' },
    { id: 3, nome: 'Roberto Silva', documento: '456.789.123-00', apartamento: 'A-304', horario: '19:00', status: 'pendente' },
];

const entregas = [
    { id: 1, tipo: 'Correios', destinatario: 'João Silva - A-101', horario: '09:30' },
    { id: 2, tipo: 'E-commerce', destinatario: 'Maria Santos - B-203', horario: '11:15' },
];

const getStatusStyle = (status) => {
    switch (status) {
      case 'autorizado': return { backgroundColor: '#dcfce7', color: '#166534' }; // Verde
      case 'pendente': return { backgroundColor: '#fef3c7', color: '#854d0e' };   // Amarelo
      default: return { backgroundColor: '#e5e7eb', color: '#374151' };
    }
};

const PorteiroDashboardT = ({ route }) => {
    const { user } = route.params;

    return (
        <ScrollView style={styles.container}>
            <View style={styles.contentContainer}>
                <Text variant="headlineSmall" style={styles.title}>🚪 Central de Portaria</Text>
                <Text variant="bodyLarge" style={styles.subtitle}>
                    Controle de acesso em {new Date().toLocaleDateString('pt-BR')}
                </Text>

                <Card style={styles.card}>
                    <Card.Title title="📝 Visitantes Esperados Hoje" />
                    <Card.Content>
                        {visitantesHoje.map((visitante, index) => (
                            <View key={visitante.id}>
                                <View style={styles.listItem}>
                                    <View style={{ flex: 1 }}>
                                        <View style={styles.itemHeader}>
                                            <Text variant="titleMedium">{visitante.nome}</Text>
                                            <Badge style={{ backgroundColor: getStatusStyle(visitante.status).backgroundColor }}>
                                                <Text style={{ color: getStatusStyle(visitante.status).color, fontSize: 12 }}>
                                                    {visitante.status}
                                                </Text>
                                            </Badge>
                                        </View>
                                        <Text variant="bodySmall" style={styles.itemSubtitle}>
                                            Apto {visitante.apartamento} • {visitante.horario}
                                        </Text>
                                    </View>
                                </View>
                                {visitante.status === 'pendente' && (
                                    <Button mode="contained" style={{ marginTop: 8 }}>Autorizar Entrada</Button>
                                )}
                                {index < visitantesHoje.length - 1 && <Divider style={styles.divider} />}
                            </View>
                        ))}
                    </Card.Content>
                </Card>

                <Card style={styles.card}>
                    <Card.Title title="📦 Entregas do Dia" />
                    <Card.Content>
                         {entregas.map((entrega, index) => (
                            <View key={entrega.id}>
                                <View style={styles.listItem}>
                                    <View style={{flex: 1}}>
                                        <Text variant="titleMedium">{entrega.tipo}</Text>
                                        <Text variant="bodySmall" style={styles.itemSubtitle}>
                                            {entrega.destinatario} • {entrega.horario}
                                        </Text>
                                    </View>
                                    <Button mode="outlined">Registrar Entrega</Button>
                                </View>
                                {index < entregas.length - 1 && <Divider style={styles.divider} />}
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
    subtitle: { color: 'gray', marginBottom: 24 },
    card: { backgroundColor: 'white', marginBottom: 16 },
    listItem: { paddingVertical: 12 },
    itemHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 4 },
    itemSubtitle: { color: 'gray' },
    divider: { marginTop: 12 },
});

export default PorteiroDashboardT;