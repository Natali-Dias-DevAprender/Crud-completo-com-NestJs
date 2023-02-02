

 <h1 align="center">
  Desafio Mobile 🏅 2023 - Dicionário de Inglês
</h1>




  ## ✏️ Introdução

  Este é um aplicativo de dicionário para o Android. Basicamente, foi criado para o idioma inglês. O dicionário está em modelo de protótipo.
  Você pode adicionar mais palavras na classe de palavras que está sob a atividade principal deste projeto. Eu usei a visualização do RecyclerView para listar as  
  palavras. Além disso, colocou o botão de pesquisa na parte superior da visualização, onde você pode pesquisar uma palavra específica e encontrar seu significado.
  



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
- Remover palavras do Histórico
- Filtrar palavras nos favoritos
- Funcionalidade de cache offline
- Design de Tema Claro e Escuro
- Caches e exibe pesquisas anteriores
- Exibição de palavra, significados e a fonética


  ## 💻 Conceitos usados

 A seguir estão alguns conceitos do Android usados para alcançar as funcionalidades no aplicativo:

- core - funcionalidade central, dados, domínio e camadas de apresentação
- mobile - camada de interface do usuário do aplicativo móvel
- desgaste - camada de interface do usuário do aplicativo de desgaste
- O aplicativo tem uma interface muito simples e interativa que ajuda o usuário a inserir as palavras e obter sua definição em formato de flashcard.
- Recyclerview : Para apresentar a lista de palavras diferentes, usamos o eficiente recyclerview.
- Layout de restrição: todas as atividades no aplicativo usam um layout de restrição flexível, fácil de manusear para diferentes tamanhos de tela.
- Biblioteca Gson: para analisar o json dentro do aplicativo.
- Android Studio
- Kotlin
- Android framework
- Significados podem ser acessados através do método GET em qualquer uma das seguintes rotas:
 /[palavra]
 /significados/[palavra]
 /meanings/[palavra]
- Bibliotecas - CardView
 


## Bibliotecas

- Retrofit - HTTP network library
- ViewModel - is designed to store and manage UI-related data in a lifecycle conscious


 ## API
[Free Dictionary API](https://dictionaryapi.dev/)


## Subir o banco

- Banco de dados: SQLite
- crie uma cópia do `.env.example` como `.env` e defina suas variáveis do banco.
- Usando a linguagem Kotlin

## Licença
Android Studio é um ambiente de desenvolvimento integrado para desenvolver para a plataforma Android. Foi anunciado em 16 de Maio de 2013 na conferência Google I/O. Android Studio é disponibilizado gratuitamente sob a Licença Apache 2.0.
(https://support.google.com/android/?hl=pt-BR#topic=7313011).

## Stay in touch

- Author - [@Natalí Dias](https://kamilmysliwiec.com)
- Plataforma - [@Android Studio](https://developer.android.com/studio/intro?hl=pt-br)

## License
Feito com ♥ by [Coodesh](https://coodesh.com).
