// screens/sindico/GestaoMoradoresT.js
import React, { useState } from 'react';
import { ScrollView, View, StyleSheet } from 'react-native';
import { Card, Text, Button, DataTable, Portal, Dialog, TextInput, IconButton } from 'react-native-paper';

// Dados de exemplo
const initialMoradores = [
  { id: 1, nome: 'Carlos Oliveira', email: 'morador@teste.com', apt: 'A-101' },
  { id: 2, nome: 'Ana Clara Santos', email: 'ana@email.com', apt: 'A-102' },
  { id: 3, nome: 'Fernando Costa', email: 'fernando@email.com', apt: 'B-205' },
];

const GestaoMoradoresT = () => {
    const [moradores, setMoradores] = useState(initialMoradores);
    
    // Estados para o diálogo de Adicionar/Editar
    const [dialogAberto, setDialogAberto] = useState(false);
    const [moradorEmEdicao, setMoradorEmEdicao] = useState(null); // Guarda o morador que está sendo editado
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [apt, setApt] = useState('');
    
    // Estados para o diálogo de Confirmação de Exclusão
    const [deleteDialogAberto, setDeleteDialogAberto] = useState(false);
    const [moradorParaRemover, setMoradorParaRemover] = useState(null);

    const abrirDialog = (morador = null) => {
        if (morador) {
            // Editando um morador existente
            setMoradorEmEdicao(morador);
            setNome(morador.nome);
            setEmail(morador.email);
            setApt(morador.apt);
        } else {
            // Adicionando um novo morador
            setMoradorEmEdicao(null);
            setNome('');
            setEmail('');
            setApt('');
        }
        setDialogAberto(true);
    };

    const fecharDialog = () => setDialogAberto(false);

    const handleSalvar = () => {
        if (!nome || !email || !apt) {
            alert('Por favor, preencha todos os campos.');
            return;
        }

        if (moradorEmEdicao) {
            // Lógica de Edição
            setMoradores(moradores.map(m => 
                m.id === moradorEmEdicao.id ? { ...m, nome, email, apt } : m
            ));
            alert('Morador atualizado com sucesso!');
        } else {
            // Lógica de Adição
            const novoMorador = { id: Date.now(), nome, email, apt };
            setMoradores([...moradores, novoMorador]);
            alert('Morador cadastrado com sucesso!');
        }
        fecharDialog();
    };

    const abrirConfirmacaoRemover = (morador) => {
        setMoradorParaRemover(morador);
        setDeleteDialogAberto(true);
    };

    const handleRemoverConfirmado = () => {
        setMoradores(moradores.filter(m => m.id !== moradorParaRemover.id));
        setDeleteDialogAberto(false);
        setMoradorParaRemover(null);
        alert('Morador removido.');
    };

    return (
        <>
            <ScrollView style={styles.container}>
                <View style={styles.contentContainer}>
                    <View style={styles.header}>
                        <View>
                            <Text variant="headlineSmall" style={styles.title}>👨‍👩‍👧‍👦 Gestão de Moradores</Text>
                            <Text variant="bodyLarge" style={styles.subtitle}>Adicione, edite e visualize os moradores.</Text>
                        </View>
                        <Button mode="contained" icon="plus-circle" onPress={() => abrirDialog()}>
                            Cadastrar
                        </Button>
                    </View>

                    <DataTable>
                        <DataTable.Header>
                            <DataTable.Title>Nome</DataTable.Title>
                            <DataTable.Title>Apto</DataTable.Title>
                            <DataTable.Title numeric>Ações</DataTable.Title>
                        </DataTable.Header>

                        {moradores.map(morador => (
                            <DataTable.Row key={morador.id}>
                                <DataTable.Cell>{morador.nome}</DataTable.Cell>
                                <DataTable.Cell>{morador.apt}</DataTable.Cell>
                                <DataTable.Cell numeric>
                                    <IconButton icon="pencil" size={20} onPress={() => abrirDialog(morador)} />
                                    <IconButton icon="trash-can" iconColor="#b91c1c" size={20} onPress={() => abrirConfirmacaoRemover(morador)} />
                                </DataTable.Cell>
                            </DataTable.Row>
                        ))}
                    </DataTable>
                </View>
            </ScrollView>

            {/* Portal para os Diálogos (garante que eles fiquem sobre todo o conteúdo) */}
            <Portal>
                {/* Diálogo para Adicionar/Editar Morador */}
                <Dialog visible={dialogAberto} onDismiss={fecharDialog}>
                    <Dialog.Title>{moradorEmEdicao ? 'Editar Morador' : 'Cadastrar Novo Morador'}</Dialog.Title>
                    <Dialog.Content>
                        <TextInput label="Nome Completo" value={nome} onChangeText={setNome} mode="outlined" style={styles.input}/>
                        <TextInput label="Email" value={email} onChangeText={setEmail} mode="outlined" style={styles.input} keyboardType="email-address" />
                        <TextInput label="Apartamento (Ex: A-101)" value={apt} onChangeText={setApt} mode="outlined" style={styles.input}/>
                    </Dialog.Content>
                    <Dialog.Actions>
                        <Button onPress={fecharDialog}>Cancelar</Button>
                        <Button onPress={handleSalvar}>Salvar</Button>
                    </Dialog.Actions>
                </Dialog>

                {/* Diálogo para Confirmar Exclusão */}
                <Dialog visible={deleteDialogAberto} onDismiss={() => setDeleteDialogAberto(false)}>
                    <Dialog.Title>Confirmar Exclusão</Dialog.Title>
                    <Dialog.Content>
                        <Text variant="bodyMedium">
                            Tem certeza que deseja remover o morador {moradorParaRemover?.nome}? Esta ação não pode ser desfeita.
                        </Text>
                    </Dialog.Content>
                    <Dialog.Actions>
                        <Button onPress={() => setDeleteDialogAberto(false)}>Cancelar</Button>
                        <Button onPress={handleRemoverConfirmado} textColor="#b91c1c">Sim, remover</Button>
                    </Dialog.Actions>
                </Dialog>
            </Portal>
        </>
    );
};


const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#f5f5f5' },
    contentContainer: { padding: 16 },
    header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 },
    title: { fontWeight: 'bold' },
    subtitle: { color: 'gray' },
    input: { marginBottom: 12 }
});

export default GestaoMoradoresT;