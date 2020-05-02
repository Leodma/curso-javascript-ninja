/*
O desafio de hoje será um pequeno projeto: um cronômetro!
As regras para criação do cronômetro são as seguintes:
1. Crie um arquivo index.html e adicione esse script a ele;
2. Crie um campo `input` do tipo `text`, e inicie-o com um valor 0 (zero).
Ele será o nosso cronômetro;
3. Crie 3 botões para as ações do cronômetro: Start, Stop e Reset;
4. Ao clicar em Start, o valor do campo deve ser incrementado de 1 em 1, a
cada segundo;
5. Ao clicar em Stop, o cronômetro deve parar de contar;
6. Ao clicar em Reset, o cronômetro deve zerar e parar de contar.

Utilize o atributo data-js para nomear o campo e os botões. Você pode
usar o nome que achar melhor, desde que ele seja semântico, ou seja, o nome
dado ao elemento HTML deve definir o que o elemento é ou o que ele faz.
*/
(function(win, doc){
    'use strict'

    var counterDislpay = doc.querySelector('[data-js="contador"]');
    var btStart = doc.querySelector('[data-js = "btStart"]');
    var btStop = doc.querySelector('[data-js = "btStop"]');
    var btRestart = doc.querySelector('[data-js ="btRestart"]');

 
    
    var milisseconds = 0;
    var seconds = 0;
    var minutes = 0;
    var hours = 0;
    var timer;
   

    function startCounter( ){

        if (milisseconds === 100){
            milisseconds = 0;
            seconds++;

        };
        if (seconds === 60){
            seconds = 0;
            minutes++;
        };

        if (minutes === 60){
            minutes = 0;
            hours++;
        };

        counterDislpay.innerHTML = hours + ':' +  minutes + ':' + seconds + ':' + milisseconds;
        milisseconds ++;
        return timer = setTimeout(startCounter, 1);
    };

    function stopCounter(){
        return clearTimeout(timer);
    };

    function restartCounter(){
        seconds = 0;
        milisseconds = 0;
        minutes = 0;
        hours = 0;
        counterDislpay.innerHTML = hours + ':' +  minutes + ':' + seconds + ':' + milisseconds;   
        return stopCounter();
    };
   
    btStart.addEventListener('click', startCounter, false);

    btStop.addEventListener('click', stopCounter, false);

    btRestart.addEventListener('click', restartCounter, false);



})(window, document);