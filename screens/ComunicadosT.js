// screens/ComunicadosT.js
import React, { useState } from 'react';
import { ScrollView, View, StyleSheet } from 'react-native';
import { Card, Text, Button, Badge, TextInput } from 'react-native-paper';

// Dados de exemplo, como no projeto original
const comunicadosData = [
    { id: 1, titulo: 'Manutenção da Piscina - Programada', conteudo: 'Informamos que a piscina ficará fechada para manutenção preventiva nos dias 25 e 26 de janeiro...', autor: 'Síndico João Silva', data: '20/01/2024', tipo: 'manutencao', prioridade: 'alta' },
    { id: 2, titulo: 'Nova Taxa de Condomínio - Janeiro 2024', conteudo: 'Conforme aprovado em assembleia, informamos o reajuste da taxa condominial para R$ 485,00...', autor: 'Administração', data: '18/01/2024', tipo: 'financeiro', prioridade: 'alta' },
    { id: 3, titulo: 'Horário de Funcionamento da Academia', conteudo: 'A academia do condomínio funcionará em horário estendido durante o mês de janeiro...', autor: 'Porteiro Carlos', data: '15/01/2024', tipo: 'geral', prioridade: 'media' },
];

const getTipoColor = (tipo) => {
    // Cores mais sutis para os badges
    switch (tipo) {
      case 'manutencao': return { backgroundColor: '#ffedd5', color: '#9a3412' }; // Laranja
      case 'financeiro': return { backgroundColor: '#fee2e2', color: '#991b1b' }; // Vermelho
      case 'evento': return { backgroundColor: '#e0e7ff', color: '#312e81' };   // Roxo
      case 'geral': return { backgroundColor: '#dbeafe', color: '#1e40af' };    // Azul
      default: return { backgroundColor: '#e5e7eb', color: '#374151' };
    }
};

const getPrioridadeColor = (prioridade) => {
    switch (prioridade) {
      case 'alta': return { borderColor: '#fca5a5', color: '#991b1b' };
      case 'media': return { borderColor: '#fde68a', color: '#854d0e' };
      case 'baixa': return { borderColor: '#a7f3d0', color: '#065f46' };
      default: return { borderColor: '#d1d5db', color: '#374151' };
    }
};

// Componente para o formulário de novo comunicado (visível apenas para síndico/porteiro)
const NovoComunicadoForm = () => {
    const [novoTitulo, setNovoTitulo] = useState('');
    const [novoConteudo, setNovoConteudo] = useState('');
    const [isEnviando, setIsEnviando] = useState(false);

    const handleEnviarComunicado = () => {
        if (!novoTitulo.trim() || !novoConteudo.trim()) {
            alert("Preencha o título e conteúdo do comunicado.");
            return;
        }
        setIsEnviando(true);
        // Simula o envio
        setTimeout(() => {
            alert("Comunicado enviado com sucesso!");
            setNovoTitulo('');
            setNovoConteudo('');
            setIsEnviando(false);
        }, 1500);
    };

    return (
        <Card style={styles.card}>
            <Card.Title title="✍️ Enviar Novo Comunicado" subtitle="Envie um comunicado para todos os moradores"/>
            <Card.Content>
                <TextInput
                    label="Título do Comunicado"
                    value={novoTitulo}
                    onChangeText={setNovoTitulo}
                    mode="outlined"
                    style={styles.input}
                />
                <TextInput
                    label="Conteúdo"
                    value={novoConteudo}
                    onChangeText={setNovoConteudo}
                    mode="outlined"
      multiline
      numberOfLines={4}
                    style={styles.input}
                />
                <Button 
                    mode="contained"
                    onPress={handleEnviarComunicado}
                    loading={isEnviando}
                    disabled={isEnviando}
                >
                    {isEnviando ? "Enviando..." : "Enviar Comunicado"}
                </Button>
            </Card.Content>
        </Card>
    )
}

const ComunicadosT = ({ route }) => {
    // Recebemos o usuário como parâmetro da rota
    const { user } = route.params;

    return (
        <ScrollView style={styles.container}>
            <View style={styles.contentContainer}>
                <Text variant="headlineSmall" style={styles.title}>Comunicados</Text>
                <Text variant="bodyLarge" style={styles.subtitle}>
                    {user.user_tipo === 'sindico' || user.user_tipo === 'porteiro' 
                        ? 'Gerencie e envie comunicados'
                        : 'Veja os últimos avisos do condomínio'}
                </Text>

                {(user.user_tipo === 'sindico' || user.user_tipo === 'porteiro') && (
                    <NovoComunicadoForm />
                )}

                <Card style={styles.card}>
                    <Card.Title title="📋 Comunicados Recentes"/>
                    <Card.Content>
                        {comunicadosData.map((comunicado, index) => (
                            <View key={comunicado.id} style={[styles.comunicadoItem, index > 0 && styles.separator]}>
                                <Text variant="titleMedium" style={styles.comunicadoTitle}>{comunicado.titulo}</Text>
                                <View style={styles.badgeContainer}>
                                    <Badge style={{backgroundColor: getTipoColor(comunicado.tipo).backgroundColor}}>
                                        <Text style={{color: getTipoColor(comunicado.tipo).color, fontSize: 12}}>
                                            {comunicado.tipo}
                                        </Text>
                                    </Badge>
                                    <Badge style={{backgroundColor: 'transparent', borderWidth: 1, borderColor: getPrioridadeColor(comunicado.prioridade).borderColor}}>
                                        <Text style={{color: getPrioridadeColor(comunicado.prioridade).color, fontSize: 12}}>
                                            {comunicado.prioridade}
                                        </Text>
                                    </Badge>
                                </View>
                                <Text variant="bodyMedium" style={styles.comunicadoContent}>{comunicado.conteudo}</Text>
                                <View style={styles.comunicadoFooter}>
                                    <Text variant="bodySmall" style={styles.footerText}>📝 {comunicado.autor}</Text>
                                    <Text variant="bodySmall" style={styles.footerText}>📅 {comunicado.data}</Text>
                                </View>
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
    input: { marginBottom: 16 },
    comunicadoItem: { paddingVertical: 16 },
    separator: { borderTopWidth: 1, borderTopColor: '#eee' },
    comunicadoTitle: { fontWeight: 'bold', marginBottom: 8 },
    badgeContainer: { flexDirection: 'row', gap: 8, marginBottom: 12 },
    comunicadoContent: { color: '#374151', lineHeight: 22, marginBottom: 12 },
    comunicadoFooter: { flexDirection: 'row', justifyContent: 'space-between' },
    footerText: { color: 'gray' },
});

export default ComunicadosT;