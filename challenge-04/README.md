# Desafio da semana #4

```js
/*
Declare uma variável chamada `isTruthy`, e atribua a ela uma função que recebe
um único parâmetro como argumento. Essa função deve retornar `true` se o
equivalente booleano para o valor passado no argumento for `true`, ou `false`
para o contrário.
*/
?
var isTruthy = function(x){
    return x ?'True':'False';
    // ou return !!x ( o !! informa o valor boleano da variavel)
}
// Invoque a função criada acima, passando todos os tipos de valores `falsy`.
?
isTruthy(false)
isTruthy(null)
isTruthy(undefined)
isTruthy(0)
isTruthy(NAN)
isTruthy('')
/*
Invoque a função criada acima passando como parâmetro 10 valores `truthy`.
*/
?
isTruthy(1)
isTruthy("a")
isTruthy(true)
isTruthy(1.6)
isTruthy('string')
isTruthy([])
isTruthy({})
isTruthy(-10)
isTruthy(funcaoqualquer())
isTruthy(20)
/*
Declare uma variável chamada `carro`, atribuindo à ela um objeto com as
seguintes propriedades (os valores devem ser do tipo mostrado abaixo):
- `marca` - String
- `modelo` - String
- `placa` - String
- `ano` - Number
- `cor` - String
- `quantasPortas` - Number
- `assentos` - Number - cinco por padrão
- `quantidadePessoas` - Number - zero por padrão
*/
?
var carro = {
    marca:'Chevrolet',
    modelo:'Onix Plus',
    placa:'BDV8E20',
    ano:2020,
    quantasPortas:5,
    acentos:5,
    quantidadePessoas:0};
/*
Crie um método chamado `mudarCor` que mude a cor do carro conforme a cor
passado por parâmetro.
*/
carro.mudaCor = function(cor){
    var corAntiga = carro.cor;
    carro.cor = cor;
    return 'A cor do carro foi alterada de '+ corAntiga + ' para ' + cor;
}

/*
Crie um método chamado `obterCor`, que retorne a cor do carro.
*/
?
carro.obterCor = function(){
    return 'A cor do carro é ' + carro.cor;
}
/*
Crie um método chamado `obterModelo` que retorne o modelo do carro.
*/
?
carro.obterModelo = function(){
    return ' Modelo do carro: ' + carro.modelo;
}
/*
Crie um método chamado `obterMarca` que retorne a marca do carro.
*/
carro.obterMarca = function(){
    return ' Marca do carro: ' + carro.marca;
}

/*
Crie um método chamado `obterMarcaModelo`, que retorne:
"Esse carro é um [MARCA] [MODELO]"
Para retornar os valores de marca e modelo, utilize os métodos criados.
*/
carro.obterMarcaModelo = function(){
    return 'Esse carro é um ' + carro.obterMarca() + ' ' + carro.obterModelo();
}

/*
Crie um método que irá adicionar pessoas no carro. Esse método terá as
seguintes características:
- Ele deverá receber por parâmetro o número de pessoas entrarão no carro. Esse
número não precisa encher o carro, você poderá acrescentar as pessoas aos
poucos.
- O método deve retornar a frase: "Já temos [X] pessoas no carro!"
- Se o carro já estiver cheio, com todos os assentos já preenchidos, o método
deve retornar a frase: "O carro já está lotado!"
- Se ainda houverem lugares no carro, mas a quantidade de pessoas passadas por
parâmetro for ultrapassar o limite de assentos do carro, então você deve
mostrar quantos assentos ainda podem ser ocupados, com a frase:
"Só cabem mais [QUANTIDADE_DE_PESSOAS_QUE_CABEM] pessoas!"
- Se couber somente mais uma pessoa, mostrar a palavra "pessoa" no retorno
citado acima, no lugar de "pessoas".
*/
carro.adicionarPessoas = function(pessoas){

    if (carro.quantidadePessoas === carro.acentos){
        return 'O carro já está lotado';
    }

    var lugaresVagos = carro.acentos - carro.quantidadePessoas;carr

    if (pessoas > lugaresVagos){
        if (lugaresVagos == 1){
              return 'Só cabe mais '+ lugaresVagos + ' pessoa.';
        }
        return 'Só cabem mais '+ lugaresVagos + ' pessoas.';
    }

    carro.quantidadePessoas += pessoas;
   

    return 'Já temos ' + carro.quantidadePessoas + ' no carro';
}

/*
Agora vamos verificar algumas informações do carro. Para as respostas abaixo,
utilize sempre o formato de invocação do método (ou chamada da propriedade),
adicionando comentários _inline_ ao lado com o valor retornado, se o método
retornar algum valor.

Qual a cor atual do carro?
*/
carro.obterCor(); // amarelo

// Mude a cor do carro para vermelho.
?
carro.mudarCor('vermelho');
// E agora, qual a cor do carro?
?
carro.obterCor() // vermelho
// Mude a cor do carro para verde musgo.
?
carro.mudarCor('verde musgo')
// E agora, qual a cor do carro?
?
carro.obterCor() // verde musgo
// Qual a marca e modelo do carro?
?
carro.obterMarca() // Chevrolet
// Adicione 2 pessoas no carro.
?
carro.adicionarPessoas(2)
// Adicione mais 4 pessoas no carro.
?
carro.adicionarPessoas(4) // 'Só cabem mais 1 pessoa.
// Faça o carro encher.
?
carro.adicionarPessoas(1)
// Tire 4 pessoas do carro.
?
carro.quantidadedePessoas = 4;
// Adicione 10 pessoas no carro.
?
carro.adicionarPessoas(10);
// Quantas pessoas temos no carro?
?
1
