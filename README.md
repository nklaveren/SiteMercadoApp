# SiteMercadoApp

Rode `ng serve` para o ambiente de desenvolvimento e navegue para `http://localhost:4200/`.

Este projeto trás o padrão de arquitetura proposto pelo angular.
Foi utilizado apenas as bibliotecas padrões do angular;
Não foi utilizado nenhum framework de css de terceiros;
Foi utilizado SASS para compilador de CSS;

**rotas publicas:**
```
/account/login
```

**rotas privadas:**
```
/home
/product
/product/:id
/product/create
```

**Atenção**

Para o correto funcionamento dos testes end-to-end as credenciais do usuário devem
ser salvas nas variáveis de ambiente do sistema local, com o seguinte nome:
```
SiteMercadoUsername
SiteMercadoPassword
```

teste end to end pode ser rodado pelo comando 'ng e2e'`

testes unitários podem ser rodados pelo comando 'ng test'`
