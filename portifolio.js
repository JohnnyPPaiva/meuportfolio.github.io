/*::links ativos no menu::*/
let list = document.querySelectorAll('.nav li') /**/
function active() {
    list.forEach((i) => 
    i.classList.remove("active"))
    this.classList.add("active")
}
list.forEach((i) =>
i.addEventListener('click',active))

/*::menu hamburguer::*/
let menuToggle = document.querySelector('.mobile-menu')
let header = document.querySelector('header')
menuToggle.onclick = function() {
    header.classList.toggle('active')
}

/*::functions experiencia::*/
let divExp = document.getElementById("textInfos");

function mostraSabesp() {
    divExp.innerHTML = "Sabesp foi a primeira empresa que trabalhei, atuei como estagiário referente ao curso técnico profissionalizante em processamento de dados, concluido no ano de 2005. Com maior foco em atividades específicas da empresa como cadastro de clientes, montagem de itinerário de funcionarios externos e etc., não necessariamente com resolução de problemas de TI";   
}

function mostraVidax() {
    divExp.innerHTML = "Vidax, contact center onde atuei pela primeira vez como analista de suporte técnico nível 2, resolução de problemas referente a hardware e software desde usuários de call center a gerência";   
}

function mostraLbc() {
    divExp.innerHTML = "A LBC Sistemas é uma empresa especializada em software para Automação de Postos de Combustíveis e Lojas de Conveniência, trabalhei fazendo implantações, aplicando treinamentos e posteriormente prestando suporte ao sistema (Remoto e local)";   
}

function mostraInter() {
    divExp.innerHTML = "Trabalhei na Interadapt Solutions prestando suporte nível 1 na empresa Mapfre Seguros, através de suporte telefonico, encaminhamento de chamados e resolução de pequenos reparos (configuração de e-mail e impressoras)";   
}

function mostraAhead() {
    divExp.innerHTML = "A Ahead Contact Center é a empresa que oferece infra estrutura a call center, foi a empresa que trabalhei por mais tempo (12 anos) atuando como analista de suporte nível 2";   
}

function limpa() {
    divExp.innerHTML = "";
}

/*::functions projetos::*/
let divhProj = document.getElementById("htextProj")
let divpProj = document.getElementById("pTextProj")
let btnTmb = document.querySelector(".btnTmb")
let btnLogin = document.querySelector(".btnLogin")
let btnBit = document.querySelector(".btnBit")
let btnMoto = document.querySelector(".btnMoto")


function mostraTmb() {
    divhProj.innerHTML = "Calculadora de TMB"
    divpProj.innerHTML = "Esse projeto faz o calculo de taxa de metabolismo basal de acordo com dados informados pelo usuário como sexo, altura, idade e peso, e de acordo com a frequência de atividade diária ele mostra a TMB e gasto calórico diário da pessoa"
    btnTmb.style.display = "block"
    btnLogin.style.display = "none"
    btnBit.style.display = "none"
   
}

function mostraConv() {
    divhProj.innerHTML = "Conversor Binário e Decimal"
    divpProj.innerHTML = "Projeto simples feito em HTML, CSS e JavaScript, ele executa a conversão de um número binário em decimal ou um decimal em binário"
    btnTmb.style.display = "none"
    btnLogin.style.display = "none"
    btnBit.style.display = "block"
}

function mostraLogin() {
    divhProj.innerHTML = "Tela de login responsiva"
    divpProj.innerHTML = "Esse projeto foi feito ao longo do curso de HTML5 e CSS3 do Curso em Vídeo, uma tela de login estilizada e responsiva"
    btnTmb.style.display = "none"
    btnLogin.style.display = "block"
    btnBit.style.display = "none"
}

function mostraMoto() {
    divhProj.innerHTML = "Calculo de lucro para motoboy de app"
    divpProj.innerHTML = "Programa que faz o cálculo da média de valores ganhos e gastos em viagens diárias de motoboys em aplicativos, de acordo com kilometragem percorrida, valor do combustível e faturamento total ele mostra os valores que ele obteve de lucro e o quanto gastou em reais em combustível"
    btnTmb.style.display = "none"
    btnLogin.style.display = "none"
    btnBit.style.display = "none"
    btnMoto.style.display = "block"
}

function mostraVago() {
    divhProj.innerHTML = "Vago"
    divpProj.innerHTML = ""
    btnTmb.style.display = "none"
    btnLogin.style.display = "none"
    btnBit.style.display = "none"
    btnMoto.style.display = "none"
}