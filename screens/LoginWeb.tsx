import React, { useState } from 'react';
import AsyncStorage from '../src/utils/storage';

interface LoginScreenProps {
  setUser: (user: any) => void;
}

const LoginScreen: React.FC<LoginScreenProps> = ({ setUser }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async () => {
    if (!email || !password) {
      alert("Por favor, preencha email e senha.");
      return;
    }
    setIsLoading(true);

    try {
      // Simulando a lógica de login
      const mockUser = {
        id: 1,
        nome: email.includes('sindico') ? 'João Silva' : email.includes('porteiro') ? 'Maria Santos' : 'Carlos Oliveira',
        email: email,
        user_tipo: email.includes('sindico') ? 'sindico' : email.includes('porteiro') ? 'porteiro' : 'morador',
        condominio: 'Residencial Vista Verde',
        bloco: 'A',
        apartamento: '101'
      };

      await AsyncStorage.setItem('userData', JSON.stringify(mockUser));
      setUser(mockUser);
      
      alert(`Login realizado com sucesso! Bem-vindo, ${mockUser.nome}`);

    } catch (error) {
      alert("Erro no login. Verifique suas credenciais.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <div style={styles.header}>
          <div style={styles.logoContainer}>
            <div style={styles.logoText}>CW</div>
          </div>
          <h1 style={styles.title}>CondoWay</h1>
          <p style={styles.subtitle}>Seu condomínio conectado e organizado</p>
        </div>

        <div style={styles.form}>
          <div style={styles.inputGroup}>
            <label style={styles.label}>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={styles.input}
              placeholder="Digite seu email"
              autoComplete="email"
            />
          </div>

          <div style={styles.inputGroup}>
            <label style={styles.label}>Senha</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={styles.input}
              placeholder="Digite sua senha"
              autoComplete="current-password"
            />
          </div>

          <button
            onClick={handleLogin}
            disabled={isLoading}
            style={{
              ...styles.button,
              ...(isLoading ? styles.buttonDisabled : {})
            }}
          >
            {isLoading ? 'Entrando...' : 'Entrar'}
          </button>
          
          <button
            onClick={() => alert("Função 'Esqueci a senha' a ser implementada.")}
            style={styles.forgotPasswordButton}
          >
            Esqueci minha senha
          </button>

          <div style={styles.demoInfo}>
            <p style={styles.demoTitle}>Para demonstração, use:</p>
            <p style={styles.demoText}>Síndico: sindico@teste.com</p>
            <p style={styles.demoText}>Porteiro: porteiro@teste.com</p>
            <p style={styles.demoText}>Morador: morador@teste.com</p>
            <p style={styles.demoPassword}>Senha: qualquer</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    minHeight: '100vh',
    backgroundColor: '#f0f4f8',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
  },
  card: {
    backgroundColor: 'white',
    borderRadius: '12px',
    padding: '40px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    maxWidth: '400px',
    width: '100%',
  },
  header: {
    textAlign: 'center' as const,
    marginBottom: '32px',
  },
  logoContainer: {
    width: '80px',
    height: '80px',
    borderRadius: '16px',
    backgroundColor: '#4a90e2',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '0 auto 16px auto',
  },
  logoText: {
    color: 'white',
    fontSize: '32px',
    fontWeight: 'bold',
  },
  title: {
    fontWeight: 'bold',
    color: '#4a90e2',
    margin: '0 0 8px 0',
    fontSize: '28px',
  },
  subtitle: {
    color: '#555',
    margin: 0,
    fontSize: '14px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column' as const,
  },
  inputGroup: {
    marginBottom: '16px',
  },
  label: {
    display: 'block',
    marginBottom: '6px',
    color: '#333',
    fontSize: '14px',
    fontWeight: '500',
  },
  input: {
    width: '100%',
    padding: '12px',
    border: '2px solid #e0e0e0',
    borderRadius: '8px',
    fontSize: '16px',
    outline: 'none',
    transition: 'border-color 0.2s',
    boxSizing: 'border-box' as const,
  },
  button: {
    backgroundColor: '#50c878',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    padding: '14px',
    fontSize: '16px',
    fontWeight: '600',
    cursor: 'pointer',
    marginTop: '8px',
    transition: 'background-color 0.2s',
  },
  buttonDisabled: {
    backgroundColor: '#ccc',
    cursor: 'not-allowed',
  },
  forgotPasswordButton: {
    backgroundColor: 'transparent',
    color: '#4a90e2',
    border: 'none',
    padding: '12px',
    fontSize: '14px',
    cursor: 'pointer',
    marginTop: '8px',
    textDecoration: 'underline',
  },
  demoInfo: {
    marginTop: '24px',
    padding: '16px',
    backgroundColor: '#e3f2fd',
    borderRadius: '8px',
  },
  demoTitle: {
    textAlign: 'center' as const,
    marginBottom: '8px',
    fontWeight: 'bold',
    color: '#1565c0',
    fontSize: '14px',
    margin: '0 0 8px 0',
  },
  demoText: {
    fontSize: '12px',
    color: '#444',
    margin: '2px 0',
  },
  demoPassword: {
    fontSize: '12px',
    color: '#444',
    margin: '8px 0 0 0',
    textAlign: 'center' as const,
    fontWeight: 'bold',
  },
};

export default LoginScreen;
