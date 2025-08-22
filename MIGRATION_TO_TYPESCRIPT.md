Passos para migrar este projeto para TypeScript

1) Instale dependências
   - npm install --save-dev typescript @types/react @types/react-native

2) Arquivos adicionados automaticamente
   - `tsconfig.json` (configuração do compilador)
   - `declarations.d.ts` (declarações para imagens)
   - `App.tsx` e `index.ts` (entradas em TypeScript)

3) Compilação/checagem de tipos
   - Rode `npm run tsc` para checar tipos (compilador está configurado com `noEmit: true`).

4) Migrar componentes e telas
   - Renomeie gradualmente os arquivos de `.js` para `.tsx` quando forem componentes React.
   - Para arquivos puramente utilitários/serviços use extensão `.ts`.
   - Adicione tipagens aos props e ao estado (use React.FC<Props> e interfaces).
   - Atualize imports relativos se necessário.

5) Dicas
   - Mantenha `allowJs: true` no `tsconfig.json` enquanto converte o código aos poucos.
   - Instale tipos adicionais quando necessário, por exemplo para bibliotecas de navegação: `@types/react-navigation` ou pacotes oficiais de types.
   - Configure ESLint/Prettier para suportar TypeScript.

Se quiser, eu posso:
 - Renomear automaticamente os arquivos de tela/componentes para `.tsx` e adicionar tipagens básicas.
 - Instalar dependências e executar `npm run tsc` aqui.

