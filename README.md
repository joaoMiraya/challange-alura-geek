# AluraGeek - Documentação do Projeto

## Introdução

AluraGeek é um projeto de um CRUD para um ecommerce desenvolvido como parte de um desafio proposto pela Alura. O objetivo dessa aplicação é permitir a gestão de produtos para uma loja virtual, possibilitando a criação, leitura, atualização e exclusão de itens no catálogo.

## Tecnologias Utilizadas

A aplicação AluraGeek foi desenvolvida utilizando as seguintes tecnologias:

- React: Uma biblioteca JavaScript de código aberto para construir interfaces de usuário.
- React DOM: Pacote que fornece métodos específicos para manipulação do DOM em aplicações React.
- React Icons: Biblioteca que disponibiliza um conjunto de ícones para uso em aplicações React.
- React Router DOM: Um pacote que possibilita a navegação e roteamento na aplicação React.
- Axios: Uma biblioteca para fazer requisições HTTP.
- Prop Types: Biblioteca para validar as props passadas para componentes React.
- Tailwind CSS: Um framework CSS utilizado para facilitar a estilização da aplicação.
- Vite: Um bundler e servidor de desenvolvimento extremamente rápido.

### Dependências de Desenvolvimento

- @types/react: Pacote com definições de tipos para React.
- @types/react-dom: Pacote com definições de tipos para React DOM.
- @vitejs/plugin-react: Plugin para integração do React com o Vite.
- autoprefixer: Um pós-processador para adicionar prefixos CSS automaticamente.
- eslint: Uma ferramenta de análise de código estática para identificar e corrigir problemas no código.
- eslint-plugin-react: Plugin para adicionar regras de linting específicas para React.
- eslint-plugin-react-hooks: Plugin para adicionar regras de linting específicas para Hooks do React.
- eslint-plugin-react-refresh: Plugin para suportar linting em códigos com React Refresh.
- postcss: Um utilitário para transformar CSS com JavaScript.
- tailwindcss: Um framework CSS que oferece classes utilitárias para estilização.
  
## Configuração do Ambiente de Desenvolvimento

Para configurar o ambiente de desenvolvimento e executar a aplicação localmente, siga os passos abaixo:

1. Certifique-se de ter o [Node.js](https://nodejs.org) instalado em sua máquina.
2. Clone o repositório do projeto do GitHub.No terminal de sua preferência digite o comando $ git clone https://github.com/joaoMiraya/challange-alura-geek
3. Após clonar o projeto, entrar na pasta e digitar o comando [ $ code .]  para abrir o projeto no VScode. E no terminal do vscode digite os seguintes comandos para instalar as dependencias necessarias :

    $ cd alurageek 

    $ npm install

4. Para iniciar o servidor de desenvolvimento divída o terminal do VScode:
Certifique-se de estar dentro da pasta alurageek e em um terminal digite o seguinte código: <br>
$ npm run dev <br>
Agora com o outro terminal aberto, você devera iniciar o json-server.
Certifique-se de estar dentro da pasta alurageek.
Digite o seguinte comando no terminal 

    $ json-server --watch ./src/data/db.json <br>

    O json-server deve estar rodando no caminho: <br>
    http://localhost:3000 <br>
    http://localhost:3000/produtos <br>
    http://localhost:3000/usuarios <br>


5. A aplicação estará disponível no navegador no endereço http://localhost:5173

## Como Contribuir

Se você deseja contribuir com o projeto AluraGeek, siga os passos abaixo:

1. Faça um fork do repositório em sua conta do GitHub.
2. Clone o fork para o seu ambiente de desenvolvimento local.
3. Crie uma branch para a sua contribuição:

```bash
git checkout -b minha-contribuicao
```

4. Faça as alterações desejadas e faça commit das mudanças:

```bash
git commit -m "Minha contribuição"
```

5. Envie as alterações para o repositório remoto:

```bash
git push origin minha-contribuicao
```

6. Abra um Pull Request (PR) no repositório original e aguarde a revisão da sua contribuição.

## Considerações Finais

O projeto AluraGeek é um CRUD para um ecommerce desenvolvido como parte de um desafio proposto pela Alura. Utiliza tecnologias modernas como React, Axios e Tailwind CSS para criar uma experiência de usuário fluida e responsiva.

Se você tiver alguma dúvida ou precisar de ajuda, sinta-se à vontade para entrar em contato comigo.

**Desenvolvido por João Victor B Miraya**