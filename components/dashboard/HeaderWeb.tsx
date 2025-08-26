import React from 'react';
import AsyncStorage from '../../src/utils/storage';

const getUserTypeLabel = (type: string) => {
    switch (type) {
      case 'sindico': return 'Síndico';
      case 'porteiro': return 'Porteiro';
      case 'morador': return 'Morador';
      default: return 'Usuário';
    }
};

const HeaderWeb: React.FC<{ user: any; setUser: (u: any) => void }> = ({ user, setUser }) => {
  const [menuOpen, setMenuOpen] = React.useState(false);

  const handleLogout = async () => {
    setMenuOpen(false);
    await AsyncStorage.removeItem('userData');
    setUser(null);
  };

  return (
    <div style={styles.header}>
      <div style={styles.logoContainer}>
        <div style={styles.logo}>
          <div style={styles.logoText}>CW</div>
        </div>
        <div>
          <div style={styles.appName}>CondoWay</div>
          <div style={styles.condoName}>{user.condominio}</div>
        </div>
      </div>

      <div style={styles.userContainer}>
        <div style={styles.userInfo}>
            <div style={styles.userName}>{user.nome}</div>
            <div style={styles.userRole}>{getUserTypeLabel(user.user_tipo)} • {user.bloco}-{user.apartamento}</div>
        </div>

        <div style={{ position: 'relative' }}>
          <div onClick={() => setMenuOpen(!menuOpen)} style={styles.avatar}>{user.nome.split(' ').map((n: string) => n[0]).join('').toUpperCase().slice(0,2)}</div>
          {menuOpen && (
            <div style={styles.menu}>
              <div onClick={handleLogout} style={styles.menuItem}>Sair</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const styles: any = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: '12px 24px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.06)'
  },
  logoContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: 12,
  },
  logo: {
    width: 40,
    height: 40,
    borderRadius: 8,
    backgroundColor: '#4a90e2',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  appName: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  condoName: {
    color: 'gray',
    fontSize: 12,
  },
  userContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: 12,
  },
  userInfo: {
    textAlign: 'right' as const,
  },
  userName: {
    fontWeight: '600',
  },
  userRole: {
    color: 'gray',
    fontSize: 12,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: '50%',
    backgroundColor: '#d6eaff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    fontWeight: '700',
  },
  menu: {
    position: 'absolute',
    right: 0,
    top: '48px',
    background: '#fff',
    border: '1px solid #eee',
    borderRadius: 6,
    boxShadow: '0 4px 8px rgba(0,0,0,0.08)'
  },
  menuItem: {
    padding: '8px 12px',
    cursor: 'pointer'
  }
};

export default HeaderWeb;
