

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
- Substituição de (Word list) por barra de pesquisa(Adicional)
- O aplicativo Android permite que você procure palavras usando Free Dictionary API
- Salvar palavras nos favoritos(Em processo de criação)
- Mostrar lista de palavras favoritas(Em processo de criação)
- Remover palavras de favocitos(Em processo de implementação)
- Funcionalidade de cache offline
- Funcionalidade de conversão de palavras em aúdio
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
- Android Studio
- Usando a linguagem Kotlin
- Clean Code e Arquitetura MVVM
- Android framework
- Significados podem ser acessados através do método GET em qualquer uma das seguintes rotas:
 /[palavra]
 /significados/[palavra]
 /meanings/[palavra]
- LiveData
 


## Bibliotecas

- Retrofit - HTTP network library
- ViewModel - is designed to store and manage UI-related data in a lifecycle conscious
- Biblioteca Gson: para analisar o json dentro do aplicativo.
- Bibliotecas - CardView


## Install


## 1 Implementações importantes para o seu projeto

<p align="center">
  <a href="https://media.discordapp.net/attachments/1019265341311963186/1070718472922869780/imagem_2023-02-02_115343255.png?width=628&height=377" target="blank"><img src="https://media.discordapp.net/attachments/1019265341311963186/1070718472922869780/imagem_2023-02-02_115343255.png?width=628&height=377" width="200" alt="Nest Logo" /></a>
</p>


## 2 Implementação de web service(Abra a imagem)


<p align="center">
  <a href="https://media.discordapp.net/attachments/1019265341311963186/1070719671327784960/dd.png?width=551&height=377" target="blank"><img src="https://media.discordapp.net/attachments/1019265341311963186/1070719671327784960/dd.png?width=551&height=3772" width="200" alt="Nest Logo" /></a>
</p>

 ## API
[Free Dictionary API](https://dictionaryapi.dev/)

## Subir o banco

- Banco de dados: SQLite
- crie uma cópia do `.env.example` como `.env` e defina suas variáveis do banco.


## Licença
Android Studio é um ambiente de desenvolvimento integrado para desenvolver para a plataforma Android. Foi anunciado em 16 de Maio de 2013 na conferência Google I/O. Android Studio é disponibilizado gratuitamente sob a Licença Apache 2.0.
(https://support.google.com/android/?hl=pt-BR#topic=7313011).

## Stay in touch

- Author - [@Natalí Dias]
- Plataforma - [@Android Studio](https://developer.android.com/studio/intro?hl=pt-br)

## License
Challenge ♥ by [Coodesh](https://coodesh.com).
