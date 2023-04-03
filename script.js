var userPadrao = 'admin'
var senhaPadrao = 'admin'
var userCad = localStorage.getItem('userCad');
var passCad = localStorage.getItem('passCad');
var passConf

/* alert(`usuario e senha padrão (${userPadrao}, ${senhaPadrao})`) */

function logar() {
    var user = document.getElementById('login').value
    var pass = document.getElementById('senha').value
    if (user == userPadrao && pass == senhaPadrao) {
        alert(`Bem vindo, ${user}`)
    } else if (user == userCad && pass == passCad) {
        alert(`Bem vindo, ${user}`)
    } else {
        alert('Usuario e senha Não encontrados')
    }
    document.getElementById('senha1').value = "";
    document.getElementById('senha2').value = "";
}

function cadastrar() {
    userCad = document.getElementById('loginCad').value
    passCad = document.getElementById('senha1').value
    passConf = document.getElementById('senha2').value
    if (passCad == passConf) {
        alert(`Usuario e Senha Cadastrados ${userCad} ${passCad}`)
        localStorage.setItem('userCad', userCad);
        localStorage.setItem('passCad', passCad);
        const url = "index.html";
        window.location.href = url;
    } else {
        alert('Senha não confere...')
        document.getElementById('senha1').value = "";
        document.getElementById('senha2').value = "";
    }
}

