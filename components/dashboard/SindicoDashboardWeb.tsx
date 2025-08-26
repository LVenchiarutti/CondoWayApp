import React from 'react';

interface User {
  nome: string;
  condominio: string;
}

interface SindicoDashboardProps {
  user: User;
}

const SindicoDashboardWeb: React.FC<SindicoDashboardProps> = ({ user }) => {
  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Dashboard do Síndico</h2>
      <p style={styles.welcome}>
        Bem-vindo, {user.nome}! Gerencie seu condomínio {user.condominio}
      </p>
      
      <div style={styles.statsGrid}>
        <div style={styles.statCard}>
          <div style={styles.statNumber}>127</div>
          <div style={styles.statLabel}>Total de Moradores</div>
        </div>
        
        <div style={styles.statCard}>
          <div style={styles.statNumber}>15</div>
          <div style={styles.statLabel}>Reservas Hoje</div>
        </div>
        
        <div style={styles.statCard}>
          <div style={styles.statNumber}>8</div>
          <div style={styles.statLabel}>Ambientes Disponíveis</div>
        </div>
        
        <div style={styles.statCard}>
          <div style={styles.statNumber}>3</div>
          <div style={styles.statLabel}>Comunicados Ativos</div>
        </div>
      </div>
      
      <div style={styles.sectionsGrid}>
        <div style={styles.section}>
          <h3 style={styles.sectionTitle}>Últimas Atividades</h3>
          <div style={styles.activityList}>
            <div style={styles.activityItem}>
              <span style={styles.activityTime}>10:30</span>
              <span style={styles.activityText}>Nova reserva da piscina - Apt 205</span>
            </div>
            <div style={styles.activityItem}>
              <span style={styles.activityTime}>09:15</span>
              <span style={styles.activityText}>Visitante cadastrado - Apt 102</span>
            </div>
            <div style={styles.activityItem}>
              <span style={styles.activityTime}>08:45</span>
              <span style={styles.activityText}>Novo morador cadastrado - Apt 310</span>
            </div>
          </div>
        </div>
        
        <div style={styles.section}>
          <h3 style={styles.sectionTitle}>Ações Pendentes</h3>
          <div style={styles.actionsList}>
            <div style={styles.actionItem}>
              <span style={styles.actionIcon}>⚠️</span>
              <span style={styles.actionText}>Aprovação de reserva - Salão de Festas</span>
            </div>
            <div style={styles.actionItem}>
              <span style={styles.actionIcon}>📋</span>
              <span style={styles.actionText}>Revisar comunicado sobre obras</span>
            </div>
            <div style={styles.actionItem}>
              <span style={styles.actionIcon}>👤</span>
              <span style={styles.actionText}>Validar cadastro de novo morador</span>
            </div>
          </div>
        </div>
      </div>
      
      <div style={styles.quickActions}>
        <h3 style={styles.sectionTitle}>Gestão Rápida</h3>
        <div style={styles.actionButtons}>
          <button style={styles.actionButton}>
            📢 Novo Comunicado
          </button>
          <button style={styles.actionButton}>
            🏢 Gerenciar Ambientes
          </button>
          <button style={styles.actionButton}>
            📊 Relatórios
          </button>
          <button style={styles.actionButton}>
            ⚙️ Configurações
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
  statsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
    gap: '1rem',
    marginBottom: '2rem',
  },
  statCard: {
    backgroundColor: '#4a90e2',
    color: 'white',
    padding: '1.5rem',
    borderRadius: '8px',
    textAlign: 'center' as const,
  },
  statNumber: {
    fontSize: '32px',
    fontWeight: 'bold',
    marginBottom: '0.5rem',
  },
  statLabel: {
    fontSize: '14px',
    opacity: 0.9,
  },
  sectionsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '2rem',
    marginBottom: '2rem',
  },
  section: {
    backgroundColor: '#f8f9fa',
    padding: '1.5rem',
    borderRadius: '8px',
    border: '1px solid #e9ecef',
  },
  sectionTitle: {
    fontSize: '18px',
    fontWeight: '600',
    color: '#333',
    marginBottom: '1rem',
    margin: '0 0 1rem 0',
  },
  activityList: {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '0.5rem',
  },
  activityItem: {
    display: 'flex',
    gap: '1rem',
    padding: '0.5rem 0',
    borderBottom: '1px solid #e9ecef',
  },
  activityTime: {
    fontSize: '12px',
    color: '#4a90e2',
    fontWeight: '600',
    minWidth: '40px',
  },
  activityText: {
    fontSize: '14px',
    color: '#666',
  },
  actionsList: {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '0.75rem',
  },
  actionItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
    padding: '0.75rem',
    backgroundColor: 'white',
    borderRadius: '6px',
    border: '1px solid #e0e0e0',
  },
  actionIcon: {
    fontSize: '16px',
  },
  actionText: {
    fontSize: '14px',
    color: '#333',
  },
  quickActions: {
    marginTop: '2rem',
  },
  actionButtons: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '1rem',
  },
  actionButton: {
    backgroundColor: '#28a745',
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

export default SindicoDashboardWeb;
