

 <h1 align="center">
  Desafio Mobile 🏅 2023 - Dicionário de Inglês
</h1>




  ## ✏️ Introdução

  Este é um desafio da Coodesh para avaliação de habilidades do candidato como Mobile Developer.
  Nesse desafio desenvolvi  um aplicativo para listar palavras em inglês, utilizando como base a API Free Dictionary API. O projeto desenvolvido tem como objetivo     
  exibir termos em inglês e gerenciar as palavras visualizadas.


<p align="center">
  <a href="https://media.discordapp.net/attachments/1019265341311963186/1070501163625087057/Original2x.png?width=720&height=221" target="blank"><img src="https://media.discordapp.net/attachments/1019265341311963186/1070501163625087057/Original2x.png?width=720&height=221" width="200" alt="Nest Logo" /></a>
</p>


  ## 📚 Features


Ele fornece as seguintes funcionalidades para o usuário:

- Pesquise as definições de uma palavra em inglês
- Barra de pesquisa
- O aplicativo Android permite que você procure palavras usando Free Dictionary API
- Salvar palavras nos favoritos
- Mostrar lista de palavras favoritas
- Remover palavras dos favoritos
- Filtrar palavras nos favoritos
- Funcionalidade de cache offline
- Design de Tema Claro e Escuro
- Caches e exibe pesquisas anteriores


  ## 💻 Funcionalidade & Conceitos usados

 A seguir estão alguns conceitos do Android usados para alcançar as funcionalidades no aplicativo:

- core - funcionalidade central, dados, domínio e camadas de apresentação
- mobile - camada de interface do usuário do aplicativo móvel
- desgaste - camada de interface do usuário do aplicativo de desgaste
- O aplicativo tem uma interface muito simples e interativa que ajuda o usuário a inserir as palavras e obter sua definição em formato de flashcard.
- Recyclerview : Para apresentar a lista de palavras diferentes, usamos o eficiente recyclerview.
- Layout de restrição: todas as atividades no aplicativo usam um layout de restrição flexível, fácil de manusear para diferentes tamanhos de tela.
- Biblioteca Gson: para analisar o json dentro do aplicativo.
- Core
- Android Studio
- Kotlin
- Android framework
- Significados podem ser acessados através do método GET em qualquer uma das seguintes rotas:
 /[palavra]
 /significados/[palavra]
 /meanings/[palavra]
 


## Bibliotecas

- Retrofit - HTTP network library
- ViewModel - is designed to store and manage UI-related data in a lifecycle conscious


 ## API
[Free Dictionary API](https://dictionaryapi.dev/)


## Subir o banco

- crie uma cópia do `.env.example` como `.env` e defina suas variáveis do banco.
- suba o banco de dados com docker: `docker-compose up -d`.

_(se você não estiver usando o docker, é necessário criar o banco manualmente)_.

## Licença

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://support.google.com/android/?hl=pt-BR#topic=7313011).

## Stay in touch

- Author - [@Natalí Dias](https://kamilmysliwiec.com)
- Plataforma - [@Android Studio](https://developer.android.com/studio/intro?hl=pt-br)

## License
Feito com ♥ by [Coodesh](https://coodesh.com).
