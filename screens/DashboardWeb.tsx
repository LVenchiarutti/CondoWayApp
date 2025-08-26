import React, { useState } from 'react';

// Import web versions of components (we'll create these)
import MoradorDashboardWeb from '../components/dashboard/MoradorDashboardWeb';
import SindicoDashboardWeb from '../components/dashboard/SindicoDashboardWeb';
import PorteiroDashboardWeb from '../components/dashboard/PorteiroDashboardWeb';

interface User {
  id: number;
  nome: string;
  email: string;
  user_tipo: 'morador' | 'sindico' | 'porteiro';
  condominio: string;
  bloco?: string;
  apartamento?: string;
}

interface DashboardProps {
  user: User;
  setUser: (user: User | null) => void;
}

const DashboardWeb: React.FC<DashboardProps> = ({ user, setUser }) => {
  const [activeTab, setActiveTab] = useState('Início');

  const handleLogout = () => {
    localStorage.removeItem('userData');
    setUser(null);
  };

  // Abas do MORADOR
  const moradorTabs = [
    { name: "Início", component: MoradorDashboardWeb, icon: "🏠" },
    { name: "Ambientes", component: () => <div>Ambientes - Em desenvolvimento</div>, icon: "🏊" },
    { name: "Visitantes", component: () => <div>Cadastro de Visitantes - Em desenvolvimento</div>, icon: "👥" },
    { name: "Reservas", component: () => <div>Minhas Reservas - Em desenvolvimento</div>, icon: "📅" },
    { name: "Conta", component: () => <div>Minha Conta - Em desenvolvimento</div>, icon: "👤" },
    { name: "Config", component: () => <div>Configurações - Em desenvolvimento</div>, icon: "⚙️" },
  ];

  // Abas do SÍNDICO
  const sindicoTabs = [
    { name: "Início", component: SindicoDashboardWeb, icon: "📊" },
    { name: "Ambientes", component: () => <div>Gestão de Ambientes - Em desenvolvimento</div>, icon: "🏢" },
    { name: "Moradores", component: () => <div>Gestão de Moradores - Em desenvolvimento</div>, icon: "👨‍👩‍👧‍👦" },
    { name: "Reservas", component: () => <div>Todas as Reservas - Em desenvolvimento</div>, icon: "📅" },
    { name: "Comunicados", component: () => <div>Comunicados - Em desenvolvimento</div>, icon: "📢" },
    { name: "Conta", component: () => <div>Minha Conta - Em desenvolvimento</div>, icon: "👤" },
  ];
  
  // Abas do PORTEIRO
  const porteiroTabs = [
    { name: "Início", component: PorteiroDashboardWeb, icon: "🎥" },
    { name: "Comunicados", component: () => <div>Comunicados - Em desenvolvimento</div>, icon: "📢" },
    { name: "Conta", component: () => <div>Minha Conta - Em desenvolvimento</div>, icon: "👤" },
  ];

  const getTabs = () => {
    switch(user.user_tipo) {
      case 'sindico': return sindicoTabs;
      case 'porteiro': return porteiroTabs;
      default: return moradorTabs;
    }
  }

  const tabsToShow = getTabs();
  const ActiveComponent = tabsToShow.find(tab => tab.name === activeTab)?.component || (() => <div>Página não encontrada</div>);

  return (
    <div style={styles.container}>
      {/* Header */}
      <div style={styles.header}>
        <div style={styles.headerContent}>
          <div style={styles.logoContainer}>
            <div style={styles.logoText}>CW</div>
            <span style={styles.logoTitle}>CondoWay</span>
          </div>
          <div style={styles.userInfo}>
            <span style={styles.userName}>Olá, {user.nome}</span>
            <span style={styles.userType}>
              {user.user_tipo === 'sindico' ? 'Síndico' : 
               user.user_tipo === 'porteiro' ? 'Porteiro' : 'Morador'}
            </span>
            <button onClick={handleLogout} style={styles.logoutButton}>
              Sair
            </button>
          </div>
        </div>
      </div>

      <div style={styles.mainContent}>
        {/* Navigation Tabs */}
        <div style={styles.tabsContainer}>
          {tabsToShow.map((tab) => (
            <button
              key={tab.name}
              onClick={() => setActiveTab(tab.name)}
              style={{
                ...styles.tab,
                ...(activeTab === tab.name ? styles.activeTab : {})
              }}
            >
              <span style={styles.tabIcon}>{tab.icon}</span>
              <span style={styles.tabText}>{tab.name}</span>
            </button>
          ))}
        </div>

        {/* Content Area */}
        <div style={styles.contentArea}>
          <ActiveComponent user={user} />
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    minHeight: '100vh',
    backgroundColor: '#f5f5f5',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
  },
  header: {
    backgroundColor: '#4a90e2',
    color: 'white',
    padding: '1rem 0',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
  },
  headerContent: {
    maxWidth: '1200px',
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0 2rem',
  },
  logoContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
  },
  logoText: {
    backgroundColor: 'rgba(255,255,255,0.2)',
    borderRadius: '8px',
    padding: '8px 12px',
    fontSize: '18px',
    fontWeight: 'bold',
  },
  logoTitle: {
    fontSize: '24px',
    fontWeight: 'bold',
  },
  userInfo: {
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'flex-end',
    gap: '4px',
  },
  userName: {
    fontSize: '16px',
    fontWeight: '600',
  },
  userType: {
    fontSize: '12px',
    opacity: 0.9,
  },
  logoutButton: {
    backgroundColor: 'rgba(255,255,255,0.2)',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    padding: '6px 12px',
    fontSize: '12px',
    cursor: 'pointer',
    marginTop: '8px',
    transition: 'background-color 0.2s',
  },
  mainContent: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '2rem',
    display: 'flex',
    gap: '2rem',
  },
  tabsContainer: {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '8px',
    minWidth: '200px',
  },
  tab: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    padding: '12px 16px',
    backgroundColor: 'white',
    border: '1px solid #e0e0e0',
    borderRadius: '8px',
    cursor: 'pointer',
    transition: 'all 0.2s',
    fontSize: '14px',
  },
  activeTab: {
    backgroundColor: '#4a90e2',
    color: 'white',
    borderColor: '#4a90e2',
  },
  tabIcon: {
    fontSize: '16px',
  },
  tabText: {
    fontWeight: '500',
  },
  contentArea: {
    flex: 1,
    backgroundColor: 'white',
    borderRadius: '12px',
    padding: '2rem',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
  },
};

export default DashboardWeb;
