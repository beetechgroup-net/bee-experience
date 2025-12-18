# Instruções de Deploy para GitHub Pages

## Opção 1: Deploy Automático com GitHub Actions (Recomendado)

1. Certifique-se de que o repositório está no GitHub
2. Vá em Settings > Pages
3. Em "Source", selecione "GitHub Actions"
4. Faça push do código para o branch `main`
5. O GitHub Actions irá automaticamente fazer o build e deploy

## Opção 2: Deploy Manual

1. Execute o build:
```bash
npm install
npm run build
```

2. A pasta `dist` será criada com os arquivos estáticos

3. Para fazer deploy manual:
   - Instale o gh-pages: `npm install -g gh-pages`
   - Execute: `gh-pages -d dist`

Ou configure o GitHub Pages para servir a pasta `dist` do branch `gh-pages`.

## Configuração do Base Path

O projeto está configurado para o repositório `bee-experiences-2`. Se o nome do repositório for diferente, atualize o `base` no arquivo `vite.config.ts`.

