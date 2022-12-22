var textInput = document.querySelector('#input-text') 
var outInput = document.querySelector('#output-text')

function criptografar () {
    var texto = textInput.value

    var resultDescripto = texto.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai").replace(/o/g, "ober").replace(/u/g, "ufat")

    document.getElementById('output-area').innerHTML =  '<textarea readonly id="result">' + resultDescripto + '</textarea>' + '<button id="copy" onclick="copiar()">Copiar</button>'

    
    document.getElementById('input-text').value = " ";
}
function descriptografar () {
    var texto = textInput.value

    var resultDescripto = texto.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g, "u");

    document.getElementById('output-area').innerHTML =  '<textarea readonly id="result">' + resultDescripto + '</textarea>' + '<button id="copy" onclick="copiar()">Copiar</button>'
    
    document.getElementById('input-text').value = " ";
}
function copiar() {
    var textoCop = document.getElementById('result');
  
    textoCop.select();
    document.execCommand('copy');
    document.getElementById('result').value = " ";
    alert('Texto copiado para a área de transferência')
}