

 <h1 align="center">
  Desafio Mobile 🏅 2023 - Dicionário de Inglês
</h1>


 <h2 align="vertical">
  ## ## Introduçãp
</h12>

  Este é um desafio da Coodesh para avaliação de habilidades do candidato como Mobile Developer.
  Nesse desafio desenvolvi  um aplicativo para listar palavras em inglês, utilizando como base a API Free Dictionary API. O projeto desenvolvido tem como objetivo     
  exibir termos em inglês e gerenciar as palavras visualizadas.


<p align="center">
  <a href="https://media.discordapp.net/attachments/1019265341311963186/1070501163625087057/Original2x.png?width=720&height=221" target="blank"><img src="https://media.discordapp.net/attachments/1019265341311963186/1070501163625087057/Original2x.png?width=720&height=221" width="200" alt="Nest Logo" /></a>
</p>


<p align="center">
  <a href="#-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-projeto">Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-como-rodar">Como rodar</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-licença">Licença</a>
</p>

<br>


 <h1 align="vertical">
  ## 📚 Features
</h1>


- O aplicativo Android permite que você:
- Procure palavras usando WordsAPI
- Salvar palavras nos favoritos
= Mostrar lista de palavras favoritas
- Remover palavras dos favoritos
- Filtrar palavras nos favoritos





<br>
## 🚀 Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:

- [NestJS](https://nestjs.com/): framework utilizado para criação da aplicação.
- [Postgres](https://www.postgresql.org/): banco SQL utilizado para armazenar os dados.
- [Docker](https://www.docker.com/) e [Docker-compose](https://docs.docker.com/compose/install/): utilizado para criar e rodar o container do banco de dados.
- [Jest](https://jestjs.io/): utilizado para escrever os testes da aplicação.
- [GitFlow](https://github.com/nvie/gitflow): utilizado no fluxo de desenvolvimento.


## 💻 Projeto

Esse projeto é um simple CRUD de produtos desenvolvido com o intuito de estudar o framework [NestJS](https://nestjs.com/). Porém aplicando alguns conceitos mais avançados como: TDD, GitFlow, Docker, etc.

## ⚡ Como rodar

### Requisitos

- [Node.js](https://nodejs.org/en/).
- [NestJS CLI](https://docs.nestjs.com/first-steps).
- [Npm](https://yarnpkg.com/) ou se preferir, pode usar o yarn _(já vem com o node)_.
- [Docker](https://www.docker.com/) e [Docker-compose](https://docs.docker.com/compose/install/) _(opcional)_.

### Subir o banco

- crie uma cópia do `.env.example` como `.env` e defina suas variáveis do banco.
- suba o banco de dados com docker: `docker-compose up -d`.

_(se você não estiver usando o docker, é necessário criar o banco manualmente)_.
- rode as migrations: `yarn typeorm migration:run`.




### Rodar a aplicação


$ npm install

$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Rodar os testes

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Licença

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://support.google.com/android/?hl=pt-BR#topic=7313011).

## Stay in touch

- Author - [@Natalí Dias](https://kamilmysliwiec.com)
- Plataforma - [@Android Studio](https://developer.android.com/studio/intro?hl=pt-br)

## License
Feito com ♥ by [Coodesh](https://coodesh.com).
