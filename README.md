# README - Truffle + React Box

## Descrição Geral

Este projeto desenvolve um Sistema de Registros Acadêmicos Baseado em Blockchain utilizando Truffle e React, com o objetivo de criar uma plataforma segura e imutável para o gerenciamento de registros acadêmicos. Ele garante a autenticidade e a integridade dos diplomas e históricos acadêmicos, facilitando a verificação destes documentos de maneira confiável e acessível, enquanto enfrenta o desafio de assegurar a privacidade dos dados dos estudantes, garantindo que apenas informações relevantes sejam acessíveis sem comprometer a confidencialidade.

## Estrutura do Projeto

O projeto está dividido em duas partes principais:

### Frontend

O frontend é construído utilizando React. Ele inclui várias páginas e componentes que interagem com o contrato inteligente no backend. O código principal está localizado na pasta `client/src`.

#### Componentes Principais

- `App.js`: Componente principal que contém a lógica de interação com o contrato inteligente.
- `Contract.js`: Mostra e permite interação com o contrato inteligente.
- `ContractBtns.js`: Permite leitura e escrita no contrato inteligente através de botões.
- `Demo.js`: Componente para demonstração do contrato em ação.
- `Footer.js`, `Intro.js`, `Title.js`, entre outros, que ajudam a melhorar a experiência do usuário e fornecer informações úteis.

### Backend

O backend é composto por contratos inteligentes escritos em Solidity. O principal contrato chamado `AcademicRecords` gerencia registros acadêmicos. Ele está localizado na pasta `truffle/contracts`.

#### Funcionalidades do Contrato `AcademicRecords`

- Adicionar e validar registros acadêmicos.
- Buscar registros.
- Checar se um registro está validado.

## Configuração

### Requisitos

- Node.js
- Truffle
- Ganache
- MetaMask (para interação com a rede Ethereum)

### Instalação e Configuração

1. Instalação do Truffle e Ganache: `npm install -g truffle ganache`
2. Execução do Ganache: `ganache`
3. Compilar e Migrar Contratos para Ganache: `cd truffle` `truffle migrate --network development`

### Execução

Para iniciar o frontend, navegue até a pasta `client` e execute: `npm start`

## Testes

Os testes para os contratos inteligentes estão localizados na pasta `truffle/test`. Eles podem ser executados usando: `truffle test`

## Contribuições

Contribuições são bem-vindas. Para contribuir, você pode clonar este repositório, criar um novo branch com suas modificações e abrir um pull request.

## Licença

Este projeto está licenciado sob a Licença MIT.
