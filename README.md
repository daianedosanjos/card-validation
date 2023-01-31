# `Cartão de Crédito Válido`
Veja aqui o projeto [Validator cartão de crédito](https://daianedosanjos.github.io/card-validation/src)


## 1. `Introdução`

O [algoritmo de Luhn](https://en.wikipedia.org/wiki/Luhn_algorithm), também
chamado de módulo 10, é um método de soma de verificação, usado para validar
números de identificação, como o IMEI de telefones celulares, cartões de crédito
etc.

Esse algoritmo é simples. Obtemos o inverso do número a ser verificado (que
contém apenas dígitos [0-9]); todos os números que ocupam uma posição par devem
ser multiplicados por dois; se esse número for maior ou igual a 10, devemos
adicionar os dígitos do resultado; o número a verificar será válido se a soma de
seus dígitos finais for um múltiplo de 10.

![gráfico do algoritmo de
Luhn](https://www.101computing.net/wp/wp-content/uploads/Luhn-Algorithm.png)

## 2. `Resumo do projeto`

Esse projeto é um aplicativo da Web que permita ao usuário
validar o número de um cartão de crédito.  Além disso, você precisará
implementar a funcionalidade para ocultar todos os dígitos de um cartão, exceto
os quatro últimos.
A lógica do projeto está implementada inteiramente em JavaScript.


## `Os objetivos gerais deste projeto são os seguintes`

#### Quem são os principais usuários do produto?
Donos de estabelecimentos que aceitam cartão de crédito como forma de pagamento

#### Quais são os objetivos desses usuários em relação a esse produto?
O uso do validator cartão de crédito é para permitir que os comerciantes identifiquem números de cartões de crédito falsos antes de solicitar uma autorização da empresa do cartão. 

#### Como eu acho que esse produto pode resolver problemas do usuário?
Comerciantes que suspeitarem de um caso de fraude podem identificar informações de pagamento fraudulento mais rapidamente e evitar as perdas de tempo e dinheiro associados.

### `Como rodar o projeto localmente`

Siga os passos e inclua as informações abaixo:

| Passo                       | Comando/informação |
| --------------------------- | ------------------ |
| Faça o fork                 | `botão de forkar`  |
| Faça o clone                | `git clone`        |
| Instale as dependências após acessar a pasta projeto    | `npm i`            |
| Rode o projeto              | `npm start`       |


