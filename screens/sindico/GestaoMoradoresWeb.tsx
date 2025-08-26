import React, { useState } from 'react';

const initialMoradores = [
  { id: 1, nome: 'Carlos Oliveira', email: 'morador@teste.com', apt: 'A-101' },
  { id: 2, nome: 'Ana Clara Santos', email: 'ana@email.com', apt: 'A-102' },
  { id: 3, nome: 'Fernando Costa', email: 'fernando@email.com', apt: 'B-205' },
];

const GestaoMoradoresWeb: React.FC = () => {
  const [moradores, setMoradores] = useState(initialMoradores);
  const [dialogAberto, setDialogAberto] = useState(false);
  const [moradorEmEdicao, setMoradorEmEdicao] = useState<any>(null);
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [apt, setApt] = useState('');
  const [deleteDialogAberto, setDeleteDialogAberto] = useState(false);
  const [moradorParaRemover, setMoradorParaRemover] = useState<any>(null);

  const abrirDialog = (morador: any = null) => {
    if (morador) {
      setMoradorEmEdicao(morador);
      setNome(morador.nome);
      setEmail(morador.email);
      setApt(morador.apt);
    } else {
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
      setMoradores(moradores.map(m => m.id === moradorEmEdicao.id ? { ...m, nome, email, apt } : m));
      alert('Morador atualizado com sucesso!');
    } else {
      const novoMorador = { id: Date.now(), nome, email, apt };
      setMoradores([...moradores, novoMorador]);
      alert('Morador cadastrado com sucesso!');
    }
    fecharDialog();
  };

  const abrirConfirmacaoRemover = (morador: any) => {
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
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
        <div>
          <h2 style={{ color: '#4a90e2', margin: 0 }}>👨‍👩‍👧‍👦 Gestão de Moradores</h2>
          <p style={{ color: 'gray', margin: 0 }}>Adicione, edite e visualize os moradores.</p>
        </div>
        <button onClick={() => abrirDialog()} style={{ background: '#4a90e2', color: '#fff', padding: '8px 12px', borderRadius: 6, border: 'none' }}>Cadastrar</button>
      </div>

      <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: 16 }}>
        <thead>
          <tr style={{ textAlign: 'left' }}>
            <th style={{ padding: '8px', borderBottom: '1px solid #eee' }}>Nome</th>
            <th style={{ padding: '8px', borderBottom: '1px solid #eee' }}>Apto</th>
            <th style={{ padding: '8px', borderBottom: '1px solid #eee' }}>Ações</th>
          </tr>
        </thead>
        <tbody>
          {moradores.map(m => (
            <tr key={m.id}>
              <td style={{ padding: '8px', borderBottom: '1px solid #f5f5f5' }}>{m.nome}</td>
              <td style={{ padding: '8px', borderBottom: '1px solid #f5f5f5' }}>{m.apt}</td>
              <td style={{ padding: '8px', borderBottom: '1px solid #f5f5f5' }}>
                <button onClick={() => abrirDialog(m)} style={{ marginRight: 8 }}>Editar</button>
                <button onClick={() => abrirConfirmacaoRemover(m)} style={{ color: '#b91c1c' }}>Remover</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {dialogAberto && (
        <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.4)', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <div style={{ background: '#fff', padding: 16, borderRadius: 8, width: 480 }}>
            <h3>{moradorEmEdicao ? 'Editar Morador' : 'Cadastrar Novo Morador'}</h3>
            <input placeholder="Nome Completo" value={nome} onChange={(e) => setNome(e.target.value)} style={{ width: '100%', padding: 8, marginBottom: 8 }} />
            <input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} style={{ width: '100%', padding: 8, marginBottom: 8 }} />
            <input placeholder="Apartamento (Ex: A-101)" value={apt} onChange={(e) => setApt(e.target.value)} style={{ width: '100%', padding: 8, marginBottom: 8 }} />
            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 8 }}>
              <button onClick={fecharDialog}>Cancelar</button>
              <button onClick={handleSalvar} style={{ background: '#4a90e2', color: '#fff', border: 'none', padding: '8px 12px', borderRadius: 6 }}>Salvar</button>
            </div>
          </div>
        </div>
      )}

      {deleteDialogAberto && (
        <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.4)', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <div style={{ background: '#fff', padding: 16, borderRadius: 8, width: 420 }}>
            <h3>Confirmar Exclusão</h3>
            <p>Tem certeza que deseja remover o morador {moradorParaRemover?.nome}? Esta ação não pode ser desfeita.</p>
            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 8 }}>
              <button onClick={() => setDeleteDialogAberto(false)}>Cancelar</button>
              <button onClick={handleRemoverConfirmado} style={{ background: '#b91c1c', color: '#fff', border: 'none', padding: '8px 12px', borderRadius: 6 }}>Sim, remover</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GestaoMoradoresWeb;
