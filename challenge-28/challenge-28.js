  /*
  No HTML:
  - Crie um formulário com um input de texto que receberá um CEP e um botão
  de submit;
  - Crie uma estrutura HTML para receber informações de endereço:
  "Logradouro, Bairro, Estado, Cidade e CEP." Essas informações serão
  preenchidas com os dados da requisição feita no JS.
  - Crie uma área que receberá mensagens com o status da requisição:
  "Carregando, sucesso ou erro."

  No JS:
  - O CEP pode ser entrado pelo usuário com qualquer tipo de caractere, mas
  deve ser limpo e enviado somente os números para a requisição abaixo;
  - Ao submeter esse formulário, deve ser feito um request Ajax para a URL:
  "https://viacep.com.br/ws/[CEP]/json/", onde [CEP] será o CEP passado

  http://apps.widenet.com.br/busca-cep/api-de-consulta
  no input criado no HTML;
  - Essa requisição trará dados de um CEP em JSON. Preencha campos na tela
  com os dados recebidos.
  - Enquanto os dados são buscados, na área de mensagens de status, deve mostrar
  a mensagem: "Buscando informações para o CEP [CEP]..."
  - Se não houver dados para o CEP entrado, mostrar a mensagem:
  "Não encontramos o endereço para o CEP [CEP]."
  - Se houver endereço para o CEP digitado, mostre a mensagem:
  "Endereço referente ao CEP [CEP]:"
  - Utilize a lib DOM criada anteriormente para facilitar a manipulação e
  adicionar as informações em tela.
  */
(function(win, doc){
  'use strict';

  function DOM(texto){
    this.element = doc.querySelector(texto);
  };
  DOM.prototype.on = function on(evento, fn){this.element.addEventListener(evento, fn, false);};
  DOM.prototype.getElement = function get(){return this.element;};
  DOM.prototype.getValue = function value(){return this.element.value};
  DOM.prototype.setText = function text(texto){ this.element.innerHTML = texto};
  DOM.prototype.insert = function insert(child) {this.element.appendChild(child)};
  DOM.prototype.cleanValue = function cleanValue(){this.element.value = ""};
  DOM.prototype.remove = function remove() {
    let child = this.element.firstElementChild;
    if (child)
      this.element.removeChild(child)
    return;
  };
  
  const $CEP = new DOM('[data-js="CEP-input"]');
  const $response = new DOM('[data-js="resposta"]');
  const $status = new DOM('[data-js="status-display"]');
  const button = new DOM('[data-js="submit"]');
  const ajax = new XMLHttpRequest();

  function loadAnimator(image){
    let fragment = doc.createDocumentFragment();
    let animator = doc.createElement('img');
    animator.src = image;
    fragment.appendChild(animator)
    return fragment;
  }

  function setMessage(type){
    let message = {
      error:"Serviço indisponível, tente mais tarde.",
      incorrect:"Digite o CEP no formato 00000-000",
      notFound:"CEP não encontrado, digite novamente",
    };
    return message[type];
  };

  function CEPValidate(cep){
    var regexp = /(\d{5})-(\d{3})/;
    return cep.match(regexp);
  };

  function handleResponse(){    
    if (ajax.readyState === 4 &&  ajax.status === 200){
      let CEPQuery = JSON.parse(ajax.responseText);
      $response.remove();
      $response.insert(createTable(CEPQuery)); 
      $CEP.cleanValue();
      return;
    };
      $response.remove();
      $response.setText(setMessage('error'));
  };

  function ajaxRequest(cep){
    if (CEPValidate(cep)){ 
      ajax.open('GET', 'https://ws.apicep.com/cep/'+ cep + '.json');
      ajax.send();
      ajax.addEventListener('loadend', handleResponse);
      $response.remove();
      $response.insert(loadAnimator('802.gif'));
      return;
    };
      alert(setMessage('incorrect'));
      $CEP.cleanValue();
      return;
  };
  
  function insertLine(table, key, value){
    let row = table.insertRow(-1);
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    cell1.innerHTML = key;
    cell2.innerHTML = value;
  };

  function createTable(object){
    let fragment = doc.createDocumentFragment();
    if(object.ok){
      let table = doc.createElement('table');
      insertLine(table, "Logradouro", object.address);
      insertLine(table, "Bairro", object.district);
      insertLine(table, "Estado", object.address);
      insertLine(table, "Cidade", object.city);
      insertLine(table, "CEP", object.code);
      fragment.appendChild(table);
    }else{
      let notFound = doc.createElement('p');
      notFound.innerHTML = setMessage('notFound');
      fragment.appendChild(notFound); 
    };
  
    return fragment;
  }

  button.on('submit', function(event){ 
    event.preventDefault();
    ajaxRequest($CEP.getValue());
  });
 
})(window, document);