# Green Petroil — Projeto semestral de Front-End Frameworks

Site corporativo fictício desenvolvido em Angular para atender ao enunciado do trabalho semestral da UNG.

## O que está incluído

- Aplicação de página única (SPA) com Angular e Angular Router.
- Quatro páginas principais: Início, A empresa, Projetos e Projetos sociais.
- Página de leitura completa de notícia (`/noticias/:id`).
- Componentes compartilhados: cabeçalho, rodapé, título de seção e cartão de notícia.
- Feed inicial com três publicações.
- Integração HTTP com API pública de demonstração (`JSONPlaceholder`), com conteúdo local de fallback.
- Layout responsivo para desktop, tablet e celular.
- HTML semântico, textos alternativos nas imagens, navegação por teclado e rótulos acessíveis.

> Observação para a apresentação: a Green Petroil, sua história e os projetos descritos são fictícios, criados para fins acadêmicos. A API JSONPlaceholder é usada para demonstrar a requisição HTTP; o conteúdo editorial do site permanece coerente com o tema ambiental por meio dos dados locais de demonstração.

## Requisitos

- Node.js 20.19+ ou 22.12+
- npm

## Como executar

1. Extraia o arquivo ZIP.
2. Abra a pasta `green-petroil-angular` no VS Code.
3. Abra o terminal nessa pasta.
4. Execute:

```bash
npm install
npm start
```

5. Acesse `http://localhost:4200`.

## Como gerar a versão de produção

```bash
npm run build
```

Os arquivos compilados serão gerados em `dist/green-petroil`.

## API utilizada

A aplicação faz uma requisição HTTP para:

`https://jsonplaceholder.typicode.com/posts?_limit=3`

O serviço está em `src/app/services/news.service.ts`. Se a API estiver indisponível, o site exibe os três posts locais de demonstração.

Para usar uma API própria no futuro, altere a URL dentro de `getLatestPosts()` e adapte o mapeamento dos campos ao formato retornado pela nova API.

## Estrutura

```text
src/
  app/
    models/
      post.model.ts
    pages/
      home.component.ts
      about.component.ts
      projects.component.ts
      social.component.ts
      news-detail.component.ts
      not-found.component.ts
    services/
      news.service.ts
    shared/
      site-header.component.ts
      site-footer.component.ts
      section-heading.component.ts
      news-card.component.ts
    app.component.ts
    app.routes.ts
  index.html
  main.ts
  styles.css
```

## Publicar no GitHub

1. Crie um repositório público no GitHub, por exemplo `green-petroil`.
2. Extraia o ZIP e abra a pasta no VS Code.
3. No terminal, execute:

```bash
git init
git add .
git commit -m "Projeto Green Petroil em Angular"
git branch -M main
git remote add origin https://github.com/SEU-USUARIO/green-petroil.git
git push -u origin main
```

4. Substitua `SEU-USUARIO` pelo seu usuário do GitHub.
5. Copie o endereço público do repositório para entregar ao professor.

## Antes de apresentar

- Teste os links do menu e os cartões de notícias.
- Mostre o site em uma largura de celular para comprovar a responsividade.
- Explique que o Angular Router troca as páginas sem recarregar o documento inteiro.
- Mostre `news.service.ts` para explicar a integração com API usando `HttpClient`.
- Explique que o conteúdo local funciona como fallback se a API não responder.
