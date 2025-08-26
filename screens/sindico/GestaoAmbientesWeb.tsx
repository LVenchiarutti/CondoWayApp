import React, { useState } from 'react';

const initialAmbientes = [
  { id: 1, nome: 'Salão de Festas', capacidade: '50 pessoas', disponivel: true, imagem: '🎉' },
  { id: 2, nome: 'Churrasqueira Coberta', capacidade: '20 pessoas', disponivel: true, imagem: '🔥' },
  { id: 3, nome: 'Piscina', capacidade: '30 pessoas', disponivel: false, imagem: '🏊' },
  { id: 4, nome: 'Quadra Esportiva', capacidade: '16 pessoas', disponivel: true, imagem: '🏐' },
];

const GestaoAmbientesWeb: React.FC = () => {
  const [ambientes, setAmbientes] = useState(initialAmbientes);

  const toggleDisponibilidade = (id: number) => {
    let ambienteNome = '';
    let novoStatus = false;
    const novosAmbientes = ambientes.map((ambiente) => {
      if (ambiente.id === id) {
        ambienteNome = ambiente.nome;
        novoStatus = !ambiente.disponivel;
        return { ...ambiente, disponivel: novoStatus };
      }
      return ambiente;
    });
    setAmbientes(novosAmbientes);
    alert(`O ambiente ${ambienteNome} está agora ${novoStatus ? 'Disponível' : 'Em Manutenção'}.`);
  };

  return (
    <div>
      <h2 style={{ color: '#4a90e2' }}>🏢 Gestão de Ambientes</h2>
      <p style={{ color: 'gray' }}>Altere a disponibilidade das áreas comuns.</p>

      <div style={{ display: 'grid', gap: 12 }}>
        {ambientes.map((ambiente) => (
          <div key={ambiente.id} style={{ background: '#fff', padding: 12, borderRadius: 8, border: '1px solid #eee' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <div style={{ fontSize: 20 }}>{ambiente.imagem}</div>
              <div>
                <div style={{ fontWeight: 600 }}>{ambiente.nome}</div>
                <div style={{ color: 'gray' }}>Capacidade: {ambiente.capacidade}</div>
              </div>
            </div>

            <div style={{ marginTop: 12 }}>
              <div style={{ display: 'inline-block', padding: '4px 8px', borderRadius: 6, background: ambiente.disponivel ? '#4caf50' : '#f44336', color: '#fff' }}>{ambiente.disponivel ? 'Disponível' : 'Em Manutenção'}</div>
            </div>

            <div style={{ marginTop: 12, display: 'flex', gap: 8 }}>
              <button onClick={() => toggleDisponibilidade(ambiente.id)} style={{ padding: '8px 12px', borderRadius: 6, border: 'none', background: '#4a90e2', color: '#fff' }}>Alterar Status</button>
              <button style={{ padding: '8px 12px', borderRadius: 6, border: '1px solid #ddd', background: 'transparent' }}>Ver Agenda</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GestaoAmbientesWeb;
