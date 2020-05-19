/*
Aproveitando a lib DOM que fizemos na semana anterior, crie agora para ela
métodos semelhantes aos que existem no array, mas que sirvam para os
elementos do DOM selecionados.
Crie os seguintes métodos:
- forEach, map, filter, reduce, reduceRight, every e some.

Crie também métodos que verificam o tipo do objeto passado por parâmetro.
Esses métodos não precisam depender de criar um novo elmento do DOM, podem
ser métodos estáticos.

Métodos estáticos não obrigam o uso do `new`, podendo ser usados diretamente
no objeto, como nos exemplos abaixo:
DOM.isArray([1, 2, 3]); // true
DOM.isFunction(function() {}); // true
DOM.isNumber('numero'); // false

Crie os seguintes métodos para verificação de tipo:
- isArray, isObject, isFunction, isNumber, isString, isBoolean, isNull.
O método isNull deve retornar `true` se o valor for null ou undefined.
*/
(function(win, doc){
    'use strict';

    function DOM(texto){
        this.element = doc.querySelectorAll(texto);
      };

    DOM.prototype.on = function on(evento, fn){
        return this.element.forEach(
          function(el, index, array){
            el.addEventListener(evento, fn, false);
          })};

    DOM.prototype.off = function on(evento, fn){
        return this.element.forEach(
          function(el, index, array){
            el.removeEventListener(evento, fn, false);
          })};
        
    DOM.prototype.get = function get(){return this.element;};
    DOM.prototype.map = function map(fn){return Array.prototype.map.call(this.element, fn)};
    DOM.prototype.filter = function filter(fn){ return Array.prototype.filter.call(this.element, fn)};
    DOM.prototype.reduce = function reduce(fn){ return Array.prototype.reduce.call(this.element, fn)};
    DOM.prototype.reduceRight = function reduceRight(fn){ return Array.prototype.reduceRight.call(this.element, fn)};
    DOM.prototype.every = function every(fn){ return Array.prototype.every.call(this.element, fn)};
    DOM.prototype.some = function some(fn){ return Array.prototype.some.call(this.element, fn)};

    DOM.isElement = function(element, test){
      return Object.prototype.toString.call(element) === '[object ' + test + ']';
    };

    DOM.isArray = function(element){return DOM.isElement(element, 'Array')};
    DOM.isFunction = function(element){return DOM.isElement(element, 'Function')};
    DOM.isNumber = function(element){return DOM.isElement(element, 'Number')};
    DOM.isString = function(element){return DOM.isElement(element, 'String')};
    DOM.isBoolean = function(element){return DOM.isElement(element, 'Boolean')};
    DOM.isNull = function(element){return DOM.isElement(element, 'Null') || DOM.isElement(element, 'Undefined')};

    var $a = new DOM('a');


    console.log(
        $a.filter(function(el){
            return el.nodeName == 'A';
        }));

    console.log('É array: ', DOM.isArray([1,2,3]));
    console.log('É function: ',DOM.isFunction(Function()));
    console.log('É Number: ',DOM.isNumber(55));
    console.log('É string: ',DOM.isString('lalala'));
    console.log('É Boolean: ',DOM.isBoolean(false));
    console.log('É Null ou undefined: ',DOM.isNull(null));


})(window, document);