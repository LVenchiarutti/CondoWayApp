import React, { useState } from 'react';

const comunicadosData = [
    { id: 1, titulo: 'Manutenção da Piscina - Programada', conteudo: 'Informamos que a piscina ficará fechada para manutenção preventiva nos dias 25 e 26 de janeiro...', autor: 'Síndico João Silva', data: '20/01/2024', tipo: 'manutencao', prioridade: 'alta' },
    { id: 2, titulo: 'Nova Taxa de Condomínio - Janeiro 2024', conteudo: 'Conforme aprovado em assembleia, informamos o reajuste da taxa condominial para R$ 485,00...', autor: 'Administração', data: '18/01/2024', tipo: 'financeiro', prioridade: 'alta' },
    { id: 3, titulo: 'Horário de Funcionamento da Academia', conteudo: 'A academia do condomínio funcionará em horário estendido durante o mês de janeiro...', autor: 'Porteiro Carlos', data: '15/01/2024', tipo: 'geral', prioridade: 'media' },
];

const getTipoColor = (tipo: string) => {
    switch (tipo) {
      case 'manutencao': return { backgroundColor: '#ffedd5', color: '#9a3412' };
      case 'financeiro': return { backgroundColor: '#fee2e2', color: '#991b1b' };
      case 'evento': return { backgroundColor: '#e0e7ff', color: '#312e81' };
      case 'geral': return { backgroundColor: '#dbeafe', color: '#1e40af' };
      default: return { backgroundColor: '#e5e7eb', color: '#374151' };
    }
};

const getPrioridadeColor = (prioridade: string) => {
    switch (prioridade) {
      case 'alta': return { borderColor: '#fca5a5', color: '#991b1b' };
      case 'media': return { borderColor: '#fde68a', color: '#854d0e' };
      case 'baixa': return { borderColor: '#a7f3d0', color: '#065f46' };
      default: return { borderColor: '#d1d5db', color: '#374151' };
    }
};

const NovoComunicadoForm: React.FC<{ onEnviar: (titulo: string, conteudo: string) => void }> = ({ onEnviar }) => {
    const [novoTitulo, setNovoTitulo] = useState('');
    const [novoConteudo, setNovoConteudo] = useState('');
    const [isEnviando, setIsEnviando] = useState(false);

    const handleEnviarComunicado = () => {
        if (!novoTitulo.trim() || !novoConteudo.trim()) {
            alert("Preencha o título e conteúdo do comunicado.");
            return;
        }
        setIsEnviando(true);
        setTimeout(() => {
            onEnviar(novoTitulo, novoConteudo);
            setNovoTitulo('');
            setNovoConteudo('');
            setIsEnviando(false);
        }, 1000);
    };

    return (
        <div style={{ background: '#fff', padding: 16, borderRadius: 8, border: '1px solid #eee', marginBottom: 16 }}>
            <h3>✍️ Enviar Novo Comunicado</h3>
            <input placeholder="Título do Comunicado" value={novoTitulo} onChange={(e) => setNovoTitulo(e.target.value)} style={{ width: '100%', padding: 8, marginBottom: 8 }} />
            <textarea placeholder="Conteúdo" value={novoConteudo} onChange={(e) => setNovoConteudo(e.target.value)} rows={4} style={{ width: '100%', padding: 8, marginBottom: 8 }} />
            <button onClick={handleEnviarComunicado} disabled={isEnviando} style={{ background: '#4a90e2', color: '#fff', padding: '8px 12px', borderRadius: 6, border: 'none' }}>{isEnviando ? 'Enviando...' : 'Enviar Comunicado'}</button>
        </div>
    )
}

const ComunicadosWeb: React.FC<{ user: any }> = ({ user }) => {

    const [comunicados, setComunicados] = useState(comunicadosData);

    const handleEnviar = (titulo: string, conteudo: string) => {
        const novo = { id: Date.now(), titulo, conteudo, autor: 'Você', data: new Date().toLocaleDateString('pt-BR'), tipo: 'geral', prioridade: 'baixa' };
        setComunicados([novo, ...comunicados]);
        alert('Comunicado enviado com sucesso!');
    }

    return (
        <div>
            <h2 style={{ color: '#4a90e2' }}>Comunicados</h2>
            <p style={{ color: 'gray' }}>{user.user_tipo === 'sindico' || user.user_tipo === 'porteiro' ? 'Gerencie e envie comunicados' : 'Veja os últimos avisos do condomínio'}</p>

            {(user.user_tipo === 'sindico' || user.user_tipo === 'porteiro') && (
                <NovoComunicadoForm onEnviar={handleEnviar} />
            )}

            <div style={{ background: '#fff', padding: 16, borderRadius: 8, border: '1px solid #eee' }}>
                <h3>📋 Comunicados Recentes</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                    {comunicados.map(c => (
                        <div key={c.id} style={{ padding: 12, borderRadius: 6, border: '1px solid #f1f1f1' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
                                <div style={{ fontWeight: 600 }}>{c.titulo}</div>
                                <div style={{ color: 'gray', fontSize: 12 }}>{c.data}</div>
                            </div>
                            <div style={{ color: '#374151' }}>{c.conteudo}</div>
                            <div style={{ display: 'flex', gap: 8, marginTop: 8 }}>
                                <div style={{ background: getTipoColor(c.tipo).backgroundColor, color: getTipoColor(c.tipo).color, padding: '2px 6px', borderRadius: 6, fontSize: 12 }}>{c.tipo}</div>
                                <div style={{ border: `1px solid ${getPrioridadeColor(c.prioridade).borderColor}`, color: getPrioridadeColor(c.prioridade).color, padding: '2px 6px', borderRadius: 6, fontSize: 12 }}>{c.prioridade}</div>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 8, color: 'gray', fontSize: 12 }}>
                                <div>📝 {c.autor}</div>
                                <div>📅 {c.data}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ComunicadosWeb;
