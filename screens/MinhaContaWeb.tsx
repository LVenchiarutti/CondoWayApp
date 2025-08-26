import React from 'react';

const MinhaContaWeb: React.FC<{ user: any }> = ({ user }) => {
  return (
    <div>
      <h2 style={{ color: '#4a90e2' }}>Minha Conta</h2>
      <div style={{ background: '#fff', padding: 16, borderRadius: 8, border: '1px solid #eee' }}>
        <div style={{ marginBottom: 12 }}><strong>Nome:</strong> {user.nome}</div>
        <div style={{ marginBottom: 12 }}><strong>Email:</strong> {user.email}</div>
        <div style={{ marginBottom: 12 }}><strong>Condomínio:</strong> {user.condominio}</div>
        <div style={{ marginBottom: 12 }}><strong>Apartamento:</strong> {user.bloco} - {user.apartamento}</div>
        <button style={{ background: '#4a90e2', color: '#fff', padding: '8px 12px', borderRadius: 6, border: 'none' }}>Editar Perfil</button>
      </div>
    </div>
  );
};

export default MinhaContaWeb;
