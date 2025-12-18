# Bee Experiences 🐝

Site para expor experiências de desenvolvimento de software.

## 🚀 Tecnologias

- **React 18** - Biblioteca UI
- **TypeScript** - Tipagem estática
- **Vite** - Build tool moderna e rápida
- **Tailwind CSS** - Framework CSS utility-first
- **Heroicons** - Ícones SVG
- **Headless UI** - Componentes acessíveis

## 📁 Estrutura do Projeto

```
src/
├── components/       # Componentes React
│   ├── Header/
│   ├── ExperienceCard/
│   ├── ExperienceList/
│   └── ExperienceModal/
├── data/            # Dados estáticos
├── di/              # Injeção de dependências
├── services/        # Serviços e lógica de negócio
├── types/           # Definições TypeScript
├── App.tsx          # Componente principal
└── main.tsx         # Entry point
```

## 🛠️ Desenvolvimento

```bash
# Instalar dependências
npm install

# Iniciar servidor de desenvolvimento
npm run dev
```

O servidor estará disponível em `http://localhost:5173`

## 🏗️ Build

```bash
npm run build
```

O build será gerado na pasta `dist` e está configurado para GitHub Pages.

## 📦 Deploy

Consulte o arquivo [DEPLOY.md](./DEPLOY.md) para instruções detalhadas de deploy.

### Deploy Automático (GitHub Actions)

O projeto inclui um workflow do GitHub Actions que faz deploy automático ao fazer push para o branch `main`.

## ✨ Características

- ✅ Design moderno e responsivo
- ✅ Modal para detalhes das experiências
- ✅ Sistema de injeção de dependências
- ✅ Clean Code e boas práticas
- ✅ TypeScript com tipagem forte
- ✅ Client-side rendering (pronto para GitHub Pages)
- ✅ Layout profissional e bem estabelecido

## 🎨 Personalização

Para adicionar suas próprias experiências, edite o arquivo `src/data/experiences.data.ts`.

