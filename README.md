# DataDynamo

A DataDynamo é uma fábrica de softwares de engenharia, que presta consultoria  destinado a empresas do setor que buscam otimizar seus processos, melhorar o relacionamento com os clientes e aprimorar a gestão de produtos e pedidos. Esta plataforma é composta por três produtos: o software, o APP e o Site. 

# Tecnologias Utilizadas
Node.js // MongoDB // Postman

Bibliotecas:
CORS, Dotenv, Express Mongoose 
render

# Variáveis de Ambiente

Para rodar esse projeto, você vai precisar adicionar as seguintes variáveis de ambiente no seu .env
```bash
USER_DB=local
DATABASE=local
PASSWORD=local
CLUSTER=local
```
# Deploy

### Render
https://datadynamo.onrender.com/clientes


Para fazer o deploy desse projeto vc deve ter o NodeJS instalado, nesse projeto utilizamos a versão:

***Clone o projeto***

###### com HTTPS
```bash
git clone https://github.com/SuayMack/modulo4-squad9.git

```

###### com SSH
```bash
git clone git@github.com:SuayMack/modulo4-squad9.git
```

###### ***Entre no diretório do projeto***

```bash
cd modulo4-squad9
```

###### ***Abra com code (opcional)***

```bash
code .
```

###### ***Instale as dependências***

```bash
npm install
```

###### ***Inicie o servidor***
```bash
npm run start

//ou

npm start

```

#### 🎉🎉🎉 É isso, aproveite o projeto.

# Teste Rotas
***Certifique-se de ter o Postman ou Insomnia instalado em seu sistema.***
 - [Postman - Download](https://www.postman.com/downloads/) 
 - [Insomnia - Download](https://insomnia.rest/download)

## 😁 Clientes

#### POST - Rota: '/cliente' 
 *A rota post cria cliente*

###### Entrada
```bash
{
  "nome": "Software",
  "telefone": "02140028926",
  "email": "josh@josh.com.br",
  "cnpj": "111111/0001-01",
  "endereco": "rua xv, 123"
}

```      
###### Saída
```bash
{
	"Sucesso": "Cliente criado com sucesso!"
}
```

#### GET - Rota: '/clientes' 
 *A rota get busca todos os clientes cadastrados*
     
###### Saída
```bash
{
    "_id": "650b53aa2e7b389a8f30a5a4",
    "nome": "ABC Tech Solutions",
    "telefone": "11111212341",
    "email": "contato@abctech.com.br",
    "cnpj": "12345678000101",
    "endereco": "Rua da Tecnologia, 123, Bairro Techville, Cidade Techlandia",
    "__v": 0
}, ...
```

#### GET - Rota: '/cliente/:id' 
 *A rota get id busca o cliente pelo id informado*

###### Ex rota:
 /cliente/650b53aa2e7b389a8f30a5a4
###### Saída

```bash
{
    "_id": "650b53aa2e7b389a8f30a5a4",
    "nome": "ABC Tech Solutions",
    "telefone": "11111212341",
    "email": "contato@abctech.com.br",
    "cnpj": "12345678000101",
    "endereco": "Rua da Tecnologia, 123, Bairro Techville, Cidade Techlandia",
    "__v": 0
}
```

#### DELETE - Rota: '/cliente/:id' 
 *A rota DELETE id deleta o cliente pelo id informado*

###### Ex rota:
 /cliente/650b53aa2e7b389a8f30a5a4
     
###### Saída
```bash
{
    "_id": "650b53aa2e7b389a8f30a5a4",
    "nome": "ABC Tech Solutions",
    "telefone": "11111212341",
    "email": "contato@abctech.com.br",
    "cnpj": "12345678000101",
    "endereco": "Rua da Tecnologia, 123, Bairro Techville, Cidade Techlandia",
    "__v": 0
}

```
#### PATCH - Rota: '/cliente/:id' 
 *A rota PATCH id atualiza o cliente pelo id informado*

###### Ex rota:
 /cliente/650b53aa2e7b389a8f30a5a4

###### Entrada
```bash
{
    "telefone": "11122215551"
}
```
     
###### Saída
```bash
{ message: "Registro atualizado com sucesso", value }
```

###### ⛔ Tratamento de Erro do POST e PATCH: 

#####  *Validação Nome com menos de 3 caracteres*:
```
{
    "message": "Nome inválido, o nome deve ter no mínimo 3 caracteres"
}
```

#####  *Se o número não for um inteiro válido ou se o comprimento do número de telefone não estiver dentro do intervalo entre 10 e 12 dígitos*:
```
{
    "message": "Telefone inválido, favor rever a requisição."
}
```

#####  *O CNPJ deve conter 14 digitos*:
```
{
    "message": "CNPJ inválido, favor rever a requisição."
}
```

##### *Se o e-mail não atender a estrutura correta*
```
{
    "message": "Email inválido, favor rever a requisição."
}
```

#####  *Se o e-mail já for cadastrado*:
```
{
    "message": "Email já cadastrado."
}
```

## 🛒 Produtos

#### POST - Rota: '/produto' 
 *A rota post cria produtos*

###### Entrada
```bash
{
    "nome": "Site",
    "descricao": "Um site é uma presença online composta por páginas da web interconectadas. Ele fornece informações, serviços ou conteúdo para visitantes da internet, permitindo a comunicação, interação e compartilhamento de informações em um ambiente digital."
    }
```      
###### Saída
```bash
{
	"Sucesso": "Produto criado com sucesso!"
}
```

#### GET - Rota: '/produto' 
 *A rota get busca todos os produtos cadastrados*
    
###### Saida
```bash
{
    "_id": "6509f3769f2264361f601799",
    "nome": "Site",
    "descricao": "Um site é uma presença online composta por páginas da web interconectadas. <br>
		 Ele fornece informações, serviços ou conteúdo para visitantes da internet, <br>
		 permitindo a comunicação, interação e compartilhamento de informações em um ambiente digital.",
    "__v": 0
}, ...
```

#### GET - Rota: '/produto/:id' 
 *A rota get id busca o produto pelo id informado*

###### Ex rota:
 /produto/650b53aa2e7b389a8f30a5a4

###### Saída
```bash
{
    "_id": "6509f3769f2264361f601799",
    "nome": "Site",
    "descricao": "Um site é uma presença online composta por páginas da web interconectadas. Ele fornece informações, serviços ou conteúdo para visitantes da internet, permitindo a comunicação, interação e compartilhamento de informações em um ambiente digital.",
    "__v": 0
}
```

#### PATCH - Rota: '/produto/:id' 
 *A rota PATCH id atualiza o produto pelo id informado*

###### Ex rota:
 /produto/650b53aa2e7b389a8f30a5a4

###### Entrada
```bash
{
    "descricao": "Um site é uma presença online composta por páginas da web interconectadas. Ele fornece informações, serviços ou conteúdo para visitantes da internet",
}
```
     
###### Saída
```bash
{ 
    "message": "Registro atualizado com sucesso",
    "id": "650c8a05f4b0a1b906bafd41"
}
```

#### DELETE - Rota: '/produto/:id' 
 *A rota DELETE id deleta o produtos pelo id informado*

###### Ex rota:
 /produto/650c8a01f4b0a1b906bafd3f
     
###### Saída
```bash
{
    "message": "Registro deletado com sucesso",
    "id": "650c8a01f4b0a1b906bafd3f"
}
```

#### ⛔ Tratamento de Erro para POST e PATCH

#####  *Validação do nome do Produto que deve ser, obrigatóriamente "Software", "APP" e "Site"*:
```
{
    "message": "Produto inválido, o produto deve ser Software, APP ou Site"
}
```

#####  *A descrição deve conter no mínimo 20 e no máximo 350 caracteres*:
```
{
    "message": "A descrição deve conter no mínimo 20 e no máximo 350 caracteres"
}
```

## 📲 Pedidos

#### POST - Rota: '/pedido' 
 *A rota post cria pedidos*

###### Entrada
```bash
{
    "cliente":"ABC Tech Solutions",
    "produto": "Site",
    "descricao": "landing page para a ABC Tech Solutions."
}
```      
###### Saída
```bash
{
	"Sucesso": "Registro inserido com sucesso!"
}
```

#### GET - Rota: '/pedido' 
 *A rota get busca todos os pedidos cadastrados*
    
###### Saida
```bash
{
    "_id": "6509f3769f2264361f601799",
    "nome": "Site",
    "descricao": "Um site é uma presença online composta por páginas da web interconectadas. Ele fornece informações, serviços ou conteúdo para visitantes da internet, permitindo a comunicação, interação e compartilhamento de informações em um ambiente digital.",
    "__v": 0
}
```

#### GET - Rota: '/pedido/:id' 
 *A rota get id busca o pedidos pelo id informado*

###### Ex rota:
 /pedido/650a332a97110710de3ce326

###### Saída
```bash
{
    "_id": "6509f3769f2264361f601799",
    "nome": "Site",
    "descricao": "Um site é uma presença online composta por páginas da web interconectadas. Ele fornece informações, serviços ou conteúdo para visitantes da internet, permitindo a comunicação, interação e compartilhamento de informações em um ambiente digital.",
    "__v": 0
}
```

#### PATCH - Rota: '/pedido/:id' 
 *A rota PATCH id atualiza o pedido pelo id informado*

###### Ex rota:
 /pedido/650a332a97110710de3ce326

###### Entrada
```bash
{
    "descricao": "Um site é uma presença online composta por páginas da web interconectadas."
}
```
     
###### Saída
```bash
{
    "message": "Registro atualizado com sucesso",
    "id": "650a332a97110710de3ce326"
}
```

#### DELETE - Rota: '/pedido/:id' 
 *A rota DELETE id deleta o pedido pelo id informado*

###### Ex rota:
 /pedido/650a332a97110710de3ce326
 
###### Saída
```bash
{
    "message": "Registro deletado com sucesso",
    "id": "650a332a97110710de3ce326"
}
```

#### ⛔ Tratamento de Erro para POST e PATCH

#####  *Validação o nome do Cliente deve conter mais de 3 caracteres*:
```bash
{
    "message": "O nome do cliente deve conter ao menos 3 caracteres"
}
```
#####  *Validação o nome do produto deve ser  Software, APP ou Site*:
```bash
{
    "message": "Produto inválido, o produto deve ser Software, APP ou Site"
}
```

#####  *A descrição deve conter no mínimo 20 e no máximo 350 caracteres*:
```
{
    "message": "A descrição deve conter no mínimo 20 e no máximo 350 caracteres"
}
```

## 📄 Contrato

#### POST - Rota: '/contrato' 
 *A rota post cria contratos*

###### Entrada
```bash
{
    "pedido":"650a332a97110710de3ce326",
    "descricao": "Contrato da empresa DataDynamo",
    "inicio": "Dec 20, 2023",
    "fim": "Dec 31, 2023"
}
```      
###### Saída
```bash
{
	"Sucesso": "Registro inserido com sucesso!"
}
```

#### GET - Rota: '/contrato' 
 *A rota get busca todos os contratos cadastrados*
    
###### Saida
```bash
{
    "_id": "650a3eedba7b5e6a58cb34d2",
    "pedido": "650a332a97110710de3ce326",
    "descricao": "Contrato da empresa DataDynamo ltda",
    "inicio": "2023-12-20T03:00:00.000Z",
    "fim": "2023-12-31T03:00:00.000Z",
    "__v": 0
},...
```

#### GET - Rota: '/contrato/:id' 
 *A rota get id busca o contratos pelo id informado*

###### Ex rota:
 /contrato/650a332a97110710de3ce326

###### Saída
```bash
{
    "_id": "650a3eedba7b5e6a58cb34d2",
    "pedido": "650a332a97110710de3ce326",
    "descricao": "Contrato da empresa DataDynamo ltda",
    "inicio": "2023-12-20T03:00:00.000Z",
    "fim": "2023-12-31T03:00:00.000Z",
    "__v": 0
}
```

#### PATCH - Rota: '/contrato/:id' 
 *A rota PATCH id atualiza o contrato pelo id informado*

###### Ex rota:
 /contrato/650a3eedba7b5e6a58cb34d2

###### Entrada
```bash
{
    "fim": "Dec 31, 2024"
}
```
     
###### Saída
```bash
{
    "message": "Registro atualizado com sucesso",
    "id": "650a3eedba7b5e6a58cb34d2"
}
```

#### DELETE - Rota: '/contrato/:id' 
 *A rota Delete id deleta o contrato pelo id informado*

###### Ex rota:
 /contrato/650a3eedba7b5e6a58cb34d2
     
###### Saída
```bash
{
    "message": "Registro deletado com sucesso",
    "id": "650a3eedba7b5e6a58cb34d2"
}
```

#### ⛔ Tratamento de Erro para POST e PATCH

#####  *Validação o nome do Pedido deve conter mais de 5 caracteres*:
```
{
    "message": "O Pedido deve conter no mínimo 5 caracteres"
}
```
#####  *A descrição deve conter de 20 a 350 caracteres*:
```bash
{
    "message": "A descrição deve conter no mínimo 20 e no máximo 350 caracteres"
}
```

#####  *A data de início do Contrato deve ser menor que a data de fim*:
```
{
    "message": "Data final de contrato, não pode ser menor que a data de incio"
}
```

## 🙋‍♂️ Feedback

#### POST - Rota: '/feedback' 
 *A rota post cria Feedback*

###### Entrada
```bash
{
    "cliente": "Superfood Distribuidora",
    "produto":"APP",
    "descricao": "APP muito bom, fácil de utilizar, paleta de cores legais"
}
```      
###### Saída
```bash
{
    "Sucesso": "Registro inserido com sucesso!"
}
```

#### GET - Rota: '/feedbacks' 
 *A rota get busca todos os feedbacks cadastrados*
    
###### Saida
```bash

{
    "_id": "650a4b7085ab4dc4c3ce0253",
    "cliente": "Superfood Distribuidora",
    "produto": "APP",
    "descricao": "APP muito bom, fácil de utilizar, paleta de cores legais",
    "__v": 0
},...

```

#### GET - Rota: '/feedback/:id' 
 *A rota get id busca o Feedback pelo id informado*

###### Ex rota:
 /feedback/650a332a97110710de3ce326

###### Saída
```bash
{
    "_id": "650a4b7085ab4dc4c3ce0253",
    "cliente": "Superfood Distribuidora",
    "produto": "APP",
    "descricao": "APP muito bom, fácil de utilizar, paleta de cores legais",
    "__v": 0
}
```

#### PATCH - Rota: '/feedback/:id' 
 *A rota PATCH id atualiza o Feedbacks pelo id informado*

###### Ex rota:
 /feedback/650a3eedba7b5e6a58cb34d2

###### Entrada
```bash
{
    "produto": "Site"
}
```
     
###### Saída
```bash
{
    "message": "Registro atualizado com sucesso",
    "id": "650a3eedba7b5e6a58cb34d2"
}
```

#### DELETE - Rota: '/feedback/:id' 
 *A rota DELETE id deleta o feedback pelo id informado*

###### Ex rota:
 /feedback/650a3eedba7b5e6a58cb34d2
     
###### Saída
```bash
{
    "message": "Registro deletado com sucesso",
    "id": "650a4b7085ab4dc4c3ce0253"
}
```

#### ⛔ Tratamento de Erro para POST e PATCH

#####  *Validação o nome do Cliente deve conter mais de 3 caracteres*:
```
{
    "message": "O nome do cliente deve conter ao menos 3 caracteres"
}
```
#####  *Validação o nome do produto deve ser  Software, APP ou Site*:
```bash
{
    "message": "Produto inválido, o produto deve ser Software, APP ou Site"
}
```

#####  *A descrição deve conter no mínimo 20 e no máximo 350 caracteres*:
```
{
    "message": "A descrição deve conter no mínimo 20 e no máximo 350 caracteres"
}
```

## Referência

 - [NodeJS](https://nodejs.org/en/docs)
 - [MongoDB](https://www.mongodb.com/docs/manual/core/document/)
 - [cors](https://docs.npmjs.com/)
 - [express](https://expressjs.com/en/5x/api.html)
 - [mongoose](https://mongoosejs.com/docs/api/document.html)
 - [Render](https://renderdoc.org/)

Feito com 💜 por Squad 9