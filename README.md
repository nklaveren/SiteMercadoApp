# SiteMercadoApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.0.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

Este projeto trás o padrão de arquitetura proposto pelo angular.
Foi utilizado apenas as bibliotecas padrões do angular;
Não foi utilizado nenhum framework de css de terceiros;
Foi utilizado SASS para compilador de CSS;

Autenticação é feita com a minha api, onde utiliza-se do padrão JWT.

A única rota de acesso publico é /account/login

rotas privadas:

/home
/product
/product/:id
/product/create

<b>Atenção</b>
Para o correto funcionamento dos testes end-to-end as credenciais do usuário devem
ser salvas nas variáveis de ambiente do sistema local, com o seguinte nome:
SiteMercadoUsername
SiteMercadoPassword

teste end to end pode ser rodado pelo comando:
ng e2e

testes unitários podem ser rodados pelo comando
ng test
