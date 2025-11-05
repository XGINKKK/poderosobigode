# 🚀 Guia de Deploy - Poderoso Bigode

## 📋 Pré-requisitos

- Conta na [Vercel](https://vercel.com)
- Repositório Git configurado

---

## 🌐 Deploy na Vercel (Recomendado)

### Método 1: Via Interface Web (Mais Fácil)

1. Acesse [vercel.com](https://vercel.com)
2. Clique em **"New Project"**
3. Importe o repositório do GitHub
4. A Vercel detectará automaticamente que é um projeto Vite
5. Configure as variáveis de ambiente (se necessário)
6. Clique em **"Deploy"**

✅ **Pronto!** A Vercel vai:
- Instalar dependências usando `--legacy-peer-deps` (via `.npmrc`)
- Fazer build do projeto
- Deploy automático
- Gerar URL de produção

### Método 2: Via CLI

```bash
# Instalar Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy
vercel

# Deploy para produção
vercel --prod
```

---

## 📦 Deploy em Outras Plataformas

### Netlify

```bash
# Build
npm install --legacy-peer-deps
npm run build

# Deploy pasta dist/
```

**Configuração no netlify.toml:**
```toml
[build]
  command = "npm install --legacy-peer-deps && npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

### GitHub Pages

```bash
# Instalar gh-pages
npm install --legacy-peer-deps -D gh-pages

# Adicionar ao package.json
"homepage": "https://seuusuario.github.io/poderosobigode",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}

# Deploy
npm run deploy
```

### AWS Amplify

1. Conecte seu repositório
2. Configure build settings:
   - Build command: `npm install --legacy-peer-deps && npm run build`
   - Output directory: `dist`
3. Deploy

### Cloudflare Pages

1. Conecte repositório
2. Configure:
   - Build command: `npm install --legacy-peer-deps && npm run build`
   - Build output: `dist`
3. Deploy

---

## ⚙️ Configurações Importantes

### Arquivo .npmrc
```
legacy-peer-deps=true
```
✅ **Já configurado!** Resolve conflitos de peer dependencies.

### Arquivo vercel.json
```json
{
  "buildCommand": "npm install --legacy-peer-deps && npm run build",
  "installCommand": "npm install --legacy-peer-deps"
}
```
✅ **Já configurado!** Garante instalação correta na Vercel.

---

## 🔧 Troubleshooting

### Erro: "Could not resolve dependency"

**Solução:** Certifique-se que o arquivo `.npmrc` está presente no repositório.

### Build está muito lento

**Solução:** A Vercel usa cache. O primeiro deploy é mais lento, os próximos serão rápidos.

### Erro 404 em rotas

**Solução:** Configure rewrites no `vercel.json` (já está configurado).

---

## 📊 Monitoramento Pós-Deploy

### Performance
- Lighthouse Score: Deve estar 90+
- Core Web Vitals: Monitorar na Vercel Analytics

### SEO
- Google Search Console
- Sitemap.xml
- robots.txt

### Analytics (Opcional)
- Google Analytics
- Vercel Analytics
- Hotjar/Clarity para heatmaps

---

## 🔄 Atualizações

Após fazer mudanças:

```bash
git add .
git commit -m "sua mensagem"
git push
```

A Vercel vai automaticamente:
1. Detectar o push
2. Fazer build
3. Deploy da nova versão
4. Manter versão anterior como backup

---

## 🌐 Domínio Customizado

### Na Vercel:

1. Vá em **Settings > Domains**
2. Adicione seu domínio
3. Configure DNS:
   - Tipo: `A`
   - Nome: `@`
   - Valor: `76.76.21.21`

**OU**

   - Tipo: `CNAME`
   - Nome: `www`
   - Valor: `cname.vercel-dns.com`

4. Aguarde propagação (pode levar até 48h)

---

## ✅ Checklist Pós-Deploy

- [ ] Site acessível e carregando
- [ ] Todas as imagens carregando
- [ ] Links do WhatsApp funcionando
- [ ] Responsivo em mobile/tablet/desktop
- [ ] Lighthouse score 90+
- [ ] SEO tags presentes
- [ ] Google Analytics configurado (opcional)
- [ ] Domínio customizado (opcional)

---

## 📞 Suporte

Se tiver problemas:
1. Verifique os logs de build na Vercel
2. Teste localmente: `npm run build && npm run preview`
3. Limpe cache: `npm cache clean --force`
4. Reinstale: `rm -rf node_modules package-lock.json && npm install --legacy-peer-deps`

---

## 🎉 Deploy Realizado!

Sua landing page estará disponível em:
- **Vercel:** `https://poderosobigode.vercel.app`
- **Domínio Customizado:** Configure nas settings

**Qualidade Premium garantida! 💈👑**
