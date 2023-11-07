document.getElementById('calcular').addEventListener('click', function() {
    var nome = document.getElementById('nome').value;
    var email = document.getElementById('email').value;
    var sexo = document.getElementById('sexo').value;
    var peso = parseFloat(document.getElementById('peso').value);
    var alturaString = document.getElementById('altura').value;
    var altura = parseFloat(alturaString) / 100;

    if (nome === '' || email === '' || peso <= 0 || altura <= 0 || isNaN(altura)) {
        document.getElementById('resultado').textContent = "Por favor, preencha todos os campos corretamente.";
        return;
    }

    // Calcular o IMC
    var imc = peso / (altura * altura);
    var categoria = calcularCategoriaIMC(Number(imc));


    var recomendacaoAgua = calcularRecomendacaoAgua(imc);
    // Exibir o resultado
    var resultado = "Nome: " + nome + "<br>";
    resultado += "Email: " + email + "<br>";
    resultado += "Sexo: " + sexo + "<br>";
    resultado += "Seu IMC é: " + imc.toFixed(2) + "<br>";
    resultado += "Categoria: " + categoria + "<br>";
    resultado += "Recomendação de Água: " + recomendacaoAgua + " litros por dia";

    document.getElementById('resultado').innerHTML = resultado;
});

function calcularCategoriaIMC(imc) {
    if (imc < 16) {
        return 'Baixo peso (Magreza)';
    } else if (imc >= 16 && imc < 16.9) {
        return 'Baixo peso (Magreza)';
    } else if (imc >= 17 && imc < 18.4) {
        return 'Baixo peso (Magreza)';
    } else if (imc >= 18.5 && imc < 24.9) {
        return 'Peso normal';
    } else if (imc >= 25 && imc < 29.9) {
        return 'Sobrepeso';
    } else if (imc >= 30 && imc < 34.9) {
        return 'Obesidade de Grau I';
    } else {
        return 'Obesidade de Grau II';
    }

};

function calcularRecomendacaoAgua(imc) {
    if (imc < 18.5) {
        return 2.5; 
   } else if (imc >= 18.5 && imc < 24.9) {
        return 2; 
    } else if (imc >= 25) {
        return 1.5; 
    }
};    
