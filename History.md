## Desafio Twitter Comments

Inicialmente eu planejei fazer o backend usando GraphQL e Apollo no front,
mas devido a alguns contratempos com a API do Twitter eu tive de refazer o
backend sem GraphQL. O back end stack: node, express, mongodb, mongoose e passport,
front stack: react, redux, react-router, semantic-ui, styled-components, react-leaflet

Toda a parte de OAuth com passport esta fluindo perfeitamente, o usuario autenticado
persiste mesmo depois de fechar o app, decidi usar cookie-session ao inves de
express-session, justamente pelo escopo pequeno do projeto. A verificacao se o
usuario esta ou nao logado foi feita com redux, passando o estado inicial da
aplicacao para o redux store e renderizando os elementos da pagina dinamicamente
de acordo com o usuario estar ou nao logado, o titulo do app funciona como
redirecionamento dinamico entre as rotas da aplicacao.

Tive alguns problemas com a API do Twitter, nao consegui consumir as queries no front
os problemas foram na verdade nos headers das queries, tentei algumas solucoes, mas
nao tive sucesso. Entao decidi usar uma lib chamada faker.js pra eu poder mostrar
dados nos popups do mapa, tem um pequeno bug na API do react-leaflet onde a foto
do usuario, ao clicar no popup, so se formata na pagina depois do segundo click.

Todos os metadados simulando os seguidores no Twitter do usuario logado, sao dinamicos
e variam a cada reload da pagina, os metadados sao: foto e nome do usuario e um
texto simulando o tweet escrito.
