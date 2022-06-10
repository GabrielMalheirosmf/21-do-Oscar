
var botao1 = document.getElementById('btn1');
    botao2 = document.getElementById('btn2');
    botao3 = document.getElementById('btn3');
    botao4 = document.getElementById('btn4');
    botao5 = document.getElementById('btn5');
    botao6 = document.getElementById('btn6');

var num = 0;

botao1.value = 1;
botao2.value = 2;
botao3.value = 3;
botao4.value = 4;
botao5.value = 5;
botao6.value = 6;

function butaoclick(click){
    botao1.value = +click + 1;
    botao2.value = +click + 2;
    botao3.value = +click + 3;
    botao4.value = +click + 1; 
    botao5.value = +click + 2;
    botao6.value = +click + 3;
}
botao1.onclick = () => {
    num=botao1.value;
    if(botao1.value == num && num == 21) alert("danilo gostoso!");
    if(botao1.value > num && num > 21) alert("bill gostoso");
    
    butaoclick(btn1.value)
}
botao2.onclick = () => {
    num=botao2.value;
    if(botao2.value == num && num == 21) alert("wel played");
    if(botao2.value > num && num > 21) alert("bad played");
    butaoclick(btn2.value)
}
botao3.onclick = () => {
    num=botao3.value;
    if(botao3.value == num && num == 21) alert("wel played");
    if(botao3.value > num && num > 21) alert("bad played");
    butaoclick(btn3.value)
}
botao4.onclick = () => {
    num=botao4.value;
    if(botao4.value == num && num == 21) alert("wel played");
    if(botao4.value > num && num > 21) alert("bad played");
    butaoclick(btn4.value)
}
botao5.onclick = () => {
    num=botao5.value;
    if(botao5.value == num && num == 21) alert("wel played");
    if(botao5.value > num && num > 21) alert("bad played");
    butaoclick(btn5.value)
}
botao6.onclick = () => {
    num=botao6.value;
    if(botao6.value == num && num == 21) alert("wel played");
    if(botao6.value > num && num > 21) alert("bad played");
    butaoclick(btn6.value)
}