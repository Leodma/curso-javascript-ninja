(function(win, doc){
    'use strict';

    
    /*
    Vamos desenvolver mais um projeto. A ideia é fazer uma mini-calculadora.
    As regras são:

    - Deve ter somente 1 input, mas não deve ser possível entrar dados nesse input
    diretamente;
    - O input deve iniciar com valor zero;
    - Deve haver 10 botões para os números de 0 a 9. Cada botão deve ser um número;
    - Deve haver 4 botões para as operações principais: soma (+), subtração(-),
    multiplicação(x) e divisão(÷);
    - Deve haver um botão de "igual" (=) que irá calcular os valores e um botão "CE"
    que irá limpar o input, deixando-o com valor 0;

    - A cada número pressionado, o input deve atualizar concatenando cada valor
    digitado, como em uma calculadora real;
    - Ao pressionar um botão com uma das 4 operações, deve aparecer o símbolo da
    operação no input. Se o último caractere no input já for um símbolo de alguma
    operação, esse caractere deve ser substituído pelo último pressionado.
    Exemplo:
    - Se o input tem os valores: "1+2+", e for pressionado o botão de
    multiplicação (x), então no input deve aparecer "1+2x".
    - Ao pressionar o botão de igual, o resultado do cálculo deve ser mostrado no
    input;
    - Ao pressionar o botão "CE", o input deve ficar zerado.
    */

    //pegando os elementos HTML
    var display = doc.querySelector('[data-js="display"]');
    var cleanKey = doc.querySelector('[data-js="key-ce"');
    var equalKey = doc.querySelector('[data-js="key-equal"');
    var keys = doc.querySelectorAll('[data-js="key"]');


    function returnValue(element){
        return element.innerHTML;
    };

    function ckeckValue(equation, value){
        // tira o zero do começo
        if (equation.length == 1 && equation === "0")
            return value;
        //troca os sinais de operação quando estes forem os ultimos inseridos
        if (/[\+\*\-\/]/.test(value) &&/[\+\*\-\/]$/.test(equation) )
            return equation.slice(0,-1) + value;
        //troca os sinais de operação se for inserido primeiro e não for numero ou -
        if(equation.length == 1 && /[\+\*\/]/.test(equation))
            return value;
        return equation + value;   
    };


    function sum(n1, n2){
        return n1+n2;
    }
    function subtraction(n1, n2){
        return n1-n2;
    }
    function multiply(n1, n2){
        return n1*n2;
    }
    function division(n1, n2){
        return n1/n2;
    }

 

    function calculate(text){
       var numbers = text.match(/(\D(?=\d)|\d+)/g);
       var indexOperator;
       
       //verifica se o primeiro numero inserido é negativo
       if (numbers[0] === '-'){
           numbers[1] = '-' + numbers[1];
           numbers.shift();
       }

       function isMultiplyOrDivision(element){
           return element =='*' || element =='/';
       };

       function isMinusOrPlus(element, index, array){
        return element =='+' || element =='-';
       };

       function executeCalc(fn, index, array){
           var n1 = Number(array[index-1]);
           var n2 = Number(array[index+1]);
           array[index-1] = fn(n1,n2);
           array.splice(index,2);
           return array;
           
       };

       while(numbers.length>1){
            indexOperator = numbers.findIndex(isMultiplyOrDivision);
            while(indexOperator !== -1){
                if(numbers[indexOperator] === "*"){
                   numbers =  executeCalc(multiply, indexOperator, numbers);
                }else{
                    numbers = executeCalc(division, indexOperator, numbers);
                };
                 
                indexOperator = numbers.findIndex(isMultiplyOrDivision);
            };
            indexOperator = numbers.findIndex(isMinusOrPlus);
            while(indexOperator !==-1){
                if(numbers[indexOperator] ==="+"){
                    numbers = executeCalc(sum, indexOperator, numbers);  
                }else{
                    numbers = executeCalc(subtraction, indexOperator, numbers);
                };
                indexOperator = numbers.findIndex(isMinusOrPlus);
            };
       };
       return numbers.join('');
    };

    cleanKey.addEventListener('click', function(){display.innerHTML = '0'}, false);
    equalKey.addEventListener('click', function(){return display.innerHTML = calculate(display.innerHTML)}, false);
    keys.forEach(function(key){
        key.addEventListener('click',
         function(){
             var displayAtual = display.innerHTML;
             var keyPressed = returnValue(key);
             display.innerHTML = ckeckValue(displayAtual, keyPressed);
         } ,false);
    });

  

})(window, document);
