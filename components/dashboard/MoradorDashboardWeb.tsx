import React from 'react';

interface User {
  nome: string;
  condominio: string;
  bloco?: string;
  apartamento?: string;
}

interface MoradorDashboardProps {
  user: User;
}

const MoradorDashboardWeb: React.FC<MoradorDashboardProps> = ({ user }) => {
  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Dashboard do Morador</h2>
      <p style={styles.welcome}>
        Bem-vindo, {user.nome}!
      </p>
      
      <div style={styles.infoCards}>
        <div style={styles.card}>
          <h3 style={styles.cardTitle}>Seu Apartamento</h3>
          <p style={styles.cardText}>
            {user.condominio}<br/>
            Bloco {user.bloco} - Apt {user.apartamento}
          </p>
        </div>
        
        <div style={styles.card}>
          <h3 style={styles.cardTitle}>Próximas Reservas</h3>
          <p style={styles.cardText}>
            Nenhuma reserva agendada
          </p>
        </div>
        
        <div style={styles.card}>
          <h3 style={styles.cardTitle}>Comunicados</h3>
          <p style={styles.cardText}>
            2 novos comunicados
          </p>
        </div>
      </div>
      
      <div style={styles.quickActions}>
        <h3 style={styles.sectionTitle}>Ações Rápidas</h3>
        <div style={styles.actionButtons}>
          <button style={styles.actionButton}>
            🏊 Reservar Piscina
          </button>
          <button style={styles.actionButton}>
            👥 Cadastrar Visitante
          </button>
          <button style={styles.actionButton}>
            📋 Ver Comunicados
          </button>
          <button style={styles.actionButton}>
            🎾 Reservar Quadra
          </button>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: '0',
  },
  title: {
    color: '#4a90e2',
    marginBottom: '8px',
    fontSize: '24px',
  },
  welcome: {
    fontSize: '16px',
    color: '#666',
    marginBottom: '2rem',
  },
  infoCards: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '1rem',
    marginBottom: '2rem',
  },
  card: {
    backgroundColor: '#f8f9fa',
    padding: '1.5rem',
    borderRadius: '8px',
    border: '1px solid #e9ecef',
  },
  cardTitle: {
    fontSize: '16px',
    fontWeight: '600',
    color: '#333',
    marginBottom: '0.5rem',
    margin: '0 0 0.5rem 0',
  },
  cardText: {
    fontSize: '14px',
    color: '#666',
    lineHeight: '1.4',
    margin: '0',
  },
  quickActions: {
    marginTop: '2rem',
  },
  sectionTitle: {
    fontSize: '18px',
    fontWeight: '600',
    color: '#333',
    marginBottom: '1rem',
    margin: '0 0 1rem 0',
  },
  actionButtons: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '1rem',
  },
  actionButton: {
    backgroundColor: '#4a90e2',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    padding: '1rem',
    fontSize: '14px',
    cursor: 'pointer',
    transition: 'background-color 0.2s',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
  },
};

export default MoradorDashboardWeb;
