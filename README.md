<p align="center">
  <img alt="Repo size"  src="https://img.shields.io/github/repo-size/geovaneborba/ftr-pos-iac?color=4f46e5&style=for-the-badge">
  <img alt="GitHub top language"  src="https://img.shields.io/github/languages/top/geovaneborba/ftr-pos-iac?color=4f46e5&style=for-the-badge">
  <img alt="GitHub language count"  src="https://img.shields.io/github/languages/count/geovaneborba/ftr-pos-iac?color=4f46e5&style=for-the-badge">
</p>

<p align="center">
  <a href="#dart-sobre">Sobre</a> &#xa0; | &#xa0;
  <a href="#books-aprendizado">Aprendizado</a> &#xa0; | &#xa0;
  <a href="#rocket-tecnologias">Tecnologias</a> &#xa0; | &#xa0;
  <a href="#warning-pré-requisitos"> Pré requisitos</a> &#xa0; | &#xa0;
  <a href="#checkered_flag-começando">Começando</a> &#xa0;
</p>

<br>

## :dart: Sobre

Este projeto cria recursos na AWS automaticamente usando código, em vez de criar tudo manualmente pelo painel da AWS. Usando o **Pulumi** com TypeScript, o código cria um repositório no Amazon ECR (para guardar imagens Docker) e buckets no Amazon S3.

A vantagem de criar a infraestrutura por código: fica documentado, versionado no Git, e pode ser recriado do zero a qualquer momento rodando o mesmo código.

<p align="right">(<a href="#top">Voltar para o topo</a>)</p>

## :books: Aprendizado

- Infraestrutura como Código (IaC) com Pulumi
- Provisionamento de recursos AWS (ECR, S3) via TypeScript
- Gerenciamento de Stacks (ambientes) no Pulumi
- Boas práticas de tagging e organização de recursos na nuvem

<p align="right">(<a href="#top">Voltar para o topo</a>)</p>

## :rocket: Tecnologias

As seguintes tecnologias foram usadas na construção do projeto:

- TypeScript
- Pulumi
- AWS (ECR, S3)
- Node.js

Outras dependências e ferramentas utilizadas podem ser encontradas no arquivo [package.json](./package.json)

<p align="right">(<a href="#top">Voltar para o topo</a>)</p>

## :warning: Pré-requisitos

Antes de começar, você precisa ter as seguintes ferramentas instaladas e configuradas em sua máquina:

- [Git](https://git-scm.com)
- [Node.js](https://nodejs.org/en/)
- [Pulumi CLI](https://www.pulumi.com/docs/iac/download-install/)
- [AWS CLI](https://aws.amazon.com/cli/) configurado com suas credenciais (`aws configure`)

<p align="right">(<a href="#top">Voltar para o topo</a>)</p>

## :checkered_flag: Começando

```bash
# Clone este repositório
$ git clone https://github.com/geovaneborba/ftr-pos-iac.git

# Entre na pasta e instale as dependências
$ cd ftr-pos-iac && npm i

# Faça login no backend de state do Pulumi
$ pulumi login

# Selecione (ou crie) a stack de destino
$ pulumi stack select stg

# Visualize as mudanças que serão aplicadas
$ pulumi preview

# Aplique a infraestrutura na AWS
$ pulumi up
```

<p align="right">(<a href="#top">Voltar para o topo</a>)</p>
<p align="center">Feito com ❤️ por <a href="https://github.com/geovaneborba" target="_blank">Geovane Borba</a></p>
