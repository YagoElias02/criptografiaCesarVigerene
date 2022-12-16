function cesar() {
	var chave = Number(document.querySelector('#chave').value);
	var frase = document.querySelector('#text').value;
	var choose = document.querySelector('#choose').checked;
	var result = document.getElementById('result');
	let fraseCoded = '';

	result.innerText = ' ';

	let alf = [
		'A',
		'B',
		'C',
		'D',
		'E',
		'F',
		'G',
		'H',
		'I',
		'J',
		'K',
		'L',
		'M',
		'N',
		'O',
		'P',
		'Q',
		'R',
		'S',
		'T',
		'U',
		'V',
		'W',
		'X',
		'Y',
		'Z',
	];
	let alfCoded = [
		'A',
		'B',
		'C',
		'D',
		'E',
		'F',
		'G',
		'H',
		'I',
		'J',
		'K',
		'L',
		'M',
		'N',
		'O',
		'P',
		'Q',
		'R',
		'S',
		'T',
		'U',
		'V',
		'W',
		'X',
		'Y',
		'Z',
	];

	for (let i = 0; i < alf.length; i++) {
		if (chave >= alfCoded.length) chave = 0;
		alfCoded[i] = alf[chave];
		chave++;
	}
	for (let c = 0; c < frase.length; c++) {
		let validateAst = /[!|?|,|.|;|:|-]/;
		if (Number(frase[c]) || validateAst.test(frase[c])) fraseCoded += frase[c];

		for (let idx = 0; idx < alf.length; idx++) {
			if (frase[c].trim().length === 0) fraseCoded += ' ';
			if (choose) {
				if (frase[c].toUpperCase() === alfCoded[idx]) fraseCoded += alf[idx];
				console.log(frase[c].toUpperCase());
				console.log('if');
			} else {
				if (frase[c].toUpperCase() === alf[idx]) fraseCoded += alfCoded[idx];
				console.log(frase[c].toUpperCase());
				console.log('else');
			}
		}
	}
	result.innerHTML = fraseCoded;
}

var doc = window.document;

function lerTexto(texto) {
	var resultado = [];

	for (var i = 0; i < texto.length; i++) {
		if (texto[i].charCodeAt() >= 65 && texto[i].charCodeAt() <= 122) {
			if (texto[i].charCodeAt() < 97) {
				resultado[i] = texto[i].charCodeAt() - 65;
			} else {
				resultado[i] = texto[i].charCodeAt() - 97;
			}
		} else {
			return false;
		}
	}

	return resultado;
}

function processarChave(chaveNumerica, entradaNumerica) {
	var chaveNumericaFinal = [];

	if (chaveNumerica.length <= entradaNumerica.length) {
		for (var i = 0; i < entradaNumerica.length; i++) {
			chaveNumericaFinal[i] = chaveNumerica[i % chaveNumerica.length];
		}
	} else {
		alert("Erro! Informe uma chave menor ou uma entrada maior.");
	}

	//console.log("Chave final: "+chaveNumericaFinal);

	return chaveNumericaFinal;
}

function vigenere(funcao) {
	var chave = doc.getElementById("texto_chave").value;
	var entrada = doc.getElementById("texto_entrada").value;

	var chaveNumerica = lerTexto(chave) ? chaveNumerica = lerTexto(chave) :
		alert("Erro ao ler chave! Informe apenas letras de A-Z.");
	//console.log("Chave: "+chaveNumerica);

	var entradaNumerica = lerTexto(entrada) ? entradaNumerica = lerTexto(entrada) :
		alert("Erro ao ler entrada! Informe apenas letras de A-Z.");
	//console.log("Entrada: "+entradaNumerica);

	var chaveNumericaFinal = processarChave(chaveNumerica, entradaNumerica);

	var resultado = '';
	var resultadoNumerico = [];

	for (var i = 0; i < entradaNumerica.length; i++) {
		if (funcao == "E") {
			resultadoNumerico[i] = (entradaNumerica[i] + chaveNumericaFinal[i]) % 26;
		} else {
			resultadoNumerico[i] = ((entradaNumerica[i] - chaveNumericaFinal[i]) % 26) < 0 ?
				resultadoNumerico[i] = ((entradaNumerica[i] - chaveNumericaFinal[i]) % 26) + 26 :
				resultadoNumerico[i] = ((entradaNumerica[i] - chaveNumericaFinal[i]) % 26);
		}
		resultado += String.fromCharCode(resultadoNumerico[i] + 65);
	}

	//console.log("Resultado numérico: "+resultadoNumerico);   
	//console.log("Resultado: "+resultado);     

	doc.getElementById("saida").style.display = 'block';
	doc.getElementById("resultado").innerHTML = '<span id="texto_resultado">' + resultado + '</span>';
}

function analise(){
	var texto = doc.getElementById("frase").value;
	var array = texto.trim().toUpperCase();
	var array1 = array.replace(/ /g, "");
	var array2 = array1.split("");
	console.log(array1);
	console.log(array2);

	let resultado = array2.reduce((acc, val) => {
		if (!acc[val]) acc[val] = {
		  "número": val,
		  "quantidade": 1
		};
		else acc[val]["quantidade"]++;
		return acc;
	  }, {});

	  resultado = Object.values(resultado).sort((a, b) => b.quantidade - a.quantidade);
	  resultado = resultado.map((val) => val.quantidade + " vezes da letra '" + val.número + "' aparece - diferença para A = " + (val.número.charCodeAt()-65) + "<br>");
	  

	doc.getElementById("resultado_frase").innerHTML = resultado;
}