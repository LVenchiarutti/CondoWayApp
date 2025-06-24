// screens/CadastroVisitantesT.js
import React, { useState } from 'react';
import { ScrollView, View, StyleSheet, Platform, Pressable } from 'react-native';
import { Card, Text, Button, TextInput, IconButton } from 'react-native-paper';
import DateTimePicker from '@react-native-community/datetimepicker';

const CadastroVisitantesT = ({ route }) => {
    const { user } = route.params;

    const [data, setData] = useState(new Date());
    const [showDatePicker, setShowDatePicker] = useState(false);
    
    // Cada visitante agora é um objeto com um id único para a key do map
    const [visitantes, setVisitantes] = useState([{ id: 1, nome: '' }]);

    const handleDateChange = (event, selectedDate) => {
        const currentDate = selectedDate || data;
        setShowDatePicker(Platform.OS === 'ios'); // No iOS o picker é um modal
        setData(currentDate);
    };

    const handleNomeChange = (id, nome) => {
        setVisitantes(visitantes.map(v => (v.id === id ? { ...v, nome } : v)));
    };

    const adicionarVisitante = () => {
        if (visitantes.length < 10) {
            // Adiciona um novo visitante com um ID único baseado no tempo
            setVisitantes([...visitantes, { id: Date.now(), nome: '' }]);
        }
    };

    const removerVisitante = (id) => {
        setVisitantes(visitantes.filter(v => v.id !== id));
    };
    
    const handleCadastrar = () => {
        const nomesPreenchidos = visitantes.every(v => v.nome.trim() !== '');
        if (!nomesPreenchidos) {
            alert('Por favor, preencha o nome de todos os visitantes.');
            return;
        }
        alert(`${visitantes.length} visitante(s) cadastrado(s) para ${data.toLocaleDateString('pt-BR')}.`);
        // Limpa o formulário
        setVisitantes([{ id: 1, nome: '' }]);
        setData(new Date());
    };

    return (
        <ScrollView style={styles.container}>
            <View style={styles.contentContainer}>
                <Text variant="headlineSmall" style={styles.title}>Cadastro de Visitantes</Text>
                <Text variant="bodyLarge" style={styles.subtitle}>
                    Autorize a entrada de seus visitantes no condomínio.
                </Text>

                <Card style={styles.card}>
                    <Card.Content>
                        <Text style={styles.label}>Data da Visita</Text>
                        <Pressable onPress={() => setShowDatePicker(true)}>
                            <TextInput
                                value={data.toLocaleDateString('pt-BR')}
                                editable={false} // Impede a edição direta do texto
                                mode="outlined"
                                right={<TextInput.Icon icon="calendar" />}
                            />
                        </Pressable>

                        {showDatePicker && (
                            <DateTimePicker
                                testID="dateTimePicker"
                                value={data}
                                mode="date"
                                display="default"
                                onChange={handleDateChange}
                                minimumDate={new Date()}
                            />
                        )}

                        <Text style={styles.label}>Visitantes (Máx: 10)</Text>
                        {visitantes.map((visitante, index) => (
                            <View key={visitante.id} style={styles.visitanteInputContainer}>
                                <TextInput
                                    placeholder={`Nome do visitante ${index + 1}`}
                                    value={visitante.nome}
                                    onChangeText={(text) => handleNomeChange(visitante.id, text)}
                                    mode="outlined"
                                    style={styles.visitanteInput}
                                />
                                {visitantes.length > 1 && (
                                    <IconButton
                                        icon="minus-circle-outline"
                                        iconColor="#b91c1c"
                                        size={24}
                                        onPress={() => removerVisitante(visitante.id)}
                                    />
                                )}
                            </View>
                        ))}
                        
                        <Button
                            mode="text"
                            onPress={adicionarVisitante}
                            disabled={visitantes.length >= 10}
                            icon="plus-circle"
                        >
                            Adicionar outro visitante
                        </Button>

                        <Button
                            mode="contained"
                            onPress={handleCadastrar}
                            style={styles.cadastrarButton}
                        >
                            Cadastrar Visitantes
                        </Button>
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
    card: { backgroundColor: 'white' },
    label: {
        fontSize: 16,
        color: '#374151',
        marginBottom: 8,
        marginTop: 16,
    },
    visitanteInputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 8,
    },
    visitanteInput: {
        flex: 1,
    },
    cadastrarButton: {
        marginTop: 24,
    }
});

export default CadastroVisitantesT;