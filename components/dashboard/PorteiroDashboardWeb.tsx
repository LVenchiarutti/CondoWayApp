import React from 'react';

interface User {
  nome: string;
  condominio: string;
}

interface PorteiroDashboardProps {
  user: User;
}

const PorteiroDashboardWeb: React.FC<PorteiroDashboardProps> = ({ user }) => {
  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Dashboard do Porteiro</h2>
      <p style={styles.welcome}>
        Bem-vindo, {user.nome}! Monitore a entrada do {user.condominio}
      </p>
      
      <div style={styles.statusGrid}>
        <div style={styles.statusCard}>
          <div style={styles.statusIcon}>🚪</div>
          <div style={styles.statusInfo}>
            <div style={styles.statusNumber}>23</div>
            <div style={styles.statusLabel}>Visitantes Hoje</div>
          </div>
        </div>
        
        <div style={styles.statusCard}>
          <div style={styles.statusIcon}>📋</div>
          <div style={styles.statusInfo}>
            <div style={styles.statusNumber}>5</div>
            <div style={styles.statusLabel}>Visitantes Aguardando</div>
          </div>
        </div>
        
        <div style={styles.statusCard}>
          <div style={styles.statusIcon}>🎥</div>
          <div style={styles.statusInfo}>
            <div style={styles.statusNumber}>8</div>
            <div style={styles.statusLabel}>Câmeras Ativas</div>
          </div>
        </div>
      </div>
      
      <div style={styles.sectionsGrid}>
        <div style={styles.section}>
          <h3 style={styles.sectionTitle}>Visitantes Hoje</h3>
          <div style={styles.visitorList}>
            <div style={styles.visitorItem}>
              <div style={styles.visitorInfo}>
                <span style={styles.visitorName}>João Santos</span>
                <span style={styles.visitorDetails}>Apt 205 - 14:30</span>
              </div>
              <span style={styles.visitorStatus}>✅ Autorizado</span>
            </div>
            <div style={styles.visitorItem}>
              <div style={styles.visitorInfo}>
                <span style={styles.visitorName}>Maria Silva</span>
                <span style={styles.visitorDetails}>Apt 102 - 15:15</span>
              </div>
              <span style={styles.visitorStatus}>⏳ Aguardando</span>
            </div>
            <div style={styles.visitorItem}>
              <div style={styles.visitorInfo}>
                <span style={styles.visitorName}>Pedro Costa</span>
                <span style={styles.visitorDetails}>Apt 310 - 16:00</span>
              </div>
              <span style={styles.visitorStatus}>⏳ Aguardando</span>
            </div>
          </div>
        </div>
        
        <div style={styles.section}>
          <h3 style={styles.sectionTitle}>Comunicados Importantes</h3>
          <div style={styles.communicationList}>
            <div style={styles.communicationItem}>
              <span style={styles.communicationIcon}>🚨</span>
              <div style={styles.communicationContent}>
                <span style={styles.communicationTitle}>Obras na entrada</span>
                <span style={styles.communicationText}>Acesso pela entrada lateral</span>
              </div>
            </div>
            <div style={styles.communicationItem}>
              <span style={styles.communicationIcon}>📢</span>
              <div style={styles.communicationContent}>
                <span style={styles.communicationTitle}>Reunião de condomínio</span>
                <span style={styles.communicationText}>Domingo às 10h no salão</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div style={styles.quickActions}>
        <h3 style={styles.sectionTitle}>Ações Rápidas</h3>
        <div style={styles.actionButtons}>
          <button style={styles.actionButton}>
            👥 Autorizar Visitante
          </button>
          <button style={styles.actionButton}>
            📋 Registrar Ocorrência
          </button>
          <button style={styles.actionButton}>
            📞 Contatar Morador
          </button>
          <button style={styles.actionButton}>
            🎥 Ver Câmeras
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
  statusGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '1rem',
    marginBottom: '2rem',
  },
  statusCard: {
    backgroundColor: '#f8f9fa',
    padding: '1.5rem',
    borderRadius: '8px',
    border: '1px solid #e9ecef',
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
  },
  statusIcon: {
    fontSize: '32px',
  },
  statusInfo: {
    display: 'flex',
    flexDirection: 'column' as const,
  },
  statusNumber: {
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#4a90e2',
  },
  statusLabel: {
    fontSize: '12px',
    color: '#666',
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
  visitorList: {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '0.75rem',
  },
  visitorItem: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0.75rem',
    backgroundColor: 'white',
    borderRadius: '6px',
    border: '1px solid #e0e0e0',
  },
  visitorInfo: {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '0.25rem',
  },
  visitorName: {
    fontSize: '14px',
    fontWeight: '600',
    color: '#333',
  },
  visitorDetails: {
    fontSize: '12px',
    color: '#666',
  },
  visitorStatus: {
    fontSize: '12px',
    fontWeight: '600',
  },
  communicationList: {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '0.75rem',
  },
  communicationItem: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '0.75rem',
    padding: '0.75rem',
    backgroundColor: 'white',
    borderRadius: '6px',
    border: '1px solid #e0e0e0',
  },
  communicationIcon: {
    fontSize: '16px',
    marginTop: '0.25rem',
  },
  communicationContent: {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '0.25rem',
  },
  communicationTitle: {
    fontSize: '14px',
    fontWeight: '600',
    color: '#333',
  },
  communicationText: {
    fontSize: '12px',
    color: '#666',
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
    backgroundColor: '#dc3545',
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

export default PorteiroDashboardWeb;
