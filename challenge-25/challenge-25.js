(function(win, doc){
    'use strict';
    /*
    Essa semana você terá dois desafios:
    1) Revisar todo o contéudo passado até aqui, e ver se você realmente entendeu
    tudo o que foi passado! Se tiver dúvidas, anote, e então abra issues,
    ou comente no seu pull request mesmo, que eu irei ajudá-lo a entender
    o que não ficou tão claro das aulas anteriores.
    É essencial que você entenda todo o conteúdo que foi passado até aqui,
    para que possamos prosseguir para a parte mais avançada do curso :D

    2) Estudar eventos!
    Acesse a página do MDN:
    https://developer.mozilla.org/en-US/docs/Web/Events#Categories

    Tente aplicar na prática alguns dos eventos que estão ali e coloque nesse
    desafio os experimentos legais que você conseguir desenvolver :D
    */
 
    var screen = doc.querySelector('[data-js="screen"]');
    var display = doc.querySelector('[data-js="display-event"]');
    var leftButton = doc.querySelector('[data-js="button-left"]');
    var rightButton = doc.querySelector('[data-js="button-right"]');
    var scroolButton = doc.querySelector('[data-js="button-scroll"]');
    var lastAction;
    var timer = 0;

    function showEvent(text){    
        return display.innerHTML = text;
    };

    function clearDisplay(button){
        display.innerHTML="";
        button.classList.remove('action');
        return
    };

    function cssMouseDisplay(button){
        button.classList.add('action');
        return
    };

    function on(event, element, text, button){
        element.addEventListener(event, function(e){
            lastAction ? lastAction.classList.remove('action'): lastAction = button;
            e.preventDefault();
            showEvent(text);
            cssMouseDisplay(button)
            clearTimeout(timer);
            timer = setTimeout(function(){clearDisplay(button)}, 1000);
            if(lastAction !== button){lastAction = button;};
        }, false);
    };
    
    on('click', screen, 'Fui clicado', leftButton);
    on('contextmenu', screen, 'Fui clicadono botão direito', rightButton);
    on('dblclick', screen, 'Fui clicado 2x', leftButton);
    on('scroll', win, "Scroll ... ", scroolButton);
    

})(window, document);
