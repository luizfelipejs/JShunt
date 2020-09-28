# JShunt
Esse projeto criei com o intuito de aprender o typeORM, a ideia e bem simples você cadastra os produtos e o frontend vai te mostrando os produtos

## Tecnologias utilizadas

- Node Js
- Express 
- Html
- Css 
- Javascript  

### Como iniciar o projeto 

```
>>> yarn start
```

### Rotas do backend 
```
// Rota de registro de produto 
// Metodo: POST rota: localhost:8080/product
// Body:
{
  "name": "product",
  "description": "lorem Impsum"
}

// Rota de listagem de produto 
// Metodo: Get rota: localhost:8080/product
// Retorno
{
  "name": "product",
  "description": "lorem Impsum"
}

// Rota de update de produto 
// Metodo: PUT rota: localhost:8080/product
// Body To Update:
{
  "id": 1
  "name": "product",
  "description": "lorem Impsum"
}

// Rota de registro de produto 
// Metodo: DELETE rota: localhost:8080/product/:id
// Retorno:
"Status: 200 no body"
```
