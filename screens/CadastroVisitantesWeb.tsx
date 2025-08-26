import React, { useState } from 'react';

const CadastroVisitantesWeb: React.FC = () => {
  const [data, setData] = useState(new Date());
  const [visitantes, setVisitantes] = useState([{ id: 1, nome: '' }]);

  const handleNomeChange = (id: number, nome: string) => {
    setVisitantes(visitantes.map(v => (v.id === id ? { ...v, nome } : v)));
  };

  const adicionarVisitante = () => {
    if (visitantes.length < 10) {
      setVisitantes([...visitantes, { id: Date.now(), nome: '' }]);
    }
  };

  const removerVisitante = (id: number) => {
    setVisitantes(visitantes.filter(v => v.id !== id));
  };

  const handleCadastrar = () => {
    const nomesPreenchidos = visitantes.every(v => v.nome.trim() !== '');
    if (!nomesPreenchidos) {
      alert('Por favor, preencha o nome de todos os visitantes.');
      return;
    }
    alert(`${visitantes.length} visitante(s) cadastrado(s) para ${data.toLocaleDateString('pt-BR')}.`);
    setVisitantes([{ id: 1, nome: '' }]);
    setData(new Date());
  };

  return (
    <div>
      <h2 style={{ color: '#4a90e2' }}>Cadastro de Visitantes</h2>
      <p style={{ color: 'gray' }}>Autorize a entrada de seus visitantes no condomínio.</p>

      <div style={{ background: '#fff', padding: 16, borderRadius: 8, border: '1px solid #eee' }}>
        <label style={{ display: 'block', marginBottom: 8 }}>Data da Visita</label>
        <input type="date" value={data.toISOString().slice(0,10)} onChange={(e) => setData(new Date(e.target.value))} />

        <div style={{ marginTop: 16 }}>
          <label style={{ display: 'block', marginBottom: 8 }}>Visitantes (Máx: 10)</label>
          {visitantes.map((visitante, index) => (
            <div key={visitante.id} style={{ display: 'flex', gap: 8, alignItems: 'center', marginBottom: 8 }}>
              <input
                placeholder={`Nome do visitante ${index + 1}`}
                value={visitante.nome}
                onChange={(e) => handleNomeChange(visitante.id, e.target.value)}
                style={{ flex: 1, padding: 8, borderRadius: 6, border: '1px solid #ddd' }}
              />
              {visitantes.length > 1 && (
                <button onClick={() => removerVisitante(visitante.id)} style={{ background: 'transparent', border: 'none', color: '#b91c1c' }}>Remover</button>
              )}
            </div>
          ))}

          <button onClick={adicionarVisitante} disabled={visitantes.length >= 10} style={{ background: 'transparent', border: 'none', color: '#4a90e2' }}>Adicionar outro visitante</button>

          <div style={{ marginTop: 16 }}>
            <button onClick={handleCadastrar} style={{ background: '#50c878', color: '#fff', padding: '10px 16px', borderRadius: 8, border: 'none' }}>Cadastrar Visitantes</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CadastroVisitantesWeb;
