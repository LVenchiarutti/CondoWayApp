// screens/MinhaContaT.js
import React from 'react';
import { ScrollView, View, StyleSheet } from 'react-native';
import { Card, Text, Avatar, Badge } from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


const getUserTypeLabel = (type) => {
    switch (type) {
      case 'sindico': return 'Síndico';
      case 'porteiro': return 'Porteiro';
      case 'morador': return 'Morador';
      default: return 'Usuário';
    }
};

const getUserTypeBadgeStyle = (type) => {
    switch (type) {
      case 'sindico': return { backgroundColor: '#e0e7ff', color: '#312e81' };
      case 'porteiro': return { backgroundColor: '#dbeafe', color: '#1e40af' };
      case 'morador': return { backgroundColor: '#d1fae5', color: '#065f46' };
      default: return { backgroundColor: '#e5e7eb', color: '#374151' };
    }
};

const MinhaContaT = ({ route }) => {
    const { user } = route.params;

    return (
        <ScrollView style={styles.container}>
            <View style={styles.contentContainer}>
                <Text variant="headlineSmall" style={styles.title}>👤 Minha Conta</Text>
                <Text variant="bodyLarge" style={styles.subtitle}>Informações do seu perfil</Text>

                <Card style={styles.card}>
                    <Card.Title title="📋 Dados Pessoais" />
                    <Card.Content>
                        <View style={styles.profileHeader}>
                            <Avatar.Text 
                                size={64} 
                                label={user.nome.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2)} 
                                style={styles.avatar}
                                color="#1d4ed8"
                            />
                            <View>
                                <Text variant="titleLarge">{user.nome}</Text>
                                <Badge style={[styles.badge, { backgroundColor: getUserTypeBadgeStyle(user.user_tipo).backgroundColor }]}>
                                    <Text style={{ color: getUserTypeBadgeStyle(user.user_tipo).color }}>
                                        {getUserTypeLabel(user.user_tipo)}
                                    </Text>
                                </Badge>
                            </View>
                        </View>

                        <View style={styles.infoRow}>
                            <Text style={styles.infoLabel}>Email</Text>
                            <Text style={styles.infoValue}>{user.email}</Text>
                        </View>
                        
                        <View style={styles.separator} />

                        <View style={styles.infoRow}>
                            <Text style={styles.infoLabel}>Condomínio</Text>
                            <Text style={styles.infoValue}>{user.condominio}</Text>
                        </View>
                        <View style={styles.infoRow}>
                            <Text style={styles.infoLabel}>Bloco</Text>
                            <Text style={styles.infoValue}>{user.bloco}</Text>
                        </View>
                        <View style={styles.infoRow}>
                            <Text style={styles.infoLabel}>Apartamento</Text>
                            <Text style={styles.infoValue}>{user.apartamento}</Text>
                        </View>
                    </Card.Content>
                </Card>

                <Card style={styles.card}>
                    <Card.Title title="🔐 Segurança da Conta" />
                    <Card.Content>
                        <View style={[styles.infoBox, { backgroundColor: '#d1fae5' }]}>
                            <MaterialCommunityIcons name="check-circle" size={24} color="#065f46" />
                            <View style={styles.infoBoxTextContainer}>
                                <Text style={[styles.infoBoxTitle, { color: '#047857' }]}>Conta Verificada</Text>
                                <Text style={{ color: '#065f46' }}>Sua conta está ativa e verificada.</Text>
                            </View>
                        </View>
                        <View style={[styles.infoBox, { backgroundColor: '#dbeafe' }]}>
                            <MaterialCommunityIcons name="information" size={24} color="#1e40af" />
                            <View style={styles.infoBoxTextContainer}>
                                <Text style={[styles.infoBoxTitle, { color: '#1d4ed8' }]}>Dados Protegidos</Text>
                                <Text style={{ color: '#1e40af' }}>Para alterar seus dados, contate a administração.</Text>
                            </View>
                        </View>
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
    card: { backgroundColor: 'white', marginBottom: 16 },
    profileHeader: { flexDirection: 'row', alignItems: 'center', gap: 16, marginBottom: 24 },
    avatar: { backgroundColor: '#dbeafe' },
    badge: { paddingHorizontal: 10, marginTop: 4 },
    separator: { height: 1, backgroundColor: '#e5e7eb', marginVertical: 16 },
    infoRow: { marginBottom: 12 },
    infoLabel: { color: 'gray', fontSize: 14 },
    infoValue: { fontSize: 16, fontWeight: '500' },
    infoBox: { flexDirection: 'row', alignItems: 'center', padding: 16, borderRadius: 8, gap: 12, marginTop: 12 },
    infoBoxTextContainer: { flex: 1 },
    infoBoxTitle: { fontWeight: 'bold', marginBottom: 4 }
});

export default MinhaContaT;