# Troubleshooting GitHub Pages

## Problema: HTML Duplicado

Se você está vendo HTML duplicado na página, isso pode ser causado por:

1. **Cache do navegador**: Limpe o cache do navegador (Ctrl+Shift+R ou Cmd+Shift+R)
2. **GitHub Pages ainda processando**: Aguarde alguns minutos após o deploy
3. **Configuração do GitHub Pages**: Verifique se está usando "GitHub Actions" como source

## Solução

1. Vá em **Settings > Pages** no seu repositório
2. Certifique-se de que **Source** está configurado como **"GitHub Actions"**
3. Aguarde o workflow completar (verifique em **Actions**)
4. Limpe o cache do navegador
5. Acesse a URL: `https://seu-usuario.github.io/bee-experiences/`

## Verificações

- ✅ O workflow do GitHub Actions está rodando sem erros?
- ✅ O build está gerando a pasta `dist` corretamente?
- ✅ O arquivo `404.html` está presente na pasta `dist`?
- ✅ O `base` no `vite.config.ts` está correto (`/bee-experiences/`)?

## Se o problema persistir

1. Delete o branch `gh-pages` se existir (pode estar causando conflito)
2. Vá em **Settings > Pages** e mude temporariamente para outro source e depois volte para "GitHub Actions"
3. Force um novo deploy fazendo um commit vazio: `git commit --allow-empty -m "Trigger rebuild"`

