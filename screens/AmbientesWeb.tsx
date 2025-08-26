import React from 'react';

const AmbientesWeb: React.FC = () => {
  const ambientes = [
    { id: 1, nome: 'Salão de Festas', descricao: 'Espaço para eventos e comemorações', capacidade: '50 pessoas', disponivel: true, imagem: '🎉' },
    { id: 2, nome: 'Churrasqueira Coberta', descricao: 'Área de churrasqueira com mesas', capacidade: '20 pessoas', disponivel: true, imagem: '🔥' },
    { id: 3, nome: 'Piscina', descricao: 'Área aquática com deck', capacidade: '30 pessoas', disponivel: false, imagem: '🏊' },
  ];

  return (
    <div>
      <h2 style={{ color: '#4a90e2' }}>Ambientes para Reserva</h2>
      <p style={{ color: 'gray' }}>Selecione uma área para reservar</p>
      <div style={{ display: 'grid', gap: '1rem' }}>
        {ambientes.map(a => (
          <div key={a.id} style={{ background: '#fff', padding: 16, borderRadius: 8, border: '1px solid #eee' }}>
            <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
              <div style={{ fontSize: 36 }}>{a.imagem}</div>
              <div>
                <div style={{ fontSize: 18, fontWeight: 600 }}>{a.nome}</div>
                <div style={{ color: 'gray' }}>{a.descricao}</div>
              </div>
            </div>
            <div style={{ marginTop: 12 }}>
              <div style={{ color: 'gray' }}>Capacidade: {a.capacidade}</div>
              <div style={{ marginTop: 8 }}>
                <button disabled={!a.disponivel} style={{ padding: '8px 12px', borderRadius: 6, background: a.disponivel ? '#4caf50' : '#ccc', color: '#fff', border: 'none' }}>
                  {a.disponivel ? 'Fazer Reserva' : 'Indisponível'}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AmbientesWeb;
