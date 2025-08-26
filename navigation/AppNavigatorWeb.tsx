import React from 'react';
import AsyncStorage from '../src/utils/storage';
import LoginScreen from '../screens/LoginWeb'; 
import DashboardScreen from '../screens/DashboardWeb';

const AppNavigator: React.FC = () => {
  const [user, setUser] = React.useState<any>(null);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    // Função para verificar se o usuário está logado
    const checkUser = async () => {
      try {
        const userData = await AsyncStorage.getItem('userData');
        if (userData) setUser(JSON.parse(userData));
      } catch (e) {
        console.error('Failed to load user data.', e);
      } finally {
        setIsLoading(false);
      }
    };

    checkUser();
  }, []);

  if (isLoading) {
    // Mostra uma tela de carregamento enquanto verifica o login
    return (
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        height: '100vh',
        backgroundColor: '#f0f4f8'
      }}>
        <div style={{
          fontSize: '18px',
          color: '#4a90e2'
        }}>
          Carregando...
        </div>
      </div>
    );
  }

  return (
    <>
      {user ? (
        // Se o usuário estiver logado, mostra o Dashboard
        <DashboardScreen user={user} setUser={setUser} />
      ) : (
        // Se não, mostra a tela de Login
        <LoginScreen setUser={setUser} />
      )}
    </>
  );
};

export default AppNavigator;
