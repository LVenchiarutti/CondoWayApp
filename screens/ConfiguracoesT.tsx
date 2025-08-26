// @ts-nocheck
// screens/ConfiguracoesT.js
import React, { useState } from 'react';
import { ScrollView, View, StyleSheet } from 'react-native';
import { Card, Text, Button, Switch, Divider, TouchableRipple, Menu } from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const ConfiguracoesT = ({ route }) => {
    const { user } = route.params;

    // Estados para controlar as opções de configuração
    const [modoEscuro, setModoEscuro] = useState(false);
    const [notificacoes, setNotificacoes] = useState(true);
    const [notificacoesPush, setNotificacoesPush] = useState(true);
    const [notificacoesEmail, setNotificacoesEmail] = useState(false);
    
    // Estados para o menu de seleção de fonte
    const [tamanhoFonte, setTamanhoFonte] = useState('medio');
    const [menuVisivel, setMenuVisivel] = useState(false);
    const abrirMenu = () => setMenuVisivel(true);
    const fecharMenu = () => setMenuVisivel(false);

    const getLabelTamanhoFonte = () => {
        if (tamanhoFonte === 'pequeno') return 'Pequeno';
        if (tamanhoFonte === 'grande') return 'Grande';
        return 'Médio';
    }

    return (
        <ScrollView style={styles.container}>
            <View style={styles.contentContainer}>
                <Text variant="headlineSmall" style={styles.title}>⚙️ Configurações</Text>
                <Text variant="bodyLarge" style={styles.subtitle}>
                    Personalize sua experiência no CondoWay
                </Text>

                {/* Card de Aparência */}
                <Card style={styles.card}>
                    <Card.Title title="🎨 Aparência" />
                    <Card.Content>
                        <View style={styles.settingRow}>
                            <View style={styles.settingText}>
                                <Text variant="bodyLarge">Modo Escuro</Text>
                                <Text variant="bodySmall" style={styles.settingDescription}>Reduz o cansaço visual em ambientes escuros</Text>
                            </View>
                            <Switch value={modoEscuro} onValueChange={setModoEscuro} />
                        </View>
                        <Divider style={styles.divider}/>
                        <View style={styles.settingRow}>
                             <View style={styles.settingText}>
                                <Text variant="bodyLarge">Tamanho da Fonte</Text>
                                <Text variant="bodySmall" style={styles.settingDescription}>Ajuste o tamanho do texto para melhor legibilidade</Text>
                            </View>
                            <Menu
                                visible={menuVisivel}
                                onDismiss={fecharMenu}
                                anchor={
                                    <Button mode="outlined" onPress={abrirMenu}>
                                        {getLabelTamanhoFonte()}
                                    </Button>
                                }>
                                <Menu.Item onPress={() => { setTamanhoFonte('pequeno'); fecharMenu(); }} title="Pequeno" />
                                <Menu.Item onPress={() => { setTamanhoFonte('medio'); fecharMenu(); }} title="Médio" />
                                <Menu.Item onPress={() => { setTamanhoFonte('grande'); fecharMenu(); }} title="Grande" />
                            </Menu>
                        </View>
                    </Card.Content>
                </Card>
                
                {/* Card de Notificações */}
                <Card style={styles.card}>
                    <Card.Title title="🔔 Notificações" />
                     <Card.Content>
                        <View style={styles.settingRow}>
                            <Text variant="bodyLarge" style={styles.settingText}>Notificações Gerais</Text>
                            <Switch value={notificacoes} onValueChange={setNotificacoes} />
                        </View>
                        <Divider style={styles.divider}/>
                         <View style={styles.settingRow}>
                            <Text variant="bodyLarge" style={styles.settingText}>Notificações Push</Text>
                            <Switch value={notificacoesPush} onValueChange={setNotificacoesPush} disabled={!notificacoes} />
                        </View>
                         <Divider style={styles.divider}/>
                        <View style={styles.settingRow}>
                            <Text variant="bodyLarge" style={styles.settingText}>Notificações por E-mail</Text>
                            <Switch value={notificacoesEmail} onValueChange={setNotificacoesEmail} disabled={!notificacoes} />
                        </View>
                    </Card.Content>
                </Card>

                <Button mode="contained" style={{ marginTop: 8 }}>
                    Salvar Configurações
                </Button>
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
    settingRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 12,
    },
    settingText: {
        flex: 1, // Permite que o texto ocupe o espaço disponível
        marginRight: 16,
    },
    settingDescription: {
        color: 'gray',
    },
    divider: {
        marginVertical: 4,
    }
});

export { default } from './ConfiguracoesWeb';
