import React, { useState } from 'react';

const ConfiguracoesWeb: React.FC = () => {
  const [modoEscuro, setModoEscuro] = useState(false);
  const [notificacoes, setNotificacoes] = useState(true);
  const [notificacoesPush, setNotificacoesPush] = useState(true);
  const [notificacoesEmail, setNotificacoesEmail] = useState(false);
  const [tamanhoFonte, setTamanhoFonte] = useState('medio');

  const getLabelTamanhoFonte = () => {
    if (tamanhoFonte === 'pequeno') return 'Pequeno';
    if (tamanhoFonte === 'grande') return 'Grande';
    return 'Médio';
  }

  const handleSalvar = () => {
    alert('Configurações salvas');
  }

  return (
    <div>
      <h2 style={{ color: '#4a90e2' }}>⚙️ Configurações</h2>
      <p style={{ color: 'gray' }}>Personalize sua experiência no CondoWay</p>

      <div style={{ display: 'grid', gap: 16 }}>
        <div style={{ background: '#fff', padding: 16, borderRadius: 8, border: '1px solid #eee' }}>
          <h3>🎨 Aparência</h3>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <div style={{ fontWeight: 600 }}>Modo Escuro</div>
              <div style={{ color: 'gray' }}>Reduz o cansaço visual em ambientes escuros</div>
            </div>
            <input type="checkbox" checked={modoEscuro} onChange={(e) => setModoEscuro(e.target.checked)} />
          </div>

          <div style={{ height: 12 }} />

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <div style={{ fontWeight: 600 }}>Tamanho da Fonte</div>
              <div style={{ color: 'gray' }}>Ajuste o tamanho do texto para melhor legibilidade</div>
            </div>
            <select value={tamanhoFonte} onChange={(e) => setTamanhoFonte(e.target.value)}>
              <option value="pequeno">Pequeno</option>
              <option value="medio">Médio</option>
              <option value="grande">Grande</option>
            </select>
          </div>
        </div>

        <div style={{ background: '#fff', padding: 16, borderRadius: 8, border: '1px solid #eee' }}>
          <h3>🔔 Notificações</h3>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
            <div style={{ fontWeight: 600 }}>Notificações Gerais</div>
            <input type="checkbox" checked={notificacoes} onChange={(e) => setNotificacoes(e.target.checked)} />
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
            <div style={{ fontWeight: 600 }}>Notificações Push</div>
            <input type="checkbox" checked={notificacoesPush} onChange={(e) => setNotificacoesPush(e.target.checked)} disabled={!notificacoes} />
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ fontWeight: 600 }}>Notificações por E-mail</div>
            <input type="checkbox" checked={notificacoesEmail} onChange={(e) => setNotificacoesEmail(e.target.checked)} disabled={!notificacoes} />
          </div>
        </div>

        <button onClick={handleSalvar} style={{ background: '#4a90e2', color: '#fff', padding: '10px 16px', borderRadius: 8, border: 'none', width: 160 }}>Salvar Configurações</button>
      </div>
    </div>
  );
};

export default ConfiguracoesWeb;
