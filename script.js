//Const-InnerText
const cepNum = document.querySelector('#cepNum');
const logradouro = document.querySelector('#logradouro');
const complemento = document.querySelector('#complemento');
const bairro = document.querySelector('#bairro');
const localidade = document.querySelector('#localidade');
const uf = document.querySelector('#uf');
const ibge = document.querySelector('#ibge');
const ddd = document.querySelector('#dddNumero');
//Const ação
const numberCep = document.querySelector('#number-cep');
const btn = document.querySelector('.btn');
const erro = document.querySelector('.msg-erro');


function buscarInfos() {
  fetch(`https://viacep.com.br/ws/${numberCep.value}/json/`)
    .then(resposta => resposta.json())
    .then(cep => {
      cepNum.innerText = cep.cep;
      logradouro.innerText = cep.logradouro;
      complemento.innerText = cep.complemento;
      bairro.innerText = cep.bairro;
      localidade.innerText = cep.localidade;
      uf.innerText = cep.uf;
      ddd.innerText = cep.ddd;
      erro.classList.remove('ativo');
    })
    .catch(() => {
      erro.classList.add('ativo');
      numberCep.value = '';
      cepNum.innerText = '-';
      logradouro.innerText = '-';
      complemento.innerText = '-';
      bairro.innerText = '-';
      localidade.innerText = '-';
      uf.innerText = '-';
      ddd.innerText = '-';
    });
};

btn.addEventListener('click', buscarInfos);