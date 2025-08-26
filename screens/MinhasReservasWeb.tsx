import React from 'react';

const MinhasReservasWeb: React.FC<{ user: any }> = ({ user }) => {
  const reservas = [
    { id: 1, ambiente: 'Piscina', data: '2025-07-10', horario: '10:00 - 12:00', status: 'Confirmada' },
    { id: 2, ambiente: 'Quadra', data: '2025-07-15', horario: '18:00 - 20:00', status: 'Pendente' },
  ];

  return (
    <div>
      <h2 style={{ color: '#4a90e2' }}>Minhas Reservas</h2>
      <div style={{ display: 'grid', gap: 12 }}>
        {reservas.map(r => (
          <div key={r.id} style={{ background: '#fff', padding: 12, borderRadius: 8, border: '1px solid #eee' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <div style={{ fontWeight: 700 }}>{r.ambiente}</div>
              <div style={{ color: 'gray' }}>{r.status}</div>
            </div>
            <div style={{ marginTop: 8 }}>{new Date(r.data).toLocaleDateString('pt-BR')} - {r.horario}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MinhasReservasWeb;
