import React, { useState } from 'react';

const initialReservas = [
  { id: 1, morador: 'Ana Silva', apt: 'A-102', ambiente: 'Salão de Festas', data: '2025-06-20', horario: '19:00 - 23:00', status: 'Confirmada' },
  { id: 2, morador: 'João Santos', apt: 'B-205', ambiente: 'Churrasqueira 2', data: '2025-06-22', horario: '12:00 - 16:00', status: 'Confirmada' },
  { id: 3, morador: 'Carlos Oliveira', apt: 'A-101', ambiente: 'Quadra Esportiva', data: '2025-06-25', horario: '09:00 - 10:00', status: 'Confirmada' },
  { id: 4, morador: 'Maria Costa', apt: 'C-301', ambiente: 'Salão de Festas', data: '2025-06-15', horario: '18:00 - 22:00', status: 'Concluída' },
  { id: 5, morador: 'Pedro Almeida', apt: 'B-104', ambiente: 'Churrasqueira 1', data: '2025-06-10', horario: '19:00 - 23:00', status: 'Cancelada' },
];

const getStatusStyle = (status: string) => {
    if (status.includes('Cancelada')) return { backgroundColor: '#fee2e2', color: '#991b1b' };
    switch (status) {
      case 'Confirmada': return { backgroundColor: '#dcfce7', color: '#166534' };
      case 'Concluída': return { backgroundColor: '#e5e7eb', color: '#374151' };
      default: return { backgroundColor: '#e5e7eb', color: '#374151' };
    }
};

const TodasReservasWeb: React.FC = () => {
    const [reservas, setReservas] = useState(initialReservas);
    const [dialogAberto, setDialogAberto] = useState(false);
    const [reservaEmEdicao, setReservaEmEdicao] = useState<any>(null);

    const abrirDialogEdicao = (reserva: any) => {
        setReservaEmEdicao(reserva);
        setDialogAberto(true);
    };

    const fecharDialogEdicao = () => {
        setDialogAberto(false);
        setReservaEmEdicao(null);
    }

    const handleCancelar = (id: number) => {
        setReservas(reservas.map(r => r.id === id ? { ...r, status: 'Cancelada pelo Síndico' } : r));
        alert('Reserva cancelada com sucesso.');
    };

    return (
        <div>
            <h2 style={{ color: '#4a90e2' }}>📋 Todas as Reservas</h2>
            <p style={{ color: 'gray' }}>Visualize e gerencie todas as reservas.</p>

            <div style={{ display: 'grid', gap: 12 }}>
                {reservas.map(reserva => (
                    <div key={reserva.id} style={{ background: '#fff', padding: 12, borderRadius: 8, border: '1px solid #eee' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <div style={{ fontWeight: 700 }}>{reserva.ambiente}</div>
                            <div style={{ background: getStatusStyle(reserva.status).backgroundColor, color: getStatusStyle(reserva.status).color, padding: '4px 8px', borderRadius: 6 }}>{reserva.status}</div>
                        </div>

                        <div style={{ marginTop: 8 }}>
                            <div style={{ color: 'gray' }}><strong>{reserva.morador}</strong> - Apto {reserva.apt}</div>
                            <div style={{ marginTop: 6 }}>Data: {new Date(reserva.data).toLocaleDateString('pt-BR', { timeZone: 'UTC' })}</div>
                            <div>Horário: {reserva.horario}</div>
                        </div>

                        {reserva.status === 'Confirmada' && (
                            <div style={{ marginTop: 12, display: 'flex', gap: 8 }}>
                                <button onClick={() => abrirDialogEdicao(reserva)}>Editar</button>
                                <button onClick={() => handleCancelar(reserva.id)} style={{ background: 'transparent', border: 'none', color: '#b91c1c' }}>Cancelar</button>
                            </div>
                        )}
                    </div>
                ))}
            </div>

            {dialogAberto && (
                <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.4)', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <div style={{ background: '#fff', padding: 16, borderRadius: 8, width: 560 }}>
                        <h3>Editar Reserva</h3>
                        <p>Em desenvolvimento</p>
                        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 8 }}>
                            <button onClick={fecharDialogEdicao}>Fechar</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default TodasReservasWeb;
