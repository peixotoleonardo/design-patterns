# Padrão de Criação

Objetivo: abstrair o processo de instanciação, ajudando a tornar o sistema independente de como
os objetos são criados, compostos e representados.

- [Abstract Factory](#abstract-factory)

## Abstract Factory

### Objetivo

Fornecer uma interface para criação de famílias de objetos relacionados ou dependentes sem
especificar suas classes concretas.

### Aplicabilidade

Abstract Factory deve ser usado quando:

- um sistema deve ser independente de como seus objetos são criados, compostos ou representados;
- um sistema deve ser configurado como um objeto de uma família de múltiplos objetos;
- uma família de objetos for projetada para ser usada em conjunto, e você necessita garantir
    esta restrição;
- você quer fornecer uma biblioteca de classes e quer revelar somente suas interfaces,
    não suas implementações.

### Estrutura

<img src="./assets/abstract-factory.png" alt="Estrutura do Abstract Factory" />

### Vantagens

- Isola as classes concretas
- Facilita a troca de famílias de objetos
- Promove harmonia entre objetos: quando objetos  numa família são
    projetados para trabalharem juntos, é importante que uma aplicação
    use objetos de somente uma família de cada vez

### Desvantagens

- Dificulta adicionar novos tipos de objetos

## Builder

### Objetivo

Suportar a construção de um objeto complexo da sua representação de modo
que o mesmo processo de construção possa criar diferentes representações.

### Aplicabilidade

Builder deve ser usado quando:

- o algoritmo para criação de um objeto complexo deve ser independente das
  partes qye compõem o objeto e de como elas são montadas.
- o processo de construção deve permitir diferentes representações para o
  objeto que é construído.

### Estrutura

<img src="./assets/builder.png" alt="Estrutura do Builder" />

### Vantagens

- Permite variar a representação interna de um produto
- Isola o código para construção e representação
- Oferece um controle mais fino sobre o processo de construção
