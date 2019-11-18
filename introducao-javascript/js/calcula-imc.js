var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista"


//É exatamente igual ao querySelector porém é para array
var pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < pacientes.length; i++){

    var tdPeso = pacientes[i].querySelector(".info-peso");
    var peso = tdPeso.textContent;

    var tdAltura = pacientes[i].querySelector(".info-altura");
    var altura = tdAltura.textContent;

    var tdIMC = pacientes[i].querySelector(".info-imc");

    var pesoEhValido = true;
    var alturaEhValida = true;

    if (peso <= 0 || peso >= 1000){
        console.log("Peso Inválido");
        pesoEhValido = false;
        tdIMC.textContent = "Peso Inválido";
        //Está configurando um estilo que está setado lá no CSS
        pacientes[i].classList.add("paciente-invalido");
        
    } 

    if (altura <= 0 || altura >= 3.00){
        console.log("Altura Inválida");
        alturaEhValida = false;
        tdIMC.textContent = "Altura Inválida";
        //Está configurando um estilo que está setado lá no CSS
        pacientes[i].classList.add("paciente-invalido");
    } 

    if (alturaEhValida && pesoEhValido) {
        var imc = calculaImc(peso, altura);
        tdIMC.textContent = imc;
    }

}

function calculaImc(peso, altura){
    var imc = 0;
    imc = peso / (altura * altura);
    return imc.toFixed(2);
};