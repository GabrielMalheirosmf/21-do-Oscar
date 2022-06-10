var botao1 = document.getElementById('btn1');
botao2 = document.getElementById('btn2');
botao3 = document.getElementById('btn3');
botao4 = document.getElementById('btn4');
botao5 = document.getElementById('btn5');
botao6 = document.getElementById('btn6');

let num = 0;



botao1.value = 1;
botao2.value = 2;
botao3.value = 3;
botao4.value = 4;
botao5.value = 5;
botao6.value = 6;


function limpar() {
    botao1.disabled = true;
    botao2.disabled = true;
    botao3.disabled = true;
}
function limpar2() {
    botao4.disabled = true;
    botao5.disabled = true;
    botao6.disabled = true;
}
function add() {
    botao1.disabled = false;
    botao2.disabled = false;
    botao3.disabled = false;
}
function add2() {
    botao4.disabled = false;
    botao5.disabled = false;
    botao6.disabled = false;
}

function butaoclick(click) {
    botao1.value = +click + 1;
    botao2.value = +click + 2;
    botao3.value = +click + 3;
    botao4.value = +click + 1;
    botao5.value = +click + 2;
    botao6.value = +click + 3;
}
botao1.onclick = () => {
    num = botao1.value;
    if (botao1.value == num && num == 21){
        window.location.href = 'vitoria.html';
    }

    if (botao1.value > num && num > 21) {
        window.location.href = 'derrota.html';
    }

    butaoclick(btn1.value)
}
botao2.onclick = () => {
    num = botao2.value;
    if (botao2.value == num && num == 21){
        window.location.href = 'vitoria.html';
    }
    if (botao2.value > num && num > 21){
        window.location.href = 'derrota.html';
    }
    butaoclick(btn2.value)
}
botao3.onclick = () => {
    num = botao3.value;
    if (botao3.value == num && num == 21){
        window.location.href = 'vitoria.html';
    }
    if (botao3.value > num && num > 21) {
        window.location.href = 'derrota.html';
    }
    butaoclick(btn3.value)
}
