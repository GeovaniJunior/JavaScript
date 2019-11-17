var titulo = document.querySelector("h1");
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
        imc = peso / (altura * altura);
        tdIMC.textContent = imc.toFixed(2);
    }

}

var botaoAdicionar = document.querySelector("#adicionar-paciente");

botaoAdicionar.addEventListener("click", function(event){
    //Previne que não seja executado o comportamento padrão que é recarregar a página e esvaziar campos digitados.
    event.preventDefault();
    var form = document.querySelector("#form-adiciona");
    
    var nome = form.nome.value;
    var peso = form.peso.value;
    var altura = form.altura.value;
    var gordura =  form.gordura.value;

    var pacienteTr = document.createElement("tr");

    var nomeTd = document.createElement("td");
    var pesoTd = document.createElement("td");
    var alturaTd = document.createElement("td");
    var gorduraTd = document.createElement("td");
    var imcTd = document.createElement("td");

    nomeTd.textContent = nome;
    pesoTd.textContent = peso;
    alturaTd.textContent = altura;
    gorduraTd.textContent = gordura;
    imcTd.textContent = imc = peso / (altura * altura);

    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);
    pacienteTr.appendChild(imcTd);

    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);



} );

